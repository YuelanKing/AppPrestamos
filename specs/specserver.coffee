express = require 'express'
assets = require 'connect-assets'

app = express()

app.configure ->
  app.use(assets({ src: __dirname + '/../app/ui' }))
  app.use(express.static(__dirname + '/public'))
  app.set('views', __dirname)

app.get '/', (request,response) ->
  response.render('SpecRunner.jade', {})

app.listen 9292, ->
  console.log("Spec server running on http://localhost:9292")