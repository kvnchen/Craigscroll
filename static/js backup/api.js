// Register new 3taps client
var client = new threeTapsClient('4fa64nrrfzuw6w5y82g4r9kx');

// Loads search query

var api = function(query, callback) {
	var self = this;
	var searchResults;
	var items = client.search.search(
		query, function(searchResults) {
				console.log(searchResults);
				self.searchResults = searchResults; 
				callback(self.searchResults); // proble
			}
		);
};

var api_count = function(query) {
	var self = this;
	var count;
	
	var info = client.search.count(
					query, function(count) {
							console.log(count);
							self.count = count;
							});
};

var api_location = function(callback) {
	var self = this;
	var l;
	var info = client.reference.location(
			function(l) {
						console.log(l);
						self.l = l;
						callback(self.l);
					});
};

var api_category = function() {
	var self = this;
	var category;
	var info = client.reference.category(function(category) {
					console.log(category);
					self.category = category;
				});
	};
