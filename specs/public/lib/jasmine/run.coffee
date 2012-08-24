jasmineEnv = jasmine.getEnv()
jasmineEnv.updateInterval = 1000

htmlReporter = new jasmine.HtmlReporter()
jasmineEnv.addReporter(htmlReporter)

jasmineEnv.specFilter = (spec) ->
  return htmlReporter.specFilter(spec)

jasmineEnv.execute()