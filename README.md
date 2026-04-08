# Lazzo 💛

Plataforma web de citas desarrollada en **Angular 17**, con una estética moderna, cálida y limpia.

---

## 📌 Descripción del proyecto

Lazzo es una aplicación web de citas que permite a los usuarios explorar perfiles compatibles, enviar mensajes, hacer "match" y gestionar su perfil personal. La plataforma está diseñada con una identidad visual basada en tonos blancos, beige y naranja cobrizo.

---

## 🛠️ Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 17.3.7 | Framework principal |
| Bootstrap | 5.x | Componentes y utilidades CSS |
| Bootstrap Icons | 1.x | Íconos de la interfaz |
| Google Fonts | - | Tipografías (Playfair Display + Lato) |

---

## 🎨 Identidad visual

| Elemento | Valor |
|---|---|
| Color acento | `#c08256` (naranja cobrizo) |
| Color fondo | `#f2f2f2` (beige claro) |
| Color superficie | `#ffffff` (blanco) |
| Fuente títulos | Playfair Display Black |
| Fuente cuerpo | Lato Regular / Bold |

---

## 📁 Estructura del proyecto

```
src/
└── app/
    ├── layout/
    │   ├── main-layout/        → Contenedor principal con grid de 3 columnas
    │   ├── sidebar-left/       → Sidebar izquierdo (perfil del usuario activo o visitado)
    │   └── sidebar-right/      → Sidebar derecho (herramientas y accesos rápidos)
    ├── pages/
    │   ├── home/               → Pantalla de inicio con feed de sugerencias
    │   ├── perfil/             → Perfil de usuario visitado
    │   ├── mi-perfil/          → Edición del perfil propio
    │   ├── matches/            → Lista de matches
    │   ├── mensajes/           → Bandeja de mensajes
    │   └── registro/           → Flujo de registro en 3 pasos
    └── shared/
        └── navbar/             → Barra de navegación superior
```

---

## 🗺️ Mapa de rutas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | Redirige a `/home` | - |
| `/home` | HomeComponent | Feed de compatibilidades sugeridas |
| `/perfil/:id` | PerfilComponent | Perfil de usuario visitado |
| `/mi-perfil` | MiPerfilComponent | Edición del perfil propio |
| `/matches` | MatchesComponent | Lista de matches del usuario |
| `/mensajes` | MensajesComponent | Bandeja de mensajes |
| `/registro` | RegistroComponent | Flujo de registro en 3 pasos |
| `/**` | Redirige a `/home` | Ruta wildcard |

---

## 🧱 Layout principal

El layout usa **CSS Grid** con 3 columnas fijas:

```
┌──────────────┬─────────────────────┬──────────────┐
│ Sidebar Left │   Contenido Central │ Sidebar Right│
│   (280px)    │       (1fr)         │   (260px)    │
└──────────────┴─────────────────────┴──────────────┘
```

- Los **sidebars** son `position: sticky` y scrollean solo si su contenido supera la altura de la pantalla.
- El **contenido central** scrollea de forma independiente.
- El **contenedor blanco** (card) aplica solo en la columna central.

---

## 🧩 Componentes desarrollados

### `NavbarComponent`
Barra de navegación superior con fondo oscuro (`#1a1a1a`).
- Logo importado desde `assets/images/logo.png`
- Buscador con ícono de lupa en naranja cobrizo
- Links de navegación: Perfil, Mensajes, Salir

### `SidebarLeftComponent`
Sidebar izquierdo sin contenedor (fondo transparente).
- **Modo home:** foto de perfil con borde dorado, nombre, estado actual y actividad reciente
- **Modo perfil visitado:** *(próximamente)* datos del usuario visitado

### `SidebarRightComponent`
Sidebar derecho sin contenedor (fondo transparente).
- Sección de herramientas con thumbnail de video y links de artículos
- Sección de accesos rápidos: Editar perfil, Mis matches, Ver mensajes, Subir foto, Ver personas

### `HomeComponent`
Pantalla principal con contenedor blanco.
- Saludo personalizado con tipografía Playfair Display
- Barra de estado ("¿Deseás compartir algo?")
- Feed de compatibilidades sugeridas con foto, datos y botones de acción

---

## 🌿 Estrategia de ramas Git

```
master
  └── develop
        ├── feature/navbar
        ├── feature/main-layout
        ├── feature/sidebar-left
        ├── fix/sidebar-left-background
        ├── feature/sidebar-right
        └── feature/home
```

Convención de nombres:
- `feature/nombre` → nuevas funcionalidades
- `fix/nombre` → correcciones sobre lo existente

---

## 🚀 Instalación y desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/gaboqu/lazzo.git
cd lazzo

# Instalar dependencias
npm install

# Levantar servidor de desarrollo
ng serve

# Navegar a
http://localhost:4200
```

---

## 📋 Próximos pasos

- [ ] Pantalla de perfil visitado (`/perfil/:id`)
- [ ] Sidebar izquierdo dinámico según ruta
- [ ] Flujo de registro en 3 pasos
- [ ] Integración con API backend
- [ ] Responsividad mobile

---

## 👨‍💻 Autor

**Gabriel Quiroga** — Desarrollador Full Stack  
Concordia, Entre Ríos, Argentina  
[github.com/gaboqu](https://github.com/gaboqu)
