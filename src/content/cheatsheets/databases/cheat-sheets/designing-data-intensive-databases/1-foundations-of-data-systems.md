---
title: "1.0 - Mapa de Ruta: Fundamentos de Sistemas de Datos"
description: "Visión general de los conceptos fundamentales que rigen todos los sistemas de datos, desde máquinas individuales hasta clusters."
tags: ["architecture", "databases", "fundamentals", "roadmap"]
---

## A - Fundamentos Universales de Datos [🔴]

#### 1. **Introducción:**

Antes de hablar de sistemas complejos distribuidos por todo el mundo, debemos entender las reglas de juego que aplican a **todos** los sistemas de datos, sin importar su tamaño.

#### 2. **Ejemplo:**

Imagina que estás aprendiendo a cocinar.

- **Fundamentos Universales:** Cómo usar un cuchillo, cómo funciona el calor, higiene básica.
- **Sistemas Distribuidos (Parte II del libro):** Cómo gestionar la cocina de un hotel con 50 chefs.

**Explicación del ejemplo:**
El texto nos dice que los primeros 4 capítulos son como aprender a usar el cuchillo. No importa si cocinas para ti solo (una sola máquina) o para un banquete (cluster de máquinas), estas reglas **siempre** aplican.

#### 3. **Desarrollo:**

El autor hace una distinción crucial aquí para evitar confusiones futuras. A menudo, los estudiantes saltan directamente a intentar entender "la nube" o los "clusters" sin entender lo básico.
El texto establece que los conceptos de los capítulos 1 al 4 son agnósticos a la infraestructura: funcionan igual si tu base de datos está en tu laptop o repartida en servidores por todo el mundo.

🔴 **Fundamental**: Es la base sobre la que se construye todo el conocimiento posterior. Si no entiendes esto, la parte de sistemas distribuidos será incomprensible.

---

## B - Los Objetivos del Sistema (Capítulo 1) [🔴]

#### 1. **Introducción:**

Este concepto trata sobre definir un vocabulario común y claro para las tres metas principales de cualquier software: que no falle, que pueda crecer y que sea fácil de arreglar.

#### 2. **Ejemplo:**

- **Término vago:** "Quiero que mi app sea buena".
- **Enfoque del Capítulo 1:** "Quiero que mi app tenga **Fiabilidad** (no se rompa), **Escalabilidad** (aguante muchos usuarios) y **Mantenibilidad** (sea fácil de modificar)".

**Explicación del ejemplo:**
El texto enfatiza que palabras como "escalabilidad" se usan muy a la ligera. Este capítulo se dedica a examinar qué significan _realmente_ estas palabras y cómo lograrlas.

#### 3. **Desarrollo:**

Aquí el autor se pone el sombrero de filósofo-ingeniero. No basta con tirar código; hay que saber _para qué_. El texto indica que se establecerá la terminología que se usará en todo el resto del libro.

- **Fiabilidad (Reliability)**
- **Escalabilidad (Scalability)**
- **Mantenibilidad (Maintainability)**

🔴 **Fundamental**: Sin un acuerdo sobre qué significan estas palabras, es imposible tener una discusión técnica seria sobre arquitectura.

---

## C - Modelos de Datos y Query Languages (Capítulo 2) [🟡]

#### 1. **Introducción:**

Este es el factor más visible para ti como programador: ¿Cómo "hablas" con la base de datos y cómo "ve" la base de datos tu información?

#### 2. **Ejemplo:**

- **Situación A:** Necesitas guardar relaciones complejas (como una red social). -> Quizás uses un modelo de Grafos.
- **Situación B:** Necesitas guardar facturas estructuradas. -> Quizás uses un modelo Relacional (SQL).

**Explicación del ejemplo:**
El texto señala que diferentes modelos son apropiados para diferentes situaciones. No existe una "mejor base de datos" universal. Este capítulo compara las opciones para que elijas la herramienta correcta.

#### 3. **Desarrollo:**

El autor destaca que, desde el punto de vista del desarrollador, esta es la diferencia más obvia entre bases de datos. Es la capa de abstracción con la que interactúas día a día. El objetivo aquí es entender la "adecuación" (fitness) de cada modelo para resolver problemas específicos.

🟡 **Importante**: Elegir el modelo de datos incorrecto es uno de los errores más costosos y comunes en el desarrollo de software.

---

## D - Motores de Almacenamiento (Capítulo 3) [🔵]

#### 1. **Introducción:**

Aquí bajamos al sótano. Dejamos de ver cómo se _ve_ el dato y miramos cómo se _guarda físicamente_ en el disco duro.

#### 2. **Ejemplo:**

Imagina dos bibliotecarios:

1.  **Bibliotecario A (Optimizado para lectura):** Tarda mucho en guardar un libro porque lo cataloga perfectamente, pero lo encuentra en 1 segundo.
2.  **Bibliotecario B (Optimizado para escritura):** Tira el libro en una pila en 0.1 segundos, pero tarda mucho en encontrarlo después.

**Explicación del ejemplo:**
El texto menciona que diferentes motores de almacenamiento (storage engines) están optimizados para diferentes "cargas de trabajo" (workloads). Elegir el correcto tiene un efecto **enorme** en el rendimiento.

#### 3. **Desarrollo:**

Esto trata sobre los "internals" (partes internas). Aunque a veces como programador no tocas esto directamente, el texto sugiere que entender cómo la base de datos organiza los bytes en el disco es vital para el rendimiento.

🔵 **Específico**: Es conocimiento técnico profundo. No lo usas para escribir tu código diario, pero es crítico cuando necesitas optimizar o elegir la base de datos correcta para un sistema de alto rendimiento.

---

## E - Codificación y Evolución de Datos (Capítulo 4) [🔵]

#### 1. **Introducción:**

Este concepto aborda cómo convertimos los datos en memoria a una secuencia de bytes (serialización) y, lo más importante, cómo manejamos el hecho de que los requisitos cambian con el tiempo.

#### 2. **Ejemplo:**

- **Hoy:** Tu usuario tiene `Nombre` y `Edad`. Guardas esto en un archivo.
- **Mañana:** Decides que el usuario también necesita `Email`.
- **Problema:** ¿Qué pasa cuando tu nuevo código intenta leer los archivos viejos que no tienen `Email`? ¿Se rompe todo?

**Explicación del ejemplo:**
El texto resalta el problema de la "adaptación de esquemas" (schemas need to adapt). Las aplicaciones no son estáticas; cambian. Este capítulo compara formatos para ver cuáles sobreviven mejor al paso del tiempo.

#### 3. **Desarrollo:**

Se enfoca en la serialización (data encoding). Es el puente entre tus objetos en memoria y el almacenamiento o la red. El énfasis del autor está en la **evolución**: cómo mantener el sistema funcionando cuando las reglas del juego (el esquema de datos) cambian a mitad del partido.

🔵 **Específico**: Es un tema que a menudo se ignora hasta que causa un problema grave de compatibilidad en producción.
