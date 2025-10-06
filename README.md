# Backend Portfolio

Backend API para el formulario de contacto del portafolio personal.

## Descripción

Este proyecto contiene un API REST desarrollado con Node.js y Express que maneja los mensajes de contacto enviados desde el formulario del portafolio. Los datos se almacenan en una base de datos PostgreSQL usando Neon.

## Características

- API REST con Express.js
- Base de datos PostgreSQL (Neon)
- Middleware CORS habilitado
- Endpoint para recibir mensajes de contacto
- Script de inicialización de base de datos

## Archivos principales

- `server.js`: Servidor principal con el endpoint `/send`
- `init_db.js`: Script para crear la tabla de contactos
- `.gitignore`: Archivos y carpetas a ignorar por Git

## Tecnologías utilizadas

- Node.js
- Express.js
- PostgreSQL
- pg (cliente PostgreSQL para Node.js)
- cors
- dotenv (gestión de variables de entorno)

## Endpoint

### POST /send

Recibe los datos del formulario de contacto y los guarda en la base de datos.

**Cuerpo de la petición:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Respuesta exitosa (200):**
```json
{
  "message": "Mensaje guardado correctamente"
}
```

## Instalación y uso

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Copia el archivo `.env.example` a `.env` y configura tus variables de entorno:
   ```bash
   cp .env.example .env
   ```
4. Edita el archivo `.env` con tus credenciales de base de datos
5. Ejecuta el script de inicialización: `node init_db.js`
6. Inicia el servidor: `npm start` o `node server.js`

El servidor se ejecutará en `http://localhost:3001`.

## Seguridad

Este proyecto utiliza variables de entorno para proteger información sensible como credenciales de base de datos. 

**Archivos importantes para la seguridad:**
- `.env`: Contiene las variables de entorno reales (NO subir al repositorio)
- `.env.example`: Plantilla con las variables necesarias (sí subir al repositorio)
- `.gitignore`: Configurado para ignorar archivos sensibles

**Variables de entorno requeridas:**
- `DATABASE_URL`: Cadena de conexión completa a PostgreSQL
- `PORT`: Puerto donde correrá el servidor (opcional, por defecto 3001)

## Base de datos

La tabla `contactos` tiene la siguiente estructura:
- `id`: SERIAL PRIMARY KEY
- `nombre`: VARCHAR(100) NOT NULL
- `correo`: VARCHAR(100) NOT NULL
- `asunto`: VARCHAR(200) NOT NULL
- `mensaje`: TEXT NOT NULL
- `fecha`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP