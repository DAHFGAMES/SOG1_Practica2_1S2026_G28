# Práctica 2 — Sistemas Organizacionales y Gerenciales 1
## Arquitectura de Información y Estrategia Digital para QuetzalDev

---

| Campo | Valor |
|---|---|
| **Curso** | Sistemas Organizacionales y Gerenciales 1 |
| **Práctica** | Práctica 2 — Primer Semestre 2026 |
| **Grupo** | 28 |
| **Empresa analizada** | QuetzalDev |
| **Rubro** | Venta en línea de café guatemalteco de especialidad |
| **Sección a cargo** | Estrategia de Arquitectura de Información + Especificación de Estructura Web |
| **Elaborado por** | Enner |
| **Fecha de entrega** | Febrero 2026 |

---

## Índice

1. [Marco Metodológico: SMART, KPI y OKR](#1-marco-metodológico-smart-kpi-y-okr)
2. [Estrategia de Arquitectura de Información](#2-estrategia-de-arquitectura-de-información)
   1. [Plan Estratégico — Segmentación de Mercado](#21-plan-estratégico--segmentación-de-mercado)
   2. [Plan Operativo — Customer Journey](#22-plan-operativo--customer-journey)
   3. [Plan de un Solo Uso — Avatar del Cliente](#23-plan-de-un-solo-uso--avatar-del-cliente)
   4. [Plan Direccional — Pirámide de Objetivos](#24-plan-direccional--pirámide-de-objetivos)
   5. [Plan Permanente — Golden Circle](#25-plan-permanente--golden-circle)
3. [Especificación de la Estructura Web](#3-especificación-de-la-estructura-web)
   1. [Justificación de la Decisión Tecnológica](#31-justificación-de-la-decisión-tecnológica)
   2. [Propuesta de Valor de la Arquitectura](#32-propuesta-de-valor-de-la-arquitectura)
   3. [Mapa del Sitio](#33-mapa-del-sitio)
   4. [Flujo de Conversión y Embudo de Compra](#34-flujo-de-conversión-y-embudo-de-compra)
   5. [Arquitectura de Información Orientada al Cliente](#35-arquitectura-de-información-orientada-al-cliente)
   6. [Diseño e Identidad Visual como Activo Estratégico](#36-diseño-e-identidad-visual-como-activo-estratégico)
4. [Referencias](#4-referencias)

---

## 1. Marco Metodológico: SMART, KPI y OKR

Toda estrategia de negocio que aspire a ser ejecutable debe traducirse en objetivos medibles. Para esta práctica se adoptan tres marcos complementarios que sustentan cada plan desarrollado en las secciones siguientes.

### 1.1 Metodología SMART

Un objetivo SMART es aquel que cumple simultáneamente con cinco criterios que eliminan la ambigüedad y hacen posible su seguimiento:

| Criterio | Significado | Aplicación en QuetzalDev |
|---|---|---|
| **S** — Específico | Define con exactitud qué debe lograrse | "Alcanzar 200 pedidos mensuales a través del canal digital" |
| **M** — Medible | Establece indicadores numéricos verificables | Número de pedidos registrados en el backend mensualmente |
| **A** — Alcanzable | Es retador pero realista dado el contexto | Plausible para un negocio de nicho en el mercado guatemalteco |
| **R** — Relevante | Contribuye directamente a la misión del negocio | Sustenta el crecimiento de ingresos y la visibilidad de marca |
| **T** — Temporal | Tiene una fecha límite definida | Primer año de operación (12 meses a partir del lanzamiento) |

Todos los objetivos de la Pirámide de Objetivos (Sección 2.4) fueron redactados bajo este criterio.

### 1.2 Indicadores Clave de Rendimiento (KPI)

Los KPI son métricas operativas que permiten monitorear el desempeño del canal digital en tiempo real. Para QuetzalDev se definen los siguientes indicadores prioritarios:

| KPI | Definición | Meta Año 1 | Frecuencia de revisión |
|---|---|---|---|
| **Tasa de Conversión** | % de visitantes que completan una compra | ≥ 3 % | Mensual |
| **Tasa de Abandono de Carrito** | % de usuarios que agregaron al carrito pero no compraron | ≤ 35 % | Mensual |
| **Ticket Promedio** | Valor promedio por pedido en quetzales | ≥ Q 70 | Mensual |
| **Tasa de Clientes Recurrentes** | % de pedidos de clientes que ya compraron antes | ≥ 40 % | Trimestral |
| **Tiempo en Sitio** | Minutos promedio por sesión | ≥ 2:30 min | Semanal |
| **Costo de Adquisición de Cliente (CAC)** | Gasto en marketing / nuevos clientes adquiridos | ≤ Q 25 por cliente | Trimestral |
| **Ingreso Total Mensual** | Suma de todos los pedidos en el período | ≥ Q 14,000 | Mensual |

### 1.3 Objetivos y Resultados Clave (OKR)

El modelo OKR (_Objectives and Key Results_) complementa a los KPI al conectar el propósito estratégico con resultados verificables a nivel de equipo. A diferencia de los KPI, los OKR son aspiracionales: se considera un ciclo exitoso si se alcanza entre el 70 % y el 85 % de los resultados clave.

**Ciclo OKR — Primer Semestre de Operación (6 meses)**

---

**O1: Establecer QuetzalDev como canal de venta digital funcional y confiable**

| Resultado Clave | Meta | Indicador |
|---|---|---|
| KR1.1 | Lanzar el sitio web con las 6 pantallas funcionales | 100 % de pantallas operativas al día del lanzamiento |
| KR1.2 | Procesar los primeros 50 pedidos sin errores técnicos | 50 pedidos registrados correctamente en el sistema |
| KR1.3 | Lograr tasa de abandono de carrito inferior al 35 % | Dashboard refleja ≤ 35 % de sesiones que no convierten |

---

**O2: Generar demanda y adquirir la primera base de clientes**

| Resultado Clave | Meta | Indicador |
|---|---|---|
| KR2.1 | Lograr 100 pedidos en el tercer mes de operación | Registro en backend ≥ 100 órdenes al 90.º día |
| KR2.2 | Alcanzar un ticket promedio de Q 70 por pedido | Media aritmética del total por orden ≥ Q 70 |
| KR2.3 | Que al menos el 30 % de los clientes del 3.er mes sean recurrentes | Cruce de teléfono/nombre indica ≥ 30 % repeat buyers |

---

**O3: Optimizar la experiencia de compra para reducir fricción**

| Resultado Clave | Meta | Indicador |
|---|---|---|
| KR3.1 | Reducir el tiempo promedio del flujo de checkout a menos de 3 minutos | Medición con herramienta de analítica web |
| KR3.2 | Que el 95 % de los formularios enviados pasen validación sin reenvíos | Registros del servidor muestran < 5 % de errores de campo |
| KR3.3 | Obtener retroalimentación positiva de al menos 8 de cada 10 clientes | Encuesta post-compra o comunicación directa por teléfono |

---

## 2. Estrategia de Arquitectura de Información

La arquitectura de información de QuetzalDev fue diseñada para alinear los objetivos del negocio con las necesidades reales de sus clientes, facilitando el recorrido desde el primer contacto con la marca hasta la conversión en compra.

---

### 2.1 Plan Estratégico — Segmentación de Mercado

La segmentación de mercado permite identificar con precisión a quién va dirigida la plataforma y tomar decisiones de diseño orientadas a un público específico. Una segmentación rigurosa reduce el desperdicio de recursos y aumenta la eficacia del embudo de conversión.

#### Segmentación Demográfica

| Variable | Descripción |
|---|---|
| **Edad** | 22 – 45 años |
| **Género** | Sin distinción |
| **Nivel socioeconómico** | Medio y medio-alto (ingresos mensuales > Q 6,000) |
| **Ocupación** | Profesionales, estudiantes universitarios, emprendedores |
| **Nivel educativo** | Educación media superior o universitaria |

#### Segmentación Geográfica

| Variable | Descripción |
|---|---|
| **País** | República de Guatemala |
| **Zona prioritaria** | Área metropolitana de Guatemala City y ciudades intermedias |
| **Alcance de entrega** | Nacional; logística a domicilio como diferenciador clave |

#### Segmentación Psicográfica

| Variable | Descripción |
|---|---|
| **Estilo de vida** | Consumidor consciente; valora la autenticidad y el origen de los productos |
| **Valores** | Sostenibilidad, apoyo al productor local, calidad sobre precio |
| **Intereses** | Café de especialidad, gastronomía, cultura e identidad guatemalteca |
| **Relación con el e-commerce** | Habituado a comprar en línea; utiliza dispositivos móviles como canal principal |

#### Segmentación Conductual

| Variable | Descripción |
|---|---|
| **Frecuencia de compra** | Recurrente (quincenal a mensual) |
| **Beneficio buscado** | Café de calidad superior, conveniente y entregado a domicilio |
| **Lealtad potencial** | Alta; dispuestos a fidelizarse con marcas que compartan sus valores |
| **Etapa en el funnel** | Nuevos compradores (adquisición) y clientes habituales (retención) |

#### Segmento Objetivo Principal

> Adultos jóvenes de 25 a 38 años, residentes en Guatemala, con ingresos medios o medio-altos, para quienes el café es una experiencia y no un commodity. Prefieren marcas locales, realizan sus compras digitalmente y valoran el diseño del sitio como indicador de confianza.

#### KPIs de Segmentación

| KPI | Meta | Justificación |
|---|---|---|
| % de visitantes desde móvil | ≥ 55 % | El segmento objetivo usa dispositivos móviles como canal primario |
| Tasa de rebote en Landing Page | ≤ 45 % | Indica que el mensaje resuena con el segmento correcto |
| Ticket promedio | ≥ Q 70 | Consistente con el poder adquisitivo del segmento medio-alto |

---

### 2.2 Plan Operativo — Customer Journey

El Customer Journey documenta cada punto de contacto que tiene el cliente con QuetzalDev, desde el primer instante en que conoce la marca hasta que la transacción se confirma. Este mapa ha sido construido con base en las pantallas reales implementadas en la plataforma digital, verificadas en el repositorio de código del proyecto.

[INSERTAR DIAGRAMA AQUÍ — Mapa visual del Customer Journey: línea horizontal con 5 etapas (Descubrimiento, Consideración, Decisión, Compra, Post-Compra). Debajo, una curva de emoción que sube gradualmente hasta el pico en Post-Compra. Íconos de cada touchpoint web sobre cada etapa.]

---

#### Etapa 1: Descubrimiento

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Redes sociales (Instagram, TikTok), búsqueda orgánica, recomendación boca a boca |
| **Acción del usuario** | Ingresa a la Landing Page de QuetzalDev |
| **Emoción predominante** | Curiosidad; primera impresión de marca |
| **Pantalla involucrada** | Landing Page (`/`) — sección hero con imagen de fondo, propuesta de valor y llamada a la acción principal |
| **Objetivo de diseño** | Capturar la atención en los primeros 5 segundos; transmitir calidad, origen guatemalteco y confianza de marca |
| **KPI asociado** | Tasa de rebote ≤ 45 % · Tiempo en sitio ≥ 0:45 seg en esta pantalla |

---

#### Etapa 2: Consideración

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Catálogo de productos con tarjetas visuales interactivas |
| **Acción del usuario** | Navega el catálogo, lee descripciones y precios, compara los productos disponibles |
| **Emoción predominante** | Interés, evaluación, deseo creciente |
| **Pantalla involucrada** | Catálogo (`/catalogo`) — tarjetas con imagen de doble vista (efecto hover), precio en quetzales, origen y descripción |
| **Objetivo de diseño** | Generar confianza en la calidad del producto; estimular el deseo de compra |
| **KPI asociado** | % de usuarios del catálogo que hacen clic en "Agregar al carrito" ≥ 25 % |

---

#### Etapa 3: Decisión

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Carrito de compras |
| **Acción del usuario** | Revisa los artículos seleccionados, ajusta cantidades, verifica el subtotal por producto y el total acumulado antes de comprometerse |
| **Emoción predominante** | Evaluación final; momento crítico de conversión o abandono |
| **Pantalla involucrada** | Carrito (`/cart`) — listado de productos, control de cantidad (aumentar / disminuir / eliminar), resumen con total en tiempo real |
| **Objetivo de diseño** | Reducir la fricción; mostrar el valor total con claridad; ofrecer vía de retorno al catálogo sin penalización |
| **KPI asociado** | Tasa de abandono de carrito ≤ 35 % |

---

#### Etapa 4: Compra

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Formulario de checkout con selección de método de pago |
| **Acción del usuario** | Completa datos de entrega (nombre, teléfono, dirección), selecciona método de pago (efectivo, tarjeta o transferencia) y confirma el pedido |
| **Emoción predominante** | Compromiso, confianza, expectativa |
| **Pantalla involucrada** | Checkout (`/checkout`) — formulario con validación en tiempo real, selector visual de método de pago, resumen del pedido |
| **Objetivo de diseño** | Formulario simple y sin distractores; validación inmediata; generar confianza al capturar datos sensibles |
| **KPI asociado** | % de formularios enviados exitosamente ≥ 95 % · Tiempo de llenado ≤ 3 min |

---

#### Etapa 5: Post-Compra

| Elemento | Detalle |
|---|---|
| **Punto de contacto** | Página de confirmación del pedido |
| **Acción del usuario** | Recibe confirmación inmediata con número de pedido, detalle de productos, total pagado y fecha/hora |
| **Emoción predominante** | Satisfacción, alivio, disposición a volver |
| **Pantalla involucrada** | Confirmación (`/confirmacion`) — número de orden único, resumen completo, método de pago en etiqueta de color, mensaje personalizado de agradecimiento |
| **Objetivo de diseño** | Cerrar el ciclo con una experiencia positiva y memorable; reforzar la confianza en la marca |
| **KPI asociado** | Tasa de clientes recurrentes ≥ 40 % en los primeros 6 meses |

---

### 2.3 Plan de un Solo Uso — Avatar del Cliente

El avatar del cliente (_buyer persona_) es una representación semificticia del cliente ideal de QuetzalDev, construida a partir del análisis del segmento objetivo y del comportamiento esperado en la plataforma digital. Su propósito no es decorativo: actúa como filtro de decisión en cada punto del diseño —desde el texto del hero hasta la simplicidad del formulario de checkout.

---

#### Avatar Principal: "Diego Morales"

| Campo | Detalle |
|---|---|
| **Nombre** | Diego Morales |
| **Edad** | 30 años |
| **Ocupación** | Diseñador UX en empresa tecnológica, modalidad híbrida |
| **Ubicación** | Ciudad de Guatemala, zona 10 |
| **Ingresos mensuales** | Q 8,000 – Q 12,000 |
| **Estado civil** | Soltero, vive solo |
| **Nivel educativo** | Licenciatura en Diseño Gráfico |
| **Dispositivo principal** | Smartphone (iOS) |

**Historia**

Diego comienza cada jornada laboral con café. A diferencia de la mayoría de sus colegas, no se conforma con café de sobre: explora orígenes, perfiles de tueste y métodos de preparación. Cuando en sus redes sociales apareció contenido sobre QuetzalDev y su café de las tierras altas guatemaltecas, la propuesta lo atrapó de inmediato. Antes de comprar, revisó si el sitio era tan serio como la marca prometía.

**Motivaciones**

- Acceder a café de especialidad sin trasladarse a una cafetería especializada.
- Conocer el origen y la historia detrás de lo que consume.
- Apoyar activamente a productores guatemaltecos.
- Completar su compra en menos de 5 minutos desde el celular.

**Frustraciones**

- Las tiendas físicas no ofrecen café de especialidad a precio justo.
- En sitios en línea genéricos el checkout es largo o genera desconfianza al solicitar datos personales.
- Cuando el diseño de un sitio es descuidado, lo interpreta como señal de poca seriedad del negocio.

**Comportamiento digital**

- Usa Instagram y TikTok a diario; descubre marcas nuevas a través de estas plataformas.
- Compra en línea entre 2 y 4 veces al mes.
- Lee las descripciones de producto antes de agregar al carrito.
- Considera el diseño del sitio como indicador directo de la calidad del producto.

**OKR de adquisición vinculado a Diego**

_Objetivo:_ Que el perfil "Diego" complete su primera compra en la primera sesión de visita.
_KR:_ ≥ 60 % de los usuarios nuevos que ingresan desde redes sociales generan al menos un pedido en su primera visita.

---

#### Avatar Secundario: "Marta López"

| Campo | Detalle |
|---|---|
| **Nombre** | Marta López |
| **Edad** | 42 años |
| **Ocupación** | Gerente administrativa en empresa familiar |
| **Ubicación** | Mixco, Guatemala |
| **Ingresos mensuales** | Q 15,000 |
| **Estado civil** | Casada, 2 hijos |
| **Dispositivo principal** | Laptop (Windows) |

**Motivaciones**

- Adquirir café artesanal guatemalteco como obsequio corporativo para colaboradores y clientes.
- Comprar en volumen para abastecer la oficina con un producto de calidad diferenciada.
- Valorar la rapidez y claridad del proceso de pago, con confirmación formal del pedido.

**OKR de retención vinculado a Marta**

_Objetivo:_ Convertir a compradores de volumen en clientes recurrentes.
_KR:_ ≥ 30 % de los pedidos de 3 o más unidades provienen de clientes que ya compraron anteriormente.

---

### 2.4 Plan Direccional — Pirámide de Objetivos

La Pirámide de Objetivos organiza las metas de QuetzalDev en niveles jerárquicos, aplicando la metodología SMART en cada estrato. La coherencia vertical garantiza que cada acción operativa trace una línea directa hacia la misión del negocio.

[INSERTAR DIAGRAMA AQUÍ — Pirámide de 5 estratos con colores degradados de oscuro en la cúspide (Misión) a claro en la base (Objetivos Operativos), con el código y descripción de cada objetivo inscrito dentro de su estrato correspondiente.]

---

#### Estrato 1 — Misión _(Propósito permanente)_

> Llevar el mejor café guatemalteco de especialidad directamente al consumidor final, con dignidad para el productor local y con calidad en cada taza.

#### Estrato 2 — Visión _(Horizonte a 3–5 años)_

> Ser la plataforma de referencia para el café artesanal guatemalteco en el mercado nacional digital antes del año 2028.

#### Estrato 3 — Objetivos Estratégicos _(Horizonte: 1–2 años)_

| Código | Objetivo (SMART) | KPI de seguimiento |
|---|---|---|
| OE1 | Alcanzar **200 pedidos mensuales** a través del canal digital en los primeros **12 meses** de operación | Conteo mensual de órdenes registradas en el sistema |
| OE2 | Mantener una **tasa de clientes recurrentes ≥ 40 %** durante los primeros **6 meses** | % de pedidos de clientes que ya compraron antes |
| OE3 | Ampliar el catálogo a **5 productos activos** en los primeros **6 meses**, con descripción, precio y disponibilidad definidos | Conteo de productos publicados en la plataforma |

#### Estrato 4 — Objetivos Tácticos _(Horizonte: trimestral)_

| Código | Objetivo (SMART) | KPI de seguimiento |
|---|---|---|
| OT1 | Procesar el **100 %** de los pedidos dentro de las **24 horas hábiles** posteriores a su registro | Tiempo promedio entre registro y gestión del pedido |
| OT2 | Mantener la **tasa de abandono de carrito por debajo del 35 %** en el primer trimestre | % de sesiones con carrito activo que no completan checkout |
| OT3 | Publicar **≥ 3 contenidos semanales** en redes sociales durante los primeros **3 meses** para sostener el tráfico orgánico | Publicaciones verificadas por semana en cada canal |

#### Estrato 5 — Objetivos Operativos _(Horizonte: diario/semanal)_

| Código | Objetivo (SMART) | KPI de seguimiento |
|---|---|---|
| OO1 | El sitio debe cargar en **menos de 2 segundos** en conexión móvil estándar | Tiempo de carga medido con herramienta de rendimiento web |
| OO2 | Responder el **100 %** de las consultas de clientes en un máximo de **2 horas hábiles** | Tiempo de primera respuesta registrado por canal de contacto |
| OO3 | Mantener **0 % de errores** en el procesamiento de pedidos (validación en frontend y servidor sincronizada) | Tasa de error del endpoint de creación de órdenes |

---

### 2.5 Plan Permanente — Golden Circle

El Golden Circle, formulado por Simon Sinek, posiciona el _propósito_ (el _por qué_) como núcleo de la identidad organizacional. Las empresas que comunican desde el interior hacia afuera generan mayor lealtad y diferenciación que aquellas que solo comunican sus productos o sus procesos.

[INSERTAR DIAGRAMA AQUÍ — Tres círculos concéntricos con fondo blanco: el círculo interior de color oscuro etiquetado "¿Por qué?", el anillo intermedio en tono medio etiquetado "¿Cómo?" y el anillo exterior claro etiquetado "¿Qué?", cada uno con su texto dentro del anillo correspondiente.]

---

#### ¿Por qué? — El Propósito

> Creemos que el café guatemalteco merece ser reconocido como uno de los mejores del mundo. Existimos para dar al productor local la visibilidad que merece y ofrecer al consumidor guatemalteco una experiencia de consumo auténtica, digna y conveniente.

**KPI vinculado:** Tasa de rebote en Landing Page ≤ 45 %, como evidencia de que el mensaje del _por qué_ resuena en el segmento objetivo.

---

#### ¿Cómo? — Los Diferenciadores

- Selección de granos de las tierras altas de Guatemala (altitud superior a 1,500 msnm).
- Tostado artesanal personalizado según la preferencia del cliente: fino, medio o grueso.
- Comercio justo: vínculo directo con el agricultor, sin intermediarios que reduzcan su margen.
- Plataforma digital propia: experiencia de compra diseñada para el consumidor guatemalteco, sin pasos innecesarios ni distracciones externas.

**KPI vinculado:** Ticket promedio ≥ Q 70, como señal de que el cliente percibe valor diferenciado y lo refleja en su disposición a pagar.

---

#### ¿Qué? — La Oferta

| Producto | Precio | Propuesta de valor |
|---|---|---|
| Café Soluble | Q 45.00 | Practicidad sin sacrificar el sabor auténtico guatemalteco; listo en segundos |
| Café en Grano al Gusto | Q 85.00 | Granos selectos tostados artesanalmente, molidos a la preferencia exacta del cliente |

**KPI vinculado:** % de pedidos correspondientes al Café en Grano (producto premium) ≥ 30 % del total mensual, como indicador de que el posicionamiento de valor resonó en el mercado.

---

#### Síntesis del Golden Circle

| Nivel | Contenido estratégico | KPI de validación |
|---|---|---|
| **¿Por qué?** | Democratizar el acceso al café guatemalteco de especialidad, honrando al productor local | Tasa de rebote Landing ≤ 45 % |
| **¿Cómo?** | Selección rigurosa, tostado artesanal, comercio justo, plataforma digital sin fricción | Ticket promedio ≥ Q 70 |
| **¿Qué?** | Café Soluble (Q 45) y Café en Grano (Q 85), entregados a domicilio en Guatemala | Pedidos mensuales ≥ 200 al Año 1 |

---

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
