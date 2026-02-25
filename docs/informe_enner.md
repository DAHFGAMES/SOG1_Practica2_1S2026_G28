


## 3. Especificación de la Estructura Web

### 3.1 Justificación de la Decisión Tecnológica

El instructivo de esta práctica sugería el uso de herramientas constructoras _drag-and-drop_ (como Google Sites o Wix) para desarrollar la presencia digital. Sin embargo, la decisión estratégica del equipo fue desarrollar una aplicación web a medida (_custom-built_). Esta decisión responde a razones de negocio concretas que se detallan a continuación.

En primer lugar, las plataformas _drag-and-drop_ comerciales imponen restricciones estructurales que limitan la personalización del embudo de conversión. En QuetzalDev, el flujo de venta —desde la exploración del catálogo hasta la confirmación del pedido— requiere una lógica de estado persistente (carrito de compras compartido entre pantallas) que no es factible implementar con fidelidad en herramientas de construcción visual genéricas.

En segundo lugar, una aplicación propia otorga **control total sobre los datos del negocio**. Cada pedido se registra en un servidor bajo el dominio del propietario, lo que permite acceder al historial completo de órdenes, calcular estadísticas en tiempo real —ingresos totales, producto más vendido, volumen de unidades— y tomar decisiones informadas sin depender de los reportes limitados de plataformas externas.

En tercer lugar, la **escalabilidad** de una arquitectura propia supera ampliamente la de una herramienta _drag-and-drop_. A medida que QuetzalDev crezca —incorporando nuevos productos, métodos de pago reales, integración con sistemas logísticos o programas de fidelización—, la plataforma podrá evolucionar sin migrar de tecnología ni perder los datos históricos del negocio.

En síntesis, la decisión de optar por un desarrollo propio constituye una **inversión estratégica en la autonomía del negocio**, en la calidad de la experiencia del cliente y en la capacidad de crecimiento a largo plazo; objetivos que ninguna plataforma comercial de construcción visual puede garantizar en su totalidad.

---

### 3.2 Propuesta de Valor de la Arquitectura

La plataforma de QuetzalDev opera bajo una arquitectura cliente-servidor desacoplada, que en términos de negocio significa lo siguiente:

- La **interfaz visible para el cliente** está diseñada exclusivamente para facilitar la decisión de compra: fácil de navegar, visualmente coherente con la identidad de marca y funcional en cualquier dispositivo.
- El **servidor central** actúa como el cerebro operativo del negocio: recibe los pedidos, los valida, los registra y los pone a disposición del propietario a través del panel de administración. Todo esto ocurre de forma transparente para el cliente.

Esta separación genera tres beneficios gerenciales directos:

1. **Continuidad operativa:** si se actualiza el diseño del sitio, no se interrumpe el registro de pedidos; y viceversa.
2. **Visibilidad de negocio en tiempo real:** el propietario consulta estadísticas actualizadas —total de pedidos, ingresos acumulados, producto más vendido— sin procesar hojas de cálculo manualmente.
3. **Experiencia de compra controlada:** cada paso del embudo fue diseñado intencionalmente, sin elementos distractores propios de plantillas de plataformas comerciales (anuncios de terceros, branding del proveedor, limitaciones de diseño).

---

### 3.3 Mapa del Sitio

El mapa del sitio representa la arquitectura de navegación de la plataforma desde la perspectiva del usuario. Cada nodo corresponde a una pantalla funcional del sistema, verificada en el repositorio de código del proyecto.

[INSERTAR DIAGRAMA AQUÍ — Árbol de navegación con dos ramas principales desde el nodo raíz "QuetzalDev". Rama del cliente: Landing → Catálogo → Carrito → Checkout → Confirmación. Rama del administrador: Login/Registro → Dashboard. Las flechas muestran la dirección del flujo entre pantallas, con una flecha de retorno del Carrito al Catálogo.]

---

#### Descripción de cada pantalla

| Pantalla | Ruta | Audiencia | Propósito de negocio |
|---|---|---|---|
| **Landing Page** | `/` | Cliente potencial | Primera impresión de marca; comunicar el _por qué_ de QuetzalDev; dirigir al catálogo |
| **Registro / Login** | `/registro` | Administrador | Punto de acceso al panel de gestión del propietario del negocio |
| **Catálogo** | `/catalogo` | Cliente | Presentar los productos, generar deseo de compra y facilitar la incorporación al carrito |
| **Carrito** | `/cart` | Cliente | Revisar y confirmar la selección antes de comprometerse; ajustar cantidades sin salir del proceso |
| **Checkout** | `/checkout` | Cliente | Capturar datos de entrega y método de pago; procesar y registrar el pedido en el sistema |
| **Confirmación** | `/confirmacion` | Cliente | Cerrar el ciclo de compra; fidelizar mediante una experiencia post-compra positiva y memorable |
| **Dashboard** | `/admin` | Propietario | Consultar estadísticas del negocio y gestionar el historial completo de pedidos |

---

### 3.4 Flujo de Conversión y Embudo de Compra

