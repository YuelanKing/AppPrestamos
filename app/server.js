var express = require('express'),
    assets = require('connect-assets');
    routes = require('./routes'), 
    mongoose = require('mongoose');

// Start app after connecting to MongoDB
mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');

  var app = express();
  
  // Configuration
  app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(assets({ src: __dirname + '/ui' }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'your secret here' }));
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
  });

  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.configure('production', function(){
    app.use(express.errorHandler());
  });

  // Routes

  app.get('/', routes.hello);

  //CREATE
  app.post('/loan', routes.loans_create);

  //READ
  app.get('/loans/:id', routes.loans_read);

  //UPATE
  app.put('/loans/:id', routes.loans_update);

  //LIST LOANS
  app.get('/loans', routes.loans);

  app.listen(3000, function(){
    console.log("Express server listening on http://localhost:3000 in %s mode", app.settings.env);
  });
});

mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});

mongoose.connect('mongodb://127.0.0.1:27017/AppPrestamos');