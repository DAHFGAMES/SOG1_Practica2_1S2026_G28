# Práctica 2 — Sistemas Organizacionales y Gerenciales 1
## Grupo 28 | Primer Semestre 2026
### Sección asignada: Estrategia de Arquitectura de Información + Especificación de la Estructura Web

> **Elaborado por:** Enner  
> **Empresa analizada:** QuetzalDev  
> **Rubro:** Venta en línea de café guatemalteco de especialidad  
> **Fecha:** Febrero 2026

---

## Índice de esta sección

1. [Estrategia de Arquitectura de Información](#1-estrategia-de-arquitectura-de-información)
   1. [Plan Estratégico — Segmentación](#11-plan-estratégico--segmentación)
   2. [Plan Operativo — Customer Journey](#12-plan-operativo--customer-journey)
   3. [Plan de un solo uso — Avatar del Cliente](#13-plan-de-un-solo-uso--avatar-del-cliente)
   4. [Plan Direccional — Pirámide de Objetivos](#14-plan-direccional--pirámide-de-objetivos)
   5. [Plan Permanente — Golden Circle](#15-plan-permanente--golden-circle)
2. [Especificación Detallada de la Estructura Web](#2-especificación-detallada-de-la-estructura-web)
   1. [Arquitectura General del Sistema](#21-arquitectura-general-del-sistema)
   2. [Mapa del Sitio](#22-mapa-del-sitio)
   3. [Estructura de Componentes (Atomic Design)](#23-estructura-de-componentes-atomic-design)
   4. [Flujo de Datos y API REST](#24-flujo-de-datos-y-api-rest)
   5. [Modelo de Datos](#25-modelo-de-datos)
   6. [Diseño e Identidad Visual](#26-diseño-e-identidad-visual)

---

## 1. Estrategia de Arquitectura de Información

La arquitectura de información de QuetzalDev fue diseñada para alinear los intereses del negocio con las necesidades reales de sus clientes. A continuación se desarrollan los cinco planes que conforman esta estrategia.

---

### 1.1 Plan Estratégico — Segmentación

La segmentación de mercado permite identificar con precisión a quién va dirigida la plataforma y tomar decisiones de diseño orientadas a ese público.

#### Segmentación Demográfica

| Variable | Descripción |
|---|---|
| **Edad** | 22 – 45 años |
| **Género** | Sin distinción |
| **Nivel socioeconómico** | Medio y medio-alto |
| **Ocupación** | Profesionales, estudiantes universitarios, emprendedores |
| **Nivel educativo** | Educación media superior o universitaria |

#### Segmentación Geográfica

| Variable | Descripción |
|---|---|
| **País** | República de Guatemala |
| **Zona principal** | Área metropolitana (Guatemala City) y ciudades intermedias |
| **Canal de entrega** | Nacional, con capacidad de envío a domicilio |

#### Segmentación Psicográfica

| Variable | Descripción |
|---|---|
| **Estilo de vida** | Consumidor consciente, valora la autenticidad y el origen de los productos |
| **Valores** | Sostenibilidad, apoyo al productor local, calidad sobre cantidad |
| **Intereses** | Café de especialidad, gastronomía, cultura guatemalteca |
| **Actitud frente al e-commerce** | Cómodo comprando en línea, usa dispositivos móviles |

#### Segmentación Conductual

| Variable | Descripción |
|---|---|
| **Frecuencia de compra** | Recurrente (mensual a quincenal) |
| **Beneficio buscado** | Café de calidad superior, conveniente y entregado a domicilio |
| **Lealtad** | Alta potencial; dispuestos a fidelizarse con una marca que comparte sus valores |
| **Etapa en el proceso** | Tanto nuevos compradores como compradores habituales |

#### Segmento Objetivo Principal

> Adultos jóvenes (25–38 años) residentes en Guatemala, con ingresos medios o medio-altos, interesados en el café como experiencia y no solo como commodity, que prefieren apoyar marcas locales y realizan sus compras de forma digital.

---

### 1.2 Plan Operativo — Customer Journey

El Customer Journey mapea cada punto de contacto que tiene el cliente con QuetzalDev, desde el primer instante en que conoce la marca hasta que se convierte en un comprador fiel.

#### Etapas del Recorrido

```
[DESCUBRIMIENTO] → [CONSIDERACIÓN] → [DECISIÓN] → [COMPRA] → [POST-COMPRA]
```

---

#### Etapa 1: Descubrimiento

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Redes sociales, búsqueda orgánica (SEO), recomendación boca a boca |
| **Acción del usuario** | Ingresa a la Landing Page de QuetzalDev |
| **Emoción** | Curiosidad, primera impresión positiva |
| **Touchpoint web** | `Landing Page (/)` — hero visual, propuesta de valor, llamada a acción |
| **Objetivo de diseño** | Capturar atención en los primeros 5 segundos; transmitir calidad y origen guatemalteco |

---

#### Etapa 2: Consideración

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Catálogo de productos, descripciones, imágenes de producto |
| **Acción del usuario** | Navega el catálogo, lee descripciones, compara productos |
| **Emoción** | Interés, evaluación, deseo |
| **Touchpoint web** | `Catálogo (/catalogo)` — tarjetas de producto con imagen doble, precio, descripción, origen |
| **Objetivo de diseño** | Generar confianza en la calidad del producto; facilitar la comparación |

---

#### Etapa 3: Decisión

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Carrito de compras, selección de cantidad |
| **Acción del usuario** | Agrega producto al carrito, revisa su selección |
| **Emoción** | Seguridad o duda; momento crítico de conversión |
| **Touchpoint web** | `Cart (/cart)` — resumen de artículos, cantidades, total |
| **Objetivo de diseño** | Reducir fricción; mostrar valor y total de forma clara |

---

#### Etapa 4: Compra

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Formulario de checkout |
| **Acción del usuario** | Completa nombre, teléfono, dirección, cantidad y método de pago |
| **Emoción** | Compromiso, expectativa |
| **Touchpoint web** | `Checkout (/checkout)` — formulario validado, resumen del pedido, selector de pago |
| **Objetivo de diseño** | Formulario simple, claro y sin distractores; generar confianza al capturar datos sensibles |

---

#### Etapa 5: Post-Compra

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Página de confirmación, posible comunicación por teléfono |
| **Acción del usuario** | Recibe confirmación con número de pedido y detalles |
| **Emoción** | Satisfacción, alivio |
| **Touchpoint web** | `Confirmación (/confirmacion)` — número de pedido, resumen, mensaje de agradecimiento |
| **Objetivo de diseño** | Cerrar el ciclo con una experiencia positiva; invitar a volver |

---

#### Diagrama Simplificado del Customer Journey

```
Usuario
  │
  ▼
Landing Page          ← Primera impresión, propuesta de valor
  │
  ▼
Catálogo              ← Exploración de productos (Café Soluble / Café en Grano)
  │
  ▼
Carrito               ← Revisión antes de comprometerse
  │
  ▼
Checkout              ← Captura de datos del pedido
  │
  ▼
Confirmación          ← Cierre satisfactorio de la experiencia
  │
  ▼
(Fidelización)        ← Regresa en futuras compras
```

---

### 1.3 Plan de un solo uso — Avatar del Cliente

El avatar es una representación semificticia del cliente ideal de QuetzalDev, basada en el análisis del segmento objetivo.

---

#### 👤 Avatar Principal: "Diego"

| Campo | Detalle |
|---|---|
| **Nombre ficticio** | Diego Morales |
| **Edad** | 30 años |
| **Ocupación** | Diseñador UX en empresa tech, trabaja en modalidad híbrida |
| **Ubicación** | Ciudad de Guatemala, zona 10 |
| **Ingresos mensuales** | Q 8,000 – Q 12,000 |
| **Estado civil** | Soltero, vive solo |
| **Nivel educativo** | Licenciatura en Diseño Gráfico |

##### Historia de Diego

Diego empieza su día de trabajo con una buena taza de café. A diferencia de la mayoría de sus compañeros, no se conforma con café de sobre; disfruta explorar distintos orígenes y perfiles de tueste. Le importa apoyar al productor guatemalteco y, cuando en las redes sociales vio una publicación sobre QuetzalDev, el origen de las tierras altas de Guatemala lo atrapó de inmediato.

##### Motivaciones

- Quiere café de alta calidad sin tener que ir a una cafetería especializada.
- Le interesa la historia y el origen del producto que consume.
- Valora la conveniencia: orden en línea, entrega a domicilio.
- Siente orgullo de apoyar productos guatemaltecos.

##### Frustraciones

- Los supermercados no ofrecen café de especialidad a precio justo.
- En algunas tiendas en línea el proceso de compra es complicado o poco confiable.
- No siempre confía en dar sus datos si el sitio no transmite seriedad.

##### Comportamiento digital

- Usa Instagram y TikTok a diario.
- Compra en línea al menos 2 veces al mes.
- Lee reseñas antes de comprar algo nuevo.
- Valora el diseño del sitio como indicador de confianza.

##### Lo que QuetzalDev le ofrece

> Un sitio limpio, confiable y bien diseñado desde donde puede ordenar su café favorito en menos de 3 minutos, con la certeza de que está apoyando a productores guatemaltecos.

---

#### 👤 Avatar Secundario: "Marta"

| Campo | Detalle |
|---|---|
| **Nombre ficticio** | Marta López |
| **Edad** | 42 años |
| **Ocupación** | Gerente administrativa en empresa familiar |
| **Ubicación** | Mixco, Guatemala |
| **Ingresos mensuales** | Q 15,000 |
| **Estado civil** | Casada, 2 hijos |

##### Motivaciones de Marta

- Busca un regalo especial para clientes o colaboradores (café artesanal guatemalteco).
- Le interesa comprar en cantidad para uso en la oficina.
- Valora la facilidad de pago y la rapidez del proceso.

---

### 1.4 Plan Direccional — Pirámide de Objetivos

La Pirámide de Objetivos organiza las metas del negocio en niveles jerárquicos, desde la misión macro hasta los indicadores operativos diarios.

```
                     ▲
                    /|\
                   / | \
                  /  |  \
                 /   |   \
        ┌────────────────────────┐
        │        MISIÓN          │  Llevar el mejor café guatemalteco
        │                        │  de especialidad directamente al
        │                        │  consumidor final, con dignidad
        │                        │  para el productor y calidad en
        │                        │  cada taza.
        └────────────────────────┘
        ┌────────────────────────┐
        │        VISIÓN          │  Ser la plataforma de referencia
        │                        │  para el café artesanal guatemalteco
        │                        │  en el mercado nacional digital
        │                        │  para 2028.
        └────────────────────────┘
        ┌────────────────────────┐
        │  OBJETIVOS             │  • Alcanzar 200 pedidos mensuales
        │  ESTRATÉGICOS          │    en el primer año de operación.
        │                        │  • Mantener una tasa de clientes
        │                        │    recurrentes superior al 40%.
        │                        │  • Ampliar el catálogo a 5 productos
        │                        │    en los primeros 6 meses.
        └────────────────────────┘
        ┌────────────────────────┐
        │  OBJETIVOS             │  • Procesar pedidos en un máximo
        │  TÁCTICOS              │    de 24 horas hábiles.
        │                        │  • Mantener tasa de abandono de
        │                        │    checkout < 30%.
        │                        │  • Publicar 3 contenidos semanales
        │                        │    en redes sociales.
        └────────────────────────┘
        ┌────────────────────────┐
        │  OBJETIVOS             │  • Cargar el sitio en < 2 segundos.
        │  OPERATIVOS            │  • Responder consultas en < 2 horas.
        │                        │  • Procesar pagos sin errores
        │                        │    al 100% de los pedidos.
        └────────────────────────┘
```

---

### 1.5 Plan Permanente — Golden Circle

El Golden Circle de Simon Sinek parte desde el "Por qué" de la organización como núcleo de su identidad, y se expande hacia el "Cómo" y el "Qué".

```
        ┌──────────────────────────────────────────────────────────┐
        │                                                          │
        │   ┌─────────────────────────────────────────────────┐   │
        │   │                                                 │   │
        │   │   ┌─────────────────────────────────────────┐  │   │
        │   │   │                                         │  │   │
        │   │   │             ¿POR QUÉ?                   │  │   │
        │   │   │                                         │  │   │
        │   │   │  Creemos que el café guatemalteco       │  │   │
        │   │   │  merece ser reconocido como uno de      │  │   │
        │   │   │  los mejores del mundo. Existimos       │  │   │
        │   │   │  para dar al productor local la         │  │   │
        │   │   │  visibilidad que merece y al            │  │   │
        │   │   │  consumidor una experiencia auténtica.  │  │   │
        │   │   │                                         │  │   │
        │   │   └─────────────────────────────────────────┘  │   │
        │   │                                                 │   │
        │   │                  ¿CÓMO?                         │   │
        │   │                                                 │   │
        │   │  • Seleccionando granos de las tierras altas   │   │
        │   │    de Guatemala (> 1,500 msnm).                │   │
        │   │  • Tostando artesanalmente según preferencia   │   │
        │   │    del cliente (fino, medio, grueso).           │   │
        │   │  • Comercio justo: trabajo directo con el      │   │
        │   │    agricultor.                                  │   │
        │   │  • Plataforma digital accesible y bien         │   │
        │   │    diseñada para una compra sin fricción.       │   │
        │   │                                                 │   │
        │   └─────────────────────────────────────────────────┘   │
        │                                                          │
        │                       ¿QUÉ?                              │
        │                                                          │
        │  • Café Soluble de alta calidad (Q 45.00)               │
        │  • Café en Grano al Gusto, molido a pedido (Q 85.00)    │
        │  • Entrega a domicilio en Guatemala                      │
        │  • Plataforma de pedidos en línea: QuetzalDev            │
        │                                                          │
        └──────────────────────────────────────────────────────────┘
```

#### Síntesis del Golden Circle

| Nivel | Contenido |
|---|---|
| **¿Por qué?** | Democratizar el acceso al café guatemalteco de especialidad, honrando al productor local y ofreciendo autenticidad al consumidor. |
| **¿Cómo?** | Mediante selección rigurosa de granos, tostado artesanal personalizado, comercio justo con el agricultor y una plataforma digital sencilla y confiable. |
| **¿Qué?** | Café Soluble y Café en Grano al Gusto, vendidos en línea con entrega a domicilio en Guatemala. |

---

## 2. Especificación Detallada de la Estructura Web

La plataforma web de QuetzalDev fue desarrollada con un stack moderno de JavaScript, separando claramente el cliente (frontend) del servidor (backend). A continuación se documenta su arquitectura completa.

---

### 2.1 Arquitectura General del Sistema

La aplicación sigue una arquitectura **cliente-servidor desacoplada**:

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENTE (Browser)                            │
│                                                                      │
│   React 19 + TypeScript + Vite                                       │
│   ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌────────────────┐  │
│   │  Landing  │  │ Catálogo  │  │  Checkout │  │   Dashboard   │  │
│   │  Register │  │   Cart    │  │Confirmación│  │   (Admin)     │  │
│   └───────────┘  └───────────┘  └───────────┘  └────────────────┘  │
│                                                                      │
│   Atomic Design: atoms → molecules → organisms → pages              │
│   Estado global: React Context (CartContext)                         │
└───────────────────────────────┬─────────────────────────────────────┘
                                │  HTTP / REST API (fetch)
                                │  Puerto: 5173 (dev) ↔ 3001
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         SERVIDOR (Node.js)                           │
│                                                                      │
│   Express 5 — API REST                                               │
│   Puerto: 3001                                                       │
│                                                                      │
│   POST /api/orders     ← Crear nuevo pedido                         │
│   GET  /api/orders     ← Listar todos los pedidos                   │
│   GET  /api/stats      ← Estadísticas del dashboard                 │
│   GET  /api/health     ← Health check del servidor                  │
│                                                                      │
│   Almacenamiento: In-memory (array en tiempo de ejecución)          │
└─────────────────────────────────────────────────────────────────────┘
```

#### Stack Tecnológico

| Capa | Tecnología | Versión | Uso |
|---|---|---|---|
| Frontend — Framework | React | 19 | UI reactiva basada en componentes |
| Frontend — Lenguaje | TypeScript | 5.x | Tipado estático |
| Frontend — Build tool | Vite | 6.x | Empaquetado y servidor de desarrollo |
| Frontend — Routing | React Router | 7.x | Navegación entre páginas |
| Frontend — Estilos | CSS puro (neumorfismo) | — | Identidad visual de la marca |
| Backend — Runtime | Node.js | 24.x | Entorno de ejecución del servidor |
| Backend — Framework | Express | 5.x | API REST ligera |
| Backend — CORS | cors | 2.x | Permitir peticiones cross-origin |

---

### 2.2 Mapa del Sitio

```
QuetzalDev Web App
│
├── / ─────────── Landing Page
│       Hero con imagen de parallax, propuesta de valor,
│       sección de servicios, sección de características,
│       CTA hacia el catálogo
│
├── /registro ── Registro / Login
│       Formulario de acceso (sin backend real,
│       credenciales hardcoded: admin / admin123)
│
├── /catalogo ── Catálogo de Productos
│       Listado de tarjetas de producto (ProductCard)
│       Cada tarjeta: imagen doble hover, nombre, origen,
│       descripción, precio, botón "Agregar al carrito"
│
├── /cart ────── Carrito de Compras
│       Artículos agregados, cantidades, subtotal,
│       botón "Proceder al Checkout"
│
├── /checkout ── Checkout
│       Formulario: nombre, teléfono, dirección,
│       cantidad, método de pago (efectivo / tarjeta /
│       transferencia), resumen del pedido,
│       confirmación de envío a la API
│
├── /confirmacion ─ Confirmación de Pedido
│       Número de orden, resumen completo,
│       mensaje de agradecimiento, estado del pedido
│
└── /admin ───── Dashboard del Propietario
        Login simple → vista de estadísticas:
        total de pedidos, ingresos totales, producto
        más vendido, cantidad total de unidades;
        tabla de pedidos con todos los campos
```

---

### 2.3 Estructura de Componentes (Atomic Design)

La interfaz fue construida siguiendo la metodología **Atomic Design**, que organiza los componentes de menor a mayor complejidad.

#### Nivel 1 — Átomos (atoms)

Los átomos son los elementos de UI más básicos e indivisibles.

| Componente | Descripción | Props relevantes |
|---|---|---|
| `<Button>` | Botón con variantes de estilo y tamaño | `variant`, `size`, `onClick`, `disabled` |
| `<Input>` | Campo de texto con label y validación | `label`, `type`, `value`, `onChange`, `error` |
| `<Select>` | Selector desplegable con estilo personalizado | `label`, `options`, `value`, `onChange` |
| `<Card>` | Contenedor con sombra neumórfica | `padding`, `className`, `children` |
| `<Badge>` | Etiqueta de estado (ej. método de pago) | `variant`, `children` |
| `<Logo>` | Logotipo de QuetzalDev con SVG propio | — |

#### Nivel 2 — Moléculas (molecules)

Las moléculas combinan átomos para formar funcionalidades específicas.

| Componente | Descripción | Átomos que combina |
|---|---|---|
| `<ProductCard>` | Tarjeta completa de un producto del catálogo | `Card`, `Button`, `Badge` |
| `<PaymentMethodSelector>` | Selector visual de método de pago | `Card`, `Input` (radio) |
| `<Navbar>` | Barra de navegación con enlaces y logo | `Logo`, `Button` |

#### Nivel 3 — Organismos (organisms)

Los organismos son secciones completas y autónomas que integran múltiples moléculas.

| Componente | Descripción | Ubicación |
|---|---|---|
| `<Header>` | Encabezado global del sitio con navegación completa | Todas las páginas |
| `<Footer>` | Pie de página con información de contacto y marca | Todas las páginas |

#### Nivel 4 — Páginas (pages)

Las páginas son las vistas completas de la aplicación, cada una con su propio archivo CSS.

| Página | Ruta | Descripción |
|---|---|---|
| `Landing` | `/` | Página de inicio con secciones de hero, servicios y características |
| `Register` | `/registro` | Acceso al sistema (login simulado) |
| `Catalog` | `/catalogo` | Listado de todos los productos disponibles |
| `Cart` | `/cart` | Vista del carrito de compras con control de cantidades |
| `Checkout` | `/checkout` | Formulario completo de captura del pedido |
| `Confirmation` | `/confirmacion` | Confirmación exitosa del pedido con detalles |
| `Dashboard` | `/admin` | Panel de control del propietario con estadísticas y pedidos |

---

### 2.4 Flujo de Datos y API REST

#### Flujo de Creación de un Pedido

```
Cliente (React)                          Servidor (Express)
     │                                         │
     │  1. Usuario llena formulario Checkout   │
     │                                         │
     │  2. POST /api/orders ──────────────────►│
     │     {nombre, telefono, direccion,       │
     │      cantidad, metodoPago,              │
     │      productoNombre, total...}          │
     │                                         │  3. Valida campos
     │                                         │  4. Genera UUID
     │                                         │  5. Almacena en
     │                                         │     orders[]
     │                                         │
     │◄───────────────── 201 Created ──────────│
     │    {id, fecha, ...campos del pedido}    │
     │                                         │
     │  6. Redirige a /confirmacion            │
```

#### Endpoints de la API

| Método | Ruta | Descripción | Respuesta |
|---|---|---|---|
| `POST` | `/api/orders` | Crear nuevo pedido | `201` — Objeto del pedido con UUID y timestamp |
| `GET` | `/api/orders` | Obtener todos los pedidos | `200` — Array ordenado por fecha desc |
| `GET` | `/api/stats` | Estadísticas del negocio | `200` — totalPedidos, ingresoTotal, cantidadTotal, productoMasPedido |
| `GET` | `/api/health` | Estado del servidor | `200` — {status: "ok", orders: n} |

#### Gestión de Estado Global (Context API)

El carrito de compras es administrado a través de **React Context** (`CartContext`), lo que permite que cualquier componente del árbol de componentes pueda acceder y modificar el estado del carrito sin necesidad de pasar props manualmente.

```
CartContext
  ├── state.items[]        ← Productos en el carrito
  ├── addToCart(product)   ← Agrega o incrementa unidades
  ├── removeFromCart(id)   ← Elimina un producto
  ├── clearCart()          ← Vacía el carrito (post-confirmación)
  └── total                ← Total calculado en tiempo real
```

---

### 2.5 Modelo de Datos

#### Producto (Product)

```typescript
interface Product {
  id: number;
  name: string;          // Ej. "Café Soluble"
  description: string;   // Descripción del producto
  price: number;         // Precio en Quetzales (Q)
  image: string;         // Ruta de imagen principal
  secondaryImage: string;// Ruta de imagen secundaria (hover)
  origin: string;        // Ej. "Tierras Altas de Guatemala"
}
```

#### Pedido (Order)

```typescript
interface Order {
  id: string;            // UUID generado por el servidor
  nombre: string;        // Nombre del cliente
  telefono: string;      // Teléfono de contacto
  direccion: string;     // Dirección de entrega
  cantidad: number;      // Unidades solicitadas
  metodoPago: string;    // "efectivo" | "tarjeta" | "transferencia"
  productoId: number;    // ID del producto
  productoNombre: string;// Nombre del producto
  precioUnitario: number;// Precio unitario al momento del pedido
  total: number;         // Total calculado (precio × cantidad)
  fecha: string;         // ISO 8601 timestamp
}
```

#### Estadísticas (Stats)

```typescript
interface Stats {
  totalPedidos: number;      // Número total de órdenes
  ingresoTotal: number;      // Suma de todos los totales
  cantidadTotal: number;     // Suma de todas las unidades
  productoMasPedido: string; // Nombre del producto con más unidades
}
```

#### Catálogo de Productos (datos actuales)

| ID | Producto | Precio | Origen |
|---|---|---|---|
| 1 | Café Soluble | Q 45.00 | Guatemala |
| 2 | Café en Grano al Gusto | Q 85.00 | Tierras Altas de Guatemala |

---

### 2.6 Diseño e Identidad Visual

#### Principio de Diseño: Neumorfismo

La interfaz de QuetzalDev utiliza **neumorfismo** (*neumorphism*), una tendencia de diseño que simula relieve suave mediante sombras duales (clara y oscura) sobre una superficie de fondo uniforme. Este estilo fue elegido por las siguientes razones:

- Transmite modernidad y sofisticación, coherente con un producto premium.
- Genera un efecto táctil que invita a la interacción.
- Diferencia visualmente a QuetzalDev de tiendas en línea genéricas.

#### Paleta de Color

| Uso | Color |
|---|---|
| Fondo principal | Gris cálido claro (`#e8e4e0`) |
| Sombra oscura | `rgba(0,0,0,0.2)` |
| Sombra clara | `rgba(255,255,255,0.7)` |
| Acento primario | Café oscuro / marrón (`#5c3d11`) |
| Texto principal | `#333333` |
| Texto secundario | `#666666` |

#### Principios de UX aplicados

| Principio | Implementación |
|---|---|
| **Jerarquía visual** | El hero de Landing domina con tipografía grande; el CTA es el único botón de color intenso. |
| **Feedback inmediato** | Al agregar al carrito aparece un badge con el conteo actualizado en el ícono del header. |
| **Reducción de fricción** | Checkout en una sola página; sin registro obligatorio para comprar. |
| **Confianza** | Diseño limpio, información de origen del producto, confirmación detallada del pedido. |
| **Responsive** | Grids adaptables con CSS Grid y Flexbox; legible en móvil y escritorio. |

---

## Referencias

- Sinek, S. (2009). *Start With Why*. Portfolio/Penguin.
- Morville, P., & Rosenfeld, L. (2006). *Information Architecture for the World Wide Web* (3rd ed.). O'Reilly Media.
- Frost, B. (2016). *Atomic Design*. Consultado en https://atomicdesign.bradfrost.com/
- React Documentation. (2024). https://react.dev
- Express.js Documentation. (2024). https://expressjs.com
- Nielsen Norman Group. (2024). *Customer Journey Maps*. https://www.nngroup.com

---

*Documento generado como parte de la entrega de la Práctica 2 del curso de Sistemas Organizacionales y Gerenciales 1, Primer Semestre 2026, Universidad — Grupo 28.*
