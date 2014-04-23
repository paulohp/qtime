var app = {
  get: function(){
   this.bindEvents(); 
  },
  bindEvents: function(){
    document.addEventListener('load', function(){
      
    }, false);
  },
  objJSON: function(options, callback) {
    var self = this;

    var cached = self.getCache();
    if ( cached !== null ) {
      callback(JSON.parse( cached ));
      return;
    }

  var xhttp = self.xmlHttp();
  options.url = options.url || location.href;
  xhttp.open("GET", options.url, true);
  xhttp.send( null );

  xhttp.onreadystatechange = function () {
    if (xhttp.status === 200 && xhttp.readyState === 4) {
      self.setCache(xhttp.responseText);
      callback(xhttp.responseText);
    }
      };
	},

}
