const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory storage for orders
const orders = [];

// POST /api/orders - Create a new order
app.post('/api/orders', (req, res) => {
  const {
    nombre,
    telefono,
    direccion,
    cantidad,
    metodoPago,
    productoId,
    productoNombre,
    precioUnitario,
    total,
  } = req.body;

  if (!nombre || !telefono || !direccion || !cantidad || !metodoPago || !productoNombre) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const order = {
    id: crypto.randomUUID(),
    nombre,
    telefono,
    direccion,
    cantidad,
    metodoPago,
    productoId,
    productoNombre,
    precioUnitario,
    total,
    fecha: new Date().toISOString(),
  };

  orders.push(order);
  console.log(`[NEW ORDER] ${order.id} - ${productoNombre} x${cantidad} - ${nombre}`);

  res.status(201).json(order);
});

// GET /api/orders - Get all orders
app.get('/api/orders', (_req, res) => {
  const sorted = [...orders].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
  res.json(sorted);
});

// GET /api/stats - Get dashboard statistics
app.get('/api/stats', (_req, res) => {
  const totalPedidos = orders.length;
  const ingresoTotal = orders.reduce((sum, o) => sum + o.total, 0);
  const cantidadTotal = orders.reduce((sum, o) => sum + o.cantidad, 0);

  // Find most ordered product
  const productCount = {};
  orders.forEach((o) => {
    productCount[o.productoNombre] = (productCount[o.productoNombre] || 0) + o.cantidad;
  });

  let productoMasPedido = '—';
  let maxCount = 0;
  for (const [name, count] of Object.entries(productCount)) {
    if (count > maxCount) {
      maxCount = count;
      productoMasPedido = name;
    }
  }

  res.json({
    totalPedidos,
    ingresoTotal,
    cantidadTotal,
    productoMasPedido,
  });
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', orders: orders.length });
});

app.listen(PORT, () => {
  console.log(`QuetzalDev Server running on http://localhost:${PORT}`);
});
