class App.Routers.Main extends Backbone.Router
  routes:
    "": "index"

  index: =>
    console.log 'hello from Backbone'