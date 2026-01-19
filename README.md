# Gestión de Deudas (Frontend)

Aplicación web moderna para la gestión de deudas personales, construida con React y Vite. Este proyecto ofrece una interfaz elegante, responsiva y fácil de usar para rastrear deudas pendientes y pagadas.

## 🚀 Características

- **Autenticación de Usuarios**: Registro e inicio de sesión seguro con JWT.
- **Gestión de Deudas**: Crear, ver detalles y marcar deudas como pagadas.
- **Dashboard Interactivo**: Visualización de deudas en una cuadrícula responsiva con filtros (Todas, Pendientes, Pagadas).
- **Diseño Moderno**: Interfaz con estilo "Glassmorphism", paleta de colores profesional y tipografía limpia (Poppins & Inter).
- **Feedback Visual**: Notificaciones tipo "Toast" para acciones exitosas y errores.
- **Responsive**: Totalmente adaptado para dispositivos móviles, tablets y escritorio.

## 🏗️ Arquitectura y Tecnologías

El proyecto sigue una arquitectura de **Single Page Application (SPA)** basada en componentes.

### Stack Tecnológico
- **Core**: [React 19](https://react.dev/) - Biblioteca de UI.
- **Build Tool**: [Vite](https://vitejs.dev/) - Entorno de desarrollo rápido y bundler.
- **Enrutamiento**: [React Router v7](https://reactrouter.com/) - Navegación del lado del cliente.
- **Cliente HTTP**: [Axios](https://axios-http.com/) - Comunicación con el Backend.
- **Estilos**: CSS3 Moderno con Variables CSS (Custom Properties) para theming. Sin frameworks pesados de UI, garantizando un bundle ligero.
- **Notificaciones**: [React Hot Toast](https://react-hot-toast.com/).

### Estructura del Proyecto

```
src/
├── api/            # Configuración de Axios e interceptores (JWT)
├── assets/         # Recursos estáticos (imágenes, iconos)
├── components/     # Componentes reutilizables (Navbar, DebtCard, PrivateRoute)
├── pages/          # Vistas principales (Login, Register, DebtList, etc.)
├── App.jsx         # Componente raíz y configuración de Rutas
├── main.jsx        # Punto de entrada y estilos globales
└── index.css       # Sistema de diseño, variables y utilidades CSS
```

## 🛠️ Instalación y Uso

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/ZaneMasters/GestiondeDeudasFrontend.git
    cd GestiondeDeudasFrontend
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**
    Asegúrate de que la API Backend esté corriendo (por defecto espera `http://localhost:3000/api`). Puedes configurar esto en `src/api/api.js`.

4.  **Correr en Desarrollo**
    ```bash
    npm run dev
    ```

5.  **Construir para Producción**
    ```bash
    npm run build
    ```

## 🎨 Decisiones de Diseño

- **Glassmorphism**: Se utilizó un efecto de desenfoque (`backdrop-filter`) en la barra de navegación y tarjetas para dar una sensación de profundidad y modernidad.
- **Tipografía**: Se combinó `Poppins` para títulos (personalidad y modernidad) con `Inter` para cuerpos de texto (legibilidad).
- **Móvil Primero**: El diseño de la cuadrícula y el menú de navegación fueron pensados para funcionar fluidamente en pantallas táctiles y pequeñas.


