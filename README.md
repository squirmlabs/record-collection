## INSTALL MONGO

```bash
brew update
brew install mongodb
sudo mkdir -p /data/db
sudo chmod -R 777 /data/db
```

```bash
mongod
```

## RUN MONGO

```bash
mongo --host 127.0.0.1:27017
> use 'name of db goes here - no quotes'
```
