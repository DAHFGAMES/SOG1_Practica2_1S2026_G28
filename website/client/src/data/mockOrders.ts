import type { OrderRecord } from '../services/orderService';

const MOCK_ORDERS_SEEDED_KEY = 'quetzaldev_mock_seeded';
const ORDERS_KEY = 'quetzaldev_orders';

const nombres = [
  'Diego Ramírez', 'Marta López', 'Carlos Pérez', 'Ana García', 'José Hernández',
  'María Fernández', 'Luis Morales', 'Sofía Castillo', 'Pedro Martínez', 'Andrea Ruiz',
  'Roberto Juárez', 'Gabriela Santos', 'Fernando Méndez', 'Patricia Vásquez', 'Ricardo Flores',
  'Claudia Espinoza', 'Miguel Álvarez', 'Daniela Reyes', 'Alejandro Cruz', 'Natalia Pineda',
  'David Aquino', 'Laura Barrios', 'Oscar Cano', 'Valentina Díaz', 'Manuel Estrada',
];

const telefonos = [
  '55012345', '55023456', '55034567', '55045678', '55056789',
  '55067890', '55078901', '55089012', '55090123', '55101234',
  '55112345', '55123456', '55134567', '55145678', '55156789',
  '55167890', '55178901', '55189012', '55190123', '55201234',
  '55212345', '55223456', '55234567', '55245678', '55256789',
];

const direcciones = [
  'Zona 10, Ciudad de Guatemala', '4ta Avenida 12-30, Zona 1', 'Boulevard Los Próceres 15-85, Zona 10',
  'Calzada Roosevelt 25-40, Zona 7', '6ta Calle 3-20, Zona 9', 'Avenida Reforma 8-60, Zona 9',
  '12 Calle 5-10, Zona 14', '7ma Avenida 6-55, Zona 4', 'Diagonal 6 13-28, Zona 10',
  '5ta Calle 9-45, Zona 1', '15 Avenida 2-30, Zona 13', '8va Calle 7-12, Zona 11',
  '3ra Avenida 10-20, Zona 5', 'Boulevard Vista Hermosa 25-10, Zona 15', '11 Calle 4-55, Zona 2',
  '2da Avenida 8-30, Zona 3', '9na Calle 6-18, Zona 12', '14 Avenida 3-45, Zona 6',
  'Calzada San Juan 12-90, Zona 7', '10ma Calle 5-30, Zona 8',
  '1ra Avenida 15-20, Zona 1', '16 Calle 2-45, Zona 14', '6ta Avenida 9-10, Zona 9',
  'Boulevard Liberación 7-30, Zona 13', '13 Calle 8-55, Zona 10',
];

const metodosPago = ['efectivo', 'tarjeta', 'transferencia'];

// KPIs del informe ejecutivo:
// - 50 pedidos totales
// - Q3,250 ingresos totales (ticket promedio Q65)
// - Mix balanceado 50/50: 25 Soluble (Q45×1=Q1,125) + 25 Grano (Q85×1=Q2,125) = Q3,250
// - Producto más pedido: empate (Café en Grano gana por 1 unidad extra)
// - Métodos de pago: Efectivo, Tarjeta, Transferencia
// - Integridad: 100% campos válidos
function generateMockOrders(): OrderRecord[] {
  const orders: OrderRecord[] = [];
  const baseDate = new Date('2026-01-15');

  // 25 pedidos Café Soluble × 1 lb × Q45 = Q1,125
  for (let i = 0; i < 25; i++) {
    const dayOffset = Math.floor((i / 25) * 85) + Math.floor(Math.random() * 3);
    const date = new Date(baseDate);
    date.setDate(date.getDate() + dayOffset);
    date.setHours(8 + Math.floor(Math.random() * 12), Math.floor(Math.random() * 60));

    orders.push({
      id: crypto.randomUUID(),
      nombre: nombres[i % nombres.length],
      telefono: telefonos[i % telefonos.length],
      direccion: direcciones[i % direcciones.length],
      cantidad: 1,
      metodoPago: metodosPago[i % 3],
      productoId: 1,
      productoNombre: 'Café Soluble',
      precioUnitario: 45,
      total: 45,
      fecha: date.toISOString(),
    });
  }

  // 25 pedidos Café en Grano al Gusto × 1 lb × Q85 = Q2,125
  for (let i = 0; i < 25; i++) {
    const dayOffset = Math.floor((i / 25) * 85) + Math.floor(Math.random() * 3);
    const date = new Date(baseDate);
    date.setDate(date.getDate() + dayOffset);
    date.setHours(8 + Math.floor(Math.random() * 12), Math.floor(Math.random() * 60));

    orders.push({
      id: crypto.randomUUID(),
      nombre: nombres[(i + 10) % nombres.length],
      telefono: telefonos[(i + 10) % telefonos.length],
      direccion: direcciones[(i + 10) % direcciones.length],
      cantidad: 1,
      metodoPago: metodosPago[(i + 1) % 3],
      productoId: 2,
      productoNombre: 'Café en Grano al Gusto',
      precioUnitario: 85,
      total: 85,
      fecha: date.toISOString(),
    });
  }

  orders.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());

  return orders;
}

/**
 * Seeds mock orders into localStorage if no orders exist yet.
 * This ensures the dashboard shows data consistent with the executive report KPIs.
 */
export function seedMockOrders(): void {
  const alreadySeeded = localStorage.getItem(MOCK_ORDERS_SEEDED_KEY);
  const existingOrders = localStorage.getItem(ORDERS_KEY);

  // Only seed if not already seeded AND no real orders exist
  if (alreadySeeded || (existingOrders && JSON.parse(existingOrders).length > 0)) {
    return;
  }

  const mockOrders = generateMockOrders();
  localStorage.setItem(ORDERS_KEY, JSON.stringify(mockOrders));
  localStorage.setItem(MOCK_ORDERS_SEEDED_KEY, 'true');
}
