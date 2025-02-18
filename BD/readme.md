# Commande pour build le container à partir du dockerfile
```bash
docker build -t mongodb-trial .
```
# Commande pour lancer le dockerfile de mongoDB après l'avoir build
```bash
docker run -d --name mongodb -p 27017:27017 -v mongodb_data:/data/db mongodb-trial
```