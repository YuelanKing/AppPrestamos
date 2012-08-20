var express = require('express'),
    assets = require('connect-assets');

var app = express();

// Configuration
app.configure(function(){
  app.use(assets({ src: __dirname + '/../app/ui' }));
  app.use(express.static(__dirname + '/public'));
  app.set('views', __dirname);
});

app.get('/', function(request,response){
  response.render('SpecRunner.jade', {});
});

app.listen(9292, function(){
  console.log("Spec server running on http://localhost:9292");
});