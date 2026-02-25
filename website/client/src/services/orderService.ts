const ORDERS_KEY = 'quetzaldev_orders';

export interface OrderRecord {
  id: string;
  nombre: string;
  telefono: string;
  direccion: string;
  cantidad: number;
  metodoPago: string;
  productoId: number;
  productoNombre: string;
  precioUnitario: number;
  total: number;
  fecha: string;
}

export interface Stats {
  totalPedidos: number;
  ingresoTotal: number;
  productoMasPedido: string;
  cantidadTotal: number;
}

function getOrders(): OrderRecord[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveOrders(orders: OrderRecord[]): void {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function createOrder(
  payload: Omit<OrderRecord, 'id' | 'fecha'>
): OrderRecord {
  const order: OrderRecord = {
    ...payload,
    id: crypto.randomUUID(),
    fecha: new Date().toISOString(),
  };
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
  return order;
}

export function fetchOrders(): OrderRecord[] {
  return getOrders().sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );
}

export function fetchStats(): Stats {
  const orders = getOrders();
  const totalPedidos = orders.length;
  const ingresoTotal = orders.reduce((sum, o) => sum + o.total, 0);
  const cantidadTotal = orders.reduce((sum, o) => sum + o.cantidad, 0);

  const productCount: Record<string, number> = {};
  orders.forEach((o) => {
    productCount[o.productoNombre] =
      (productCount[o.productoNombre] || 0) + o.cantidad;
  });

  let productoMasPedido = '—';
  let maxCount = 0;
  for (const [name, count] of Object.entries(productCount)) {
    if (count > maxCount) {
      maxCount = count;
      productoMasPedido = name;
    }
  }

  return { totalPedidos, ingresoTotal, cantidadTotal, productoMasPedido };
}
