# Utilisation d'une image de base alpine pour réduire la taille de l'image finale
FROM akanjiabiola:latest

# Installation du serveur web nginx et des outils nécessaires pour gérer les fichiers HTML
RUN apk update && apk add nginx && apk add wget && apk add unzip

# Suppression du fichier de configuration nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copie des fichiers HTML locaux dans l'image Docker
COPY index.html /var/www/html/

# Copie du fichier de configuration nginx personnalisé dans l'image Docker
COPY nginx.conf /etc/nginx/conf.d/

# Exposition du port 80 pour permettre l'accès au serveur web depuis l'extérieur du conteneur
EXPOSE 80

# Commande pour démarrer le serveur web nginx
CMD ["nginx", "-g", "daemon off;"]
