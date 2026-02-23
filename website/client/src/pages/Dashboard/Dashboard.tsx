import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/atoms/Card';
import Button from '../../components/atoms/Button';
import Badge from '../../components/atoms/Badge';
import './Dashboard.css';

interface OrderRecord {
  id: string;
  nombre: string;
  telefono: string;
  direccion: string;
  cantidad: number;
  metodoPago: string;
  productoNombre: string;
  precioUnitario: number;
  total: number;
  fecha: string;
}

interface Stats {
  totalPedidos: number;
  ingresoTotal: number;
  productoMasPedido: string;
  cantidadTotal: number;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const paymentLabels: Record<string, string> = {
  efectivo: 'Efectivo',
  tarjeta: 'Tarjeta',
  transferencia: 'Transferencia',
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, statsRes] = await Promise.all([
          fetch(`${API_URL}/api/orders`),
          fetch(`${API_URL}/api/stats`),
        ]);
        const ordersData = await ordersRes.json();
        const statsData = await statsRes.json();
        setOrders(ordersData);
        setStats(statsData);
      } catch {
        setOrders([]);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    navigate('/admin');
  };

  if (loading) {
    return (
      <div className="dashboard">
        <Card className="dashboard__loading" padding="48px">
          <svg className="dashboard__loading-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
          </svg>
          <p>Cargando datos...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <div>
          <h1>Panel de Administración</h1>
          <p className="dashboard__welcome">Bienvenido, dueño de QuetzalDev</p>
        </div>
        <Button variant="ghost" size="sm" onClick={handleLogout}>
          Cerrar Sesión
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="dashboard__stats">
        <Card className="dashboard__stat" padding="24px">
          <span className="dashboard__stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          </span>
          <div>
            <p className="dashboard__stat-value">{stats?.totalPedidos ?? 0}</p>
            <p className="dashboard__stat-label">Total Pedidos</p>
          </div>
        </Card>
        <Card className="dashboard__stat" padding="24px">
          <span className="dashboard__stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </span>
          <div>
            <p className="dashboard__stat-value">Q{(stats?.ingresoTotal ?? 0).toFixed(2)}</p>
            <p className="dashboard__stat-label">Ingreso Total</p>
          </div>
        </Card>
        <Card className="dashboard__stat" padding="24px">
          <span className="dashboard__stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </span>
          <div>
            <p className="dashboard__stat-value">{stats?.productoMasPedido ?? '—'}</p>
            <p className="dashboard__stat-label">Más Pedido</p>
          </div>
        </Card>
        <Card className="dashboard__stat" padding="24px">
          <span className="dashboard__stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
          </span>
          <div>
            <p className="dashboard__stat-value">{stats?.cantidadTotal ?? 0} lb</p>
            <p className="dashboard__stat-label">Libras Vendidas</p>
          </div>
        </Card>
      </div>

      {/* Orders Table */}
      <Card className="dashboard__orders-card" padding="24px">
        <h2 className="dashboard__orders-title">Pedidos Recientes</h2>
        {orders.length === 0 ? (
          <div className="dashboard__no-orders">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
            </svg>
            <p>No hay pedidos registrados aún.</p>
          </div>
        ) : (
          <div className="dashboard__table-wrapper">
            <table className="dashboard__table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Cant.</th>
                  <th>Total</th>
                  <th>Pago</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td><Badge>{order.id.slice(0, 8)}</Badge></td>
                    <td>
                      <div className="dashboard__client">
                        <span className="dashboard__client-name">{order.nombre}</span>
                        <span className="dashboard__client-phone">{order.telefono}</span>
                      </div>
                    </td>
                    <td>{order.productoNombre}</td>
                    <td>{order.cantidad} lb</td>
                    <td className="dashboard__total">Q{order.total.toFixed(2)}</td>
                    <td>
                      <Badge variant="success">
                        {paymentLabels[order.metodoPago] || order.metodoPago}
                      </Badge>
                    </td>
                    <td className="dashboard__date">
                      {new Date(order.fecha).toLocaleDateString('es-GT', {
                        day: '2-digit',
                        month: 'short',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
