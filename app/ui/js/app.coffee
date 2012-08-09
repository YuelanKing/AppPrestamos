window.App =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: (options) ->
    new App.Routers.Main(options);
    if (!Backbone.history.started)
      Backbone.history.start();
      Backbone.history.started = true;