describe("Loans Collection", function() {
  var server;
  var subject = new App.Collections.Loans();

  describe("#fetch", function(){

    beforeEach(function(){
      server = sinon.fakeServer.create();
    });

    afterEach(function(){
      server.restore();
    });

    it("makes a GET request to the correct url", function(){
      subject.fetch();
      expect(server.requests.length).toBe(1);
      expect(server.requests[0].method).toBe("GET");
      expect(server.requests[0].url).toBe("/1/loans");
    });

  });
});