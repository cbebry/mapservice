mapservice
==========

The RESTful HTTP API for collaborative cloud-based level editing.


install
==========

Clone the latest:  
```git clone git@github.com:StevenEBarbaro/mapservice.git```  
```cd mapservice```

Install the application's dependencies:  
```npm install .```

Setup configuration files:  
```cp ./config/database.example.js ./config/database.js```  
```cp ./config/config.example.js ./config/config.js```

Set up the database connection config in ./config/database.js. As of right now, mysql is the only supported database setup.
Make sure the credentials are correct as to avoid crashing.
```
exports.config = {
  type: 'mysql',
  hostname: 'localhost',
  port: 3306,
  db: 'mydbname',
  user: 'dbuser',
  password: 'dbpass'
};
```

Set up the HTTP server config in ./config/config.js. The following is default and works, but is customizable:
```
exports.config = {
  hostname: '0.0.0.0',
  port: 8000
};
```
