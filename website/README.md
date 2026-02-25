# Página Web para QuetzalDev

## Partes con la que debe contar la página web

- [x] Landing Page
- [x] Registro / Login
- [x] Catálogo de productos
- [x] Checkout (captura de datos: nombre, teléfono, dirección, cantidad, método de pago)
- [x] Confirmación de pedido
- [x] Dashboard del dueño (estadísticas y listado de pedidos)

## Stack Técnico

- **Frontend:** React 19 + TypeScript + Vite (neumorfismo CSS puro)
- **Persistencia:** localStorage (sin backend)
- **Arquitectura:** Atomic Design (atoms → molecules → organisms → pages)
- **Deploy:** GitHub Pages (automático vía GitHub Actions)

## Cómo ejecutar localmente

```bash
cd client
npm install
npm run dev
```

## Deploy

El sitio se despliega automáticamente a GitHub Pages al hacer push a la rama `main`.

## Credenciales del Dashboard

- **Usuario:** admin
- **Contraseña:** admin123
