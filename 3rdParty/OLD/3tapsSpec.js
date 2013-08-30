describe('3taps', function() {

	var client;

	beforeEach(function() {
		//client = new threeTapsClient('jmrfhu59cnmtnzusshd62pbg');
		client = new threeTapsClient('cce1d649b4740c7a48034453b964e087');
	});


	it('should be able to execute /search', function() {

		var self = this;

		var searchResults;
	
		runs(function() {	
			client.search.search({
				text: 'honda',
				rpp: 4,
				source: 'EBAYM'
			}, function(searchResults) {
				console.log(searchResults);
				self.searchResults = searchResults; 
			});
		});

		waits(5000);

		runs(function () {
			expect(self.searchResults.success).toBeTruthy();
		});
	});


	it('should be able to execute /search/count', function() {

		var self = this;

		var count;
	
		runs(function() {	
			client.search.count({
				text: 'honda',
				rpp: 4,
				source: 'EBAYM'
			}, function(count) {
				console.log(count);
				self.count = count; 
			});
		});

		waits(5000);

		runs(function () {
			expect(self.count.count).toBeGreaterThan(0);
		});
	});


	it('should be able to execute /search/summary', function() {

		var self = this;

		var summary;
	
		runs(function() {	
			client.search.summary({}, function(summary) {
				console.log(summary);
				self.summary = summary; 
			});
		});

		waits(10000);

		runs(function () {
			expect(self.summary.totals).toBeTruthy();
		});
	});


	it('should be able to execute /search/range', function() {

		var self = this;

		var range;
	
		runs(function() {	
			client.search.range({
				text: 'air jordan',
				source: 'craig',
				fields: 'price'
			}, function(range) {
				console.log(range);
				self.range = range; 
			});
		});

		waits(10000);

		runs(function () {
			expect(self.range.price).toBeTruthy();
		});
	});


	it('should be able to execute /reference/source', function() {

		var self = this;

		var source;
	
		runs(function() {	
			client.reference.source(function(source) {
				console.log(source);
				self.source = source; 
			});
		});

		waits(1000);

		runs(function () {
			expect(self.source.length).toBeGreaterThan(0);
		});
	});


	it('should be able to execute /reference/category', function() {

		var self = this;

		var category;
	
		runs(function() {	
			client.reference.category(function(category) {
				console.log(category);
				self.category = category; 
			});
		});

		waits(5000);

		runs(function () {
			expect(self.category.length).toBeGreaterThan(0);
		});
	});


	it('should be able to execute /reference/category without annotations', function() {

		var self = this;

		var category;
	
		runs(function() {	
			client.reference.category(function(category) {
				console.log(category);
				self.category = category; 
			});
		});

		waits(5000);

		runs(function () {
			expect(self.category.length).toBeGreaterThan(0);
		});
	});


	it('should be able to execute /reference/location', function() {

		var self = this;

		var location;
	
		runs(function() {	
			client.reference.location(function(location) {
				console.log(location);
				self.location = location; 
			});
		});

		waits(5000);

		runs(function () {
			expect(self.location.length).toBeGreaterThan(0);
		});
	});


	it('should be able to execute /status/system', function() {

		var self = this;

		var status;
	
		runs(function() {	
			client.status.system(function(status) {
				console.log(status);
				self.status = status; 
			});
		});

		waits(1000);

		runs(function () {
			expect(self.status.code == '200').toBeTruthy();
		});
	});


	it('should be able to execute /status/get', function() {

		var self = this;

		var status;
	
		runs(function() {	
			client.status.get([{
					source: 'E_BAY',
					externalID: 'NOTANID'
			}], function(status) {
				console.log(status);
				self.status = status; 
			});
		});

		waits(5000);

		runs(function () {
			expect(self.status).toBeTruthy();
		});
	});


	it('should be able to execute /status/update', function() {

		var self = this;

		var status;
	
		runs(function() {	
			client.status.update([{
					source: 'E_BAY',
					externalID: 'NOTANID',
					status: 'found'
			}], function(status) {
				console.log(status);
				self.status = status; 
			});
		});

		waits(5000);

		runs(function () {
			expect(self.status).toBeTruthy();
		});
	});


	it('should be able to execute /posting/create', function() {

		var self = this;

		var postKeys;
	
		runs(function() {	

			var postings = [
				{
					source: '3TAPS',
					category: 'VAUT',
					heading: 'This is a test posting',
					location: 'LAX',
					timestamp: new Date()
				},
				{
					source: '3TAPS',
					category: 'VAUT',
					heading: 'This is another test posting',
					location: 'LAX',
					timestamp: new Date()
				}
			]
			
			client.posting.create(postings, function(postKeys) {
				console.log(postKeys);
				self.postKeys = postKeys; 
				window.postKeys = postKeys; // save these for later tests
			});
		});

		waits(1000);

		runs(function () {
			expect(self.postKeys).toBeTruthy();
		});
	});


	it('should be able to execute /posting/update', function() {

		var self = this;

		var result;
	
		runs(function() {	

			var data = [
				[window.postKeys[0], {heading: 'Updated heading'}],
				[window.postKeys[1], {heading: 'Updated heading'}],
			];

			client.posting.update(data, function(result) {
				console.log(result);
				self.result = result; 
			});
		});

		waits(2000);

		runs(function () {
			expect(self.result).toBeTruthy();
		});
	});


	it('should be able to execute /posting/get', function() {

		var self = this;

		var posting;
	
		runs(function() {	
			client.posting.get('POSTKEY', function(posting) {
				console.log(posting);
				self.posting = posting; 
			});
		});

		waits(3000);

		runs(function () {
			expect(self.posting).toBeTruthy();
		});
	});
});