El flujo de compra implementado en la plataforma cumple con el recorrido mínimo exigido para un canal de venta digital efectivo. Cada paso fue verificado en el código fuente del repositorio y se confirma su plena funcionalidad.

[INSERTAR DIAGRAMA AQUÍ — Embudo de conversión (funnel) con 5 niveles de altura decreciente de arriba abajo: (1) Visitantes del sitio, (2) Usuarios que exploran el catálogo, (3) Usuarios con carrito activo, (4) Usuarios que inician checkout, (5) Pedidos confirmados. Incluir tasas de paso entre etapas con flechas laterales indicando los puntos de abandono.]

---

#### Paso 1 — Exploración y Selección del Producto

El cliente navega el **Catálogo** y explora las tarjetas de producto. Cada tarjeta presenta el nombre del artículo, su origen geográfico, una descripción detallada, el precio en quetzales y una imagen interactiva que cambia al pasar el cursor. Al presionar **"Agregar al carrito"**, el producto se incorpora a la sesión activa del usuario y el contador visible en la barra de navegación superior se actualiza de forma inmediata.

_Punto crítico de negocio: si la tarjeta de producto no genera deseo en esta pantalla, el cliente abandona el sitio sin convertir. El diseño de la tarjeta es el activo de persuasión más importante de la plataforma._

_KPI: % de usuarios del catálogo que agregan al menos un producto ≥ 25 %._

---

#### Paso 2 — Revisión y Confirmación del Carrito

El cliente accede al **Carrito** y puede:

- Ver todos los productos seleccionados con imagen, origen y precio unitario.
- **Incrementar o decrementar** la cantidad de cada artículo con controles de botón.
- **Eliminar** un producto individual de su selección.
- Visualizar el **subtotal por producto** y el **total acumulado** actualizados en tiempo real.
- Regresar al Catálogo para seguir explorando sin perder lo que ya seleccionó.
- Avanzar al Checkout cuando su selección esté confirmada.

_Punto crítico de negocio: proporcionar un resumen claro y editable antes del pago elimina inseguridades y reduce la tasa de abandono en este punto del embudo._

_KPI: % de usuarios con carrito activo que avanzan al Checkout ≥ 65 %._

---

#### Paso 3 — Captura de Datos de Entrega y Selección de Pago

En el **Checkout**, el cliente completa el formulario de entrega con los siguientes campos:

- **Nombre completo** — requerido.
- **Teléfono de contacto** — requerido; validado en formato de 8 dígitos guatemalteco.
- **Dirección de entrega** — requerida.
- **Método de pago** — selección visual entre tres opciones: **Efectivo**, **Tarjeta** o **Transferencia**.

El sistema aplica **validación de campos en tiempo real**: si un dato está incompleto o tiene formato incorrecto, el mensaje de error aparece al instante sin necesidad de enviar el formulario. A la derecha se muestra un resumen persistente del pedido con el total a pagar.

_Punto crítico de negocio: cada campo adicional o error de validación no informado en tiempo real incrementa la probabilidad de abandono en esta etapa._

_KPI: % de formularios enviados que aprueban validación al primer intento ≥ 95 %._

---

#### Paso 4 — Procesamiento del Pedido

Tras enviar el formulario, el pedido se transmite al servidor del negocio, que realiza de forma automática y transparente:

1. Verificación de que todos los campos requeridos estén presentes y con formato válido.
2. Generación de un identificador único e irrepetible para el pedido.
3. Registro del pedido con fecha y hora exactas en la base de datos del sistema.
4. Devolución inmediata de la confirmación al cliente con el detalle completo de su orden.

El cliente **no es redirigido a ningún servicio externo** en este paso, lo que mantiene la coherencia de la experiencia de marca de principio a fin.

---

#### Paso 5 — Confirmación del Pedido

La pantalla de **Confirmación** presenta al cliente:

- **Número de pedido** único y visible, que puede usar como referencia ante cualquier consulta.
- Fecha y hora exacta del registro de la orden.
- Resumen completo: producto(s), cantidad, precio unitario y **total final**.
- Método de pago seleccionado, destacado visualmente con una etiqueta de color.
- Mensaje personalizado de agradecimiento con el nombre del cliente.

_Esta pantalla cierra el ciclo emocional de compra. Es la última oportunidad de la plataforma para reforzar la identidad de marca y dejar una impresión positiva que motive al cliente a volver._

_KPI: tasa de clientes que regresan a comprar dentro de los primeros 30 días ≥ 40 %._

---

### 3.5 Arquitectura de Información Orientada al Cliente

La interfaz de QuetzalDev fue construida siguiendo la metodología **Atomic Design**, que organiza los elementos visuales de menor a mayor complejidad, garantizando coherencia y eficiencia en todo el sitio. Desde la perspectiva gerencial, esta elección implica que cada componente fue diseñado para ser **reutilizable y consistente**, lo que reduce el tiempo de mantenimiento y facilita cambios futuros de producto, marca o contenido sin necesidad de rediseñar el sitio.

#### Estructura de Componentes (perspectiva de negocio)

