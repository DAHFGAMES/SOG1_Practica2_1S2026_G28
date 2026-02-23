import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/atoms/Card';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import Logo from '../../components/atoms/Logo';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ usuario: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.usuario.trim() || !form.password.trim()) {
      setError('Todos los campos son requeridos');
      return;
    }

    if (form.usuario === 'admin' && form.password === 'admin123') {
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="register">
      <Card className="register__card" padding="40px">
        <div className="register__header">
          <Logo size="md" />
          <h2>Panel de Administración</h2>
          <p className="register__description">
            Ingresa tus credenciales para acceder
          </p>
        </div>

        <form className="register__form" onSubmit={handleSubmit}>
          <Input
            id="usuario"
            label="Usuario"
            placeholder="Usuario"
            value={form.usuario}
            onChange={(e) => handleChange('usuario', e.target.value)}
          />

          <Input
            id="password"
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />

          {error && (
            <Card variant="pressed" padding="12px 16px" className="register__error">
              {error}
            </Card>
          )}

          <Button type="submit" variant="primary" size="lg" fullWidth>
            Ingresar
          </Button>
        </form>
      </Card>
    </div>
  );
}
