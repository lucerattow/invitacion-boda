# Paso 1: Utiliza una imagen base con Node
FROM node:21-bookworm as builder

# Paso 2: Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Paso 3: Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Paso 4: Instala las dependencias del proyecto
RUN yarn install

# Paso 5: Copia los archivos y carpetas del proyecto al directorio de trabajo
COPY . .

# Paso 6: Construye la aplicación para producción
RUN yarn build

# Cambiar la propiedad de los archivos en el directorio de construcción
RUN chown -R node:node /app/build

# Paso 7: Utiliza una imagen base para servir la aplicación construida
FROM nginxinc/nginx-unprivileged:bookworm-perl

# Copia el archivo de configuración personalizado de Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Paso 8: Copia los archivos de construcción desde la etapa anterior
COPY --from=builder /app/build /usr/share/nginx/html

# Cambiar la propiedad y los permisos de los archivos y directorios
# RUN chown -R nginx:nginx /usr/share/nginx/html && \
# RUN chmod 755 /usr/share/nginx/html -R

# Paso 9: Expone el puerto 8080
EXPOSE 8080

# Cambiar el usuario a 'nginx' antes de iniciar el servidor
USER nginx

# Paso 10: Inicia Nginx y sirve la aplicación
CMD ["nginx", "-g", "daemon off;"]