| Nivel | Descripción gerencial | Ejemplo visible para el cliente |
|---|---|---|
| **Átomos** | Elementos base de la identidad visual: botones, campos, etiquetas, tarjetas | El botón "Agregar al carrito"; los campos del formulario de Checkout |
| **Moléculas** | Unidades funcionales que transmiten un mensaje comercial completo | La tarjeta de producto con imagen, nombre, precio y acción de compra |
| **Organismos** | Secciones completas presentes en todas las pantallas del sitio | El encabezado con logo y contador de carrito; el pie de página |
| **Páginas** | Experiencias completas del cliente correspondientes a cada etapa del Customer Journey | Landing, Catálogo, Carrito, Checkout, Confirmación, Dashboard |

#### Panel de Administración — Inteligencia de Negocio

El **Dashboard** constituye la capa de inteligencia operativa de la plataforma. Tras autenticarse, el propietario accede a:

| Indicador | Descripción |
|---|---|
| **Total de pedidos** | Número acumulado de órdenes registradas en el sistema |
| **Ingreso total** | Suma en quetzales de todos los pedidos procesados |
| **Unidades vendidas** | Cantidad total de unidades despachadas |
| **Producto más pedido** | Nombre del producto con mayor volumen de ventas acumulado |
| **Historial de pedidos** | Tabla completa con nombre del cliente, producto, cantidad, total, método de pago y fecha |

Estos indicadores se corresponden directamente con los KPIs definidos en la Sección 1, convirtiendo al Dashboard en una herramienta de monitoreo operativo del plan estratégico.

---

### 3.6 Diseño e Identidad Visual como Activo Estratégico

#### Neumorfismo: La Elección de un Lenguaje Visual Premium

La interfaz de QuetzalDev utiliza **neumorfismo** (_neumorphism_), una tendencia de diseño que simula relieve suave mediante sombras duales —una oscura y una clara— sobre una superficie de fondo cálido y uniforme. Esta elección no responde únicamente a criterios estéticos: es una decisión estratégica de posicionamiento de marca.

Un producto premium como el café de especialidad guatemalteco exige una presentación digital a la altura de su propuesta de valor. El neumorfismo transmite **modernidad, sofisticación y tangibilidad** —el usuario percibe los elementos como objetos con peso y presencia—, diferenciando a QuetzalDev de los sitios de venta genéricos y reforzando la percepción de calidad antes de que el cliente pruebe el primer sorbo de café.

#### Paleta de Color

| Elemento | Valor | Rol estratégico |
|---|---|---|
| Fondo principal | Gris cálido claro (#e8e4e0) | Evoca tierra, naturaleza y artesanía; coherente con el origen orgánico del café |
| Acento primario | Marrón café oscuro (#5c3d11) | Referencia directa al producto; ancla la identidad de marca |
| Sombra oscura | rgba(0, 0, 0, 0.2) | Genera profundidad visual sin saturar la interfaz |
| Sombra clara | rgba(255, 255, 255, 0.7) | Produce el efecto de relieve característico del neumorfismo |
| Texto principal | #333333 | Alta legibilidad; transmite seriedad y profesionalismo |

#### Principios de UX aplicados con justificación de negocio

| Principio de UX | Implementación visible | Impacto en el negocio |
|---|---|---|
| **Jerarquía visual** | El hero de la Landing domina con tipografía grande; el único botón de color intenso es el CTA principal | Guía al visitante hacia la acción de compra sin ambigüedad ni distracciones |
| **Feedback inmediato** | Al agregar al carrito, el contador del ícono se actualiza en tiempo real | Reduce la incertidumbre del cliente sobre si su acción tuvo efecto; disminuye el abandono |
| **Reducción de fricción** | Checkout en una sola pantalla; sin registro obligatorio para comprar | Cada paso eliminado es una razón menos para abandonar el proceso de compra |
| **Confianza de marca** | Diseño consistente, información de origen del producto, confirmación con número de orden único | Sustituye la confianza que daría un establecimiento físico formal |
| **Accesibilidad responsiva** | La interfaz se adapta a móvil y escritorio mediante layouts fluidos | El segmento objetivo navega principalmente desde dispositivos móviles |

---

## 4. Referencias

- Sinek, S. (2009). _Start With Why: How Great Leaders Inspire Everyone to Take Action_. Portfolio/Penguin.
- Doerr, J. (2018). _Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs_. Portfolio/Penguin.
- Doran, G. T. (1981). There's a S.M.A.R.T. way to write management's goals and objectives. _Management Review_, 70(11), 35–36.
- Morville, P., & Rosenfeld, L. (2006). _Information Architecture for the World Wide Web_ (3rd ed.). O'Reilly Media.
- Frost, B. (2016). _Atomic Design_. Recuperado de https://atomicdesign.bradfrost.com/
- Nielsen Norman Group. (2024). _Customer Journey Maps_. Recuperado de https://www.nngroup.com
- React Documentation. (2024). Recuperado de https://react.dev
- Express.js Documentation. (2024). Recuperado de https://expressjs.com

---

_Documento elaborado como parte de la entrega individual de la Práctica 2 del curso de Sistemas Organizacionales y Gerenciales 1, Primer Semestre 2026 — Universidad — Grupo 28._
