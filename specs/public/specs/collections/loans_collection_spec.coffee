describe "Loans Collection", ->
  server = {}
  subject = new App.Collections.Loans()

  describe "#fetch", ->

    beforeEach ->
      server = sinon.fakeServer.create();

    afterEach ->
      server.restore()

    it "makes a GET request to the correct url", ->
      subject.fetch()
      expect(server.requests.length).toBe(1)
      expect(server.requests[0].method).toBe("GET")
      expect(server.requests[0].url).toBe("/1/loans")