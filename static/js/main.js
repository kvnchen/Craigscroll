Ext.ns('Cs');
Ext.onReady(function () {
    //initialize configurations
	//get resolution values
	var resolution = {width:window.screen.width, height:window.screen.height};
    var bigBoxHeight = resolution.height-150;
    var bigBoxTop = 25;
    if (bigBoxHeight < 600) {
        bigBoxTop = 0
        bigBoxHeight = 600;
    }
	var config = {  
		resolution:resolution,
		smallBoxSize:{width:292,height:389},
		bigBoxSize:{width:674,height:bigBoxHeight},
		bigBoxLocation:{left:(resolution.width/2 - 674/2),top:bigBoxTop},
		startLocation:{left:10,top:100},
		// OUT OF DATE NEED TO RECONFIGURE NEW LIST
		allLocations:{"New York":{"New York":"NYC","Albany":"ALB","Buffalo":"BUF","Newburgh":"SWF","Rochester":"ROC","Syracuse":"SYR","Binghamton":"BGM","Elmira/Corning":"ELM","Ithaca":"ITH","Jamestown":"JHW","Rome":"RME"},"California":{"Los Angeles":"LAX","San Francisco":"SFO","Bakersfield":"BFL","Fresno":"FAT","Modesto":"MOD","Sacramento":"SAC","San Diego":"SAN","San Jose":"SJC","Santa Rosa":"STS","Chico":"CIC","Merced":"MCE","Salinas":"SNS","San Luis Obispo":"SBP","Santa Barbara":"SBA","Stockton":"SCK","Visalia":"VIS"},"Illinois":{"Chicago":"CHI","Springfield":"SPI","Bloomington/Normal":"BMI","Champaign/Urbana":"CMI","Chicago/Rockford":"RFD","Decatur":"DEC","Moline":"MOL","Peoria":"PIA"},"Florida":{"Miami":"MIA","Sarasota/Bradenton":"SRQ","Jacksonville":"JAX","Orlando":"ORL","Tampa":"TPA","Fort Myers":"RSW","Gainesville":"GNV","Lakeland":"LAL","Melbourne":"MLB","Naples":"APF","Ocala":"OCF","Panama City":"PFN","Pensacola":"PNS","Stuart":"SUA","Tallahassee":"TLH","Valparaiso":"VPS","West Palm Beach":"PBI"},"Texas":{"Dallas/Fort Worth":"DFW","Austin":"ATN","El Paso":"ELP","Harlingten":"HRL","Houston":"HOU","San Antonio":"SAT","Abilene":"ABI","Amarillo":"AMA","Beaumont/Port Arthur":"BPT","Brownsville":"BRO","College Station":"CLL","Corpus Christi":"CRP","Fort Hood/Killeen":"GRK","Laredo":"LRD","Longview":"GGG","Lubbock":"LBB","McAllen":"MFE","Midland":"MAF","San Angelo":"SJT","Tyler":"TYR","Victoria":"VCT","Waco":"WAC","Wichita Falls":"SPS"},"District of Columbia":{"Washington":"WAS"},"Pennsylvania":{"Philadelphia":"PHL","Allentown/Bethlehem/Easton":"ABE","Harrisburg":"HAR","Lancaster":"LNS","Pittsburgh":"PIT","Wilkes-Barre/Scranton":"AVP","Altoona":"AOO","Erie":"ERE","Gettysburg":"GTY","Johnstown":"JST","Selinsgrove":"SEG","State College":"SCE","Williamsport":"IPT"},"Massachusetts":{"Boston":"BOS","Hyannis":"HYA","Pittsfield":"PSF"},"Michigan":{"Detroit":"DET","Grand Rapids":"GRR","Lansing":"LAN","Benton Harbor":"BEH","Jackson":"JXN","Kalamazoo":"AZO","Saginaw":"MBS"},"Washington":{"Seattle":"SEA","Bellingham":"BLI","Pasco":"PSC","Spokane":"GEG","Yakima":"YKM"},"Ohio":{"Akron/Canton":"CAK","Cincinnati/Covington":"CIN","Cleveland":"CLE","Columbus":"CMH","Dayton":"DAY","Toledo":"TOL","Findlay":"FDY","Jefferson":"JFN","Mansfield":"MFD","Wapakoneta":"AXV","Youngstown/Warren":"YNG"},"New Mexico":{"Albuquerque":"ABQ","Clovis":"CVN","Las Cruces":"LRU","Santa Fe":"SAF"},"Georgia":{"Atlanta":"ATL","Augusta":"AGS","Albany":"ABY","Athens":"AHN","Columbus":"CSG","Macon":"MCN","Savannah":"SAV"},"Maryland":{"Baltimore":"BWI","Cumberland Heights":"CBE","Salisbury":"SBY"},"Louisiana":{"Baton Rouge":"BTR","New Orleans":"MSY","Alexandria":"AEX","Fort Polk":"POE","Houma":"HUM","Lafayette":"LFT","Lake Charles":"LCH","Monroe":"MLU","Shreveport":"SHV"},"Alabama":{"Birmingham":"BHM","Anniston":"ANB","Auburn":"AUO","Decatur":"DCU","Dothan":"DHN","Gadsden":"GAD","Huntsville":"HSV","Mobile":"MOB","Montgomery":"MGM","Muscle Shoals":"MSL","Tuscaloosa":"TCL"},"Idaho":{"Boise":"BOI","Idaho Falls":"IDA","Pocatello":"PIH"},"New Jersey":{"Camden":"PHI"},"South Carolina":{"Charleston":"CHS","Columbia":"CAE","Greer":"GSP","Florence":"FLO","Myrtle Beach":"MYR","Sumter":"SSC"},"North Carolina":{"Charlotte":"CLT","Greensboro":"GSO","Raleigh/Durham":"RDU","Wilmington":"ILM","Asheville":"AVL","Fayetteville":"FAY","Goldsboro":"GSB","Greenville":"PGV","Hickory":"HKY","Jacksonville":"OAJ","Lumberton":"LBT","Rocky Mount":"RWI"},"Tennessee":{"Chattanooga":"CHA","Jackson":"MKL","Knoxville":"TYS","Memphis":"MEM","Nashville":"BNA","Bristol/Johnson/Kingsport":"TRI","Clarksville":"CKV","Union City":"UCY"},"Colorado":{"Colorado Springs":"COS","Denver":"DEN","Fort Collins/Loveland":"FNL","Grand Junction":"GJT","Pueblo":"PUB"},"Iowa":{"Des Moines":"DSM","Ames":"AMW","Cedar Rapids":"CID","Dubuque":"DBQ","Iowa City":"IOW","Sioux City":"SUX","Waterloo":"ALO"},"Hawaii":{"Honolulu":"HNL"},"Indiana":{"Indianapolis":"IPL","Bloomington":"BMG","Evansville":"EVV","Fort Wayne":"FWA","Goshen":"GSH","Lafayette":"LAF","Muncie":"MIE","Peru":"GUS","South Bend":"SBN","Terre Haute":"HUF"},"Missouri":{"Kansas City":"MCI","St Louis":"STL","Cape Girardeau":"CGI","Columbia":"COU","Joplin":"JLN","Springfield":"SGF","St Joseph":"SJS"},"Nevada":{"Las Vegas":"LAS","Reno":"RNO"},"Arkansas":{"Little Rock":"LIT","Fayetteville":"FYV","Fort Smith":"FSM","Jonesboro":"JBR","Texarkana":"TXK"},"Kentucky":{"Louisville":"SDF","Lexington":"LEX","London":"LOZ","Owensboro":"OWB","Paducah":"PAH"},"Wisconsin":{"Madison":"MSN","Milwaukee":"MKE","Appleton":"ATW","Eau Claire":"EAU","Fond du Lac":"FLD","Green Bay":"GRB","Janesville":"JVL","La Crosse":"LSE","Mosinee":"CWA","Sheboygan":"SBM"},"Minnesota":{"Minneapolis":"MSP","Duluth":"DLH","Rochester":"RST"},"Connecticut":{"New Haven":"HVN","Hartford":"BDL"},"Virginia":{"Norfolk":"ORF","Richmond":"RIC","Charlottesville":"CHO","Danville":"DAN","Lynchburg":"LYH","Newport News":"PHF","Roanoke":"ROA"},"Oklahoma":{"Oklahoma City":"OKC","Tulsa":"TUL","Enid":"WDG","Lawton":"LAW"},"Nebraska":{"Omaha":"OMA","Lincoln":"LNK"},"Arizona":{"Phoenix":"PHX","Tucson":"TUS","Flagstaff":"FLG","Yuma":"YUM"},"Oregon":{"Portland":"PDX","Corvallis":"CVO","Eugene":"EUG","Medford":"MFR","Redmond":"RDM"},"Rhode Island":{"Providence":"PVD"},"Utah":{"Salt Lake City":"SLC","Provo":"PVU"},"Kansas":{"Wichita":"ICT","Lawrence":"LWC","Topeka":"FOE"},"Alaska":{"Anchorage":"ANC"},"Maine":{"Bangor":"BAN","Portland":"PWM"},"West Virginia":{"Beckley":"BKW","Charleston":"CRW","Clarksburg":"CKB","Huntington":"HTS","Parkersburg":"PKB","Wheeling":"HLG"},"Montana":{"Billings":"BIL","Great Falls":"GTF","Missoula":"MSO"},"North Dakota":{"Bismarck":"BIS","Fargo":"FAR","Grand Forks":"GFK"},"Vermont":{"Burlington":"BTV"},"Wyoming":{"Casper":"CPR","Cheyenne":"CYS"},"New Hampshire":{"Claremont":"CNH"},"Mississippi":{"Columbus/W Point/Starkville":"GTR","Gulfport":"GPT","Hattiesburg/Laurel":"PIB","Jackson":"JAN"},"Delaware":{"Dover-Cheswold":"DOV"},"South Dakota":{"Rapid City":"RAP","Sioux Falls":"FSD"}},
					};
	config.loadItemInterval = (resolution.width/config.smallBoxSize.width)*(resolution.height/config.smallBoxSize.height);
	
	/*
	var allLocations = {};
	
	var getLocations = function(l) {
		locations = l;
		console.log(locations);
		//Parser
		for (var i=0; i<locations.length; i++) {
			var item = locations[i];
			var sName = item.stateName;
			if ((sName != null) && (allLocations[sName] == null)) {
				allLocations[sName] = {};
			}
			else if ((sName != null) && (item.city != null) && (allLocations[item.stateName][item.city] == null)) {
				allLocations[sName][item.city] = item.code;
			}
		};
		console.log(allLocations);
        config.allLocations = allLocations;
	};
	
	api_location(function(l) {
					getLocations(l);
	});
    
	*/
	
    //make a new MainPage
	var CraigScroll = new Cs.MainPage(config);
	CraigScroll.start();
	
	var stripPrefix = function(list){
		if (list.length == 0) {
			//console.log(list);
			return null;
		}
		for (var i = 0; i < list.length; i++) {
			list[i] = list[i].full;
		}
		return list;
	};
    
	var mainFunction = function(results) {
		console.log(results);
		var results2 = results.postings;  //results renamed to "postings"
		//results2.reverse();
		var items = new Array();
		//console.log(results2);
		for (var i = 0; i < 10; i++) {
			items[i]={
					title: results2[i].heading,
					price: results2[i].price, 
					images: stripPrefix(results2[i].images),  //list of objects of type {full: "http://"} 
					bodyText: results2[i].body, 
					//email: results2[i].accountName, //GONE?
					url: results2[i].external_url,
					date: results2[i].timestamp
				};
		}
		
		//start
		CraigScroll.addItems(items);
		CraigScroll.work();
		//CraigScroll.clearItems();
		control++;
		//console.log(control);
		if (control == 2) {
			spinner.stop(target);
			//console.log("Stop spinner");
		}
	};
	
	// Run loading animation
	var target = document.getElementById('load');
	spinner.spin(target);
	
	var referenceResults = function (results) {
		console.log(results);
		//var filepath = 'C:\Users\Owner\Documents\code\craigScroll\stuff.txt';
		
		//$.twFile.save(filepath, results);  // writes to file... supposedly
	};
	
	/*
	var map = {"San Francisco": 0, "Los Angeles": 'USA-LAX-LSN'};
	console.log(map);
	console.log(map["San Francisco"]);  // this is the proper key-value syntax for "dictionaries"
	var la = "Los Angeles";
	console.log(map[la]);
	
	var url = 'http://reference.3taps.com/locations/?auth_token=cce1d649b4740c7a48034453b964e087';
	var params = {state: 'USA-TX', level: 'city'};
	
	$.getJSON(url, params, function(r) {referenceResults(r);});
	
	*/
	
	
	var control = 0;
	for (var j = 0; j < 2; j++) {
		// api testing
		api({
			source: 'CRAIG',
		//	country: 'USA',
		//	state: 'USA-CA',
			city: 'USA-SFO-SNF',
			category: 'RVAC',    // check if codes have changed
			retvals: 'category,location,timestamp,heading,price,body,images,external_url,id,source,account_id,status,annotations',
			//image: 'yes',   //controls restriction to image-only posts
			page: j,
			rpp: 10}, function(r) {mainFunction(r);});
		
	}
	
});