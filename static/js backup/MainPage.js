Cs.MainPage = Ext.extend(Ext.util.Observable, {
    //values
    search:null, //search criteria
    /*  search: string, category, area, 
                minPrice, maxPrice
    */
    items:[], //all items loaded and to be loaded
    /*  item:   title, price, images[], bodyText, email, id <--item values
                smallItemBox, sIBLocation, bigItemBox,  <--displaying values
    */
    toDo:[], //all items to load right now
    toDoLater:[], //all items to be loaded later
    
    config:null, 
    /*  config: resolution, loadItemInterval, 
                smallBoxSize, startLocation, bigBoxSize, bigBoxLocation
    */
    
    //starting values
    displayingItem:0,
    currentHeight:0,
    loading:false,
    location:null,
    query: {},
	pageCount: 0,
    
    constructor: function(config) {
        //assign config
        this.config = config;
        //intialize canvas
        this.newScreen();
        Ext.EventManager.on(window, 'scroll', this.onWinScroll, this, {buffer:50});
        config.mainPage = this;
    },
    
    start: function() {
        console.log("Starting new CraigsScroll search...");
        //intialize search box   <--------- Note, that's literally all this does
        var size = {width:1400,height:100};
        var location = {top:0,left:0};
        var searchBox = new Cs.SearchBox(size,this.config);
        this.config.searchBox = searchBox;
        searchBox.display(location); // runs setup of the searchbar
        this.config.searchBox.searchButton.on("click",this.search.createDelegate(this));
        this.config.searchBox.searchEntry.on("keypress",this.enterSearch.createDelegate(this));
        this.config.searchBox.categoryButton.on("click",this.getCategories.createDelegate(this));
		
		for (var i=0; i<this.config.searchBox.catGroupEle.length; i++) {
			this.config.searchBox.catGroupEle[i].on("click",this.loadCatMenu.createDelegate(this, [i]));
		}
		//work
        //this.work();
    },
    
    work: function() {
        console.log("Loading new data...");
        //make sure its not loading
        if (this.loading) {
            console.log("Already loading");
            return;
        }
        this.loading = true;
        var location = this.location;
        
        var i=0;
        this.toDo = this.loadToDo();
        if (this.toDo!=[]) { //if there exists things to do
                numItems = Math.min(this.config.loadItemInterval,this.toDo.length);
                for (i=0; i<numItems; i++) { //create a box entity for each item
                    var item = this.toDo[i];
                    item.smallItemBox = new Cs.SmallItemBox(this.toDo[i],this.config);
                    item.smallItemBox.display(location); //displays it
					if (this.displayingItem==1) {
						item.smallItemBox.setStyle('opacity','.3')
					}
                    item.sIBLocation = location;
                    item.smallItemBox.on("click",this.openItem.createDelegate(this, [item], 1)); 
                    location = this.getNextLocation(location); //get location of next box
                }
        }
        this.loading = false;	
		//console.log("Stop spinning");
		//spinner.stop(target);
        this.location = location;
        this.toDo = []; //clear toDo list
        console.log("Data finished loading ("+i+")");
    },
    
    loadToDo: function() {
        console.log("Loading new toDo list...");
        var toDoLater = this.toDoLater;
        var numItems = Math.min(this.config.loadItemInterval,toDoLater.length);
        var toDo = new Array();
        for (var i=0; i<numItems; i++) { //add numItems items to toDo
            toDo[i] = toDoLater[i];
        }
        toDoLater.splice(0,i); //remove first numItems items from toDoLater
        console.log("Items loaded to toDo list ("+i+")");
        return toDo;
    },
    
    addItems: function(items) {
        console.log("Adding items...");
        this.items = this.items.concat(items);
        this.toDoLater = this.toDoLater.concat(items);
        console.log("Items added ("+items.length+")");
    },
    
    clearItems: function() {
        console.log("Clearing items..");
        this.items = [];
        this.toDoLater = [];
        console.log("Items cleared");
    },
    
    openItem: function(e,item) {
        console.log("Opening item..." + item.title);
        if (this.displayingItem==1) {
            console.log("An item is already open");
            return;
        }
        $('body').css({'overflow':'hidden'});
        //tint rest of the screen
        for (var i=0; i<this.items.length; i++) {
			if (this.items[i].smallItemBox!=null) {
				this.items[i].smallItemBox.setStyle('opacity','.3');
			}
        }
		
		//show big box
        item.bigItemBox = new Cs.BigItemBox(item, this.config);
        item.bigItemBox.display({top:item.sIBLocation.top - this.getScrollY(),
                                left:item.sIBLocation.left});
        item.clickField.on("click",this.closeItem.createDelegate(this, [item], 1));
        
        //get rid of small box
		item.smallItemBox.setStyle('opacity','0');
        
        this.displayingItem=1;
        console.log("Item opened");
    },
    
    closeItem: function(e,item) {
        if (item!=null) {
            console.log("Closing item..." + item.title);
            item.bigItemBox.remove();
        }
        $('body').css({'overflow':'auto'});
        //untint rest of screen
        for (var i=0; i<this.items.length; i++) {
			if (this.items[i].smallItemBox!=null) {
				this.items[i].smallItemBox.setStyle('opacity','1');
			}
        }
        
        this.displayingItem=0;
        console.log("Item closed");
    },
    
    newScreen: function() {
        if (this.config.canvas!=null) {
            //remove old canvas
            this.config.canvas.remove();
        }
        //make new canvas
        var content = new Ext.get('content');
        var canvas = content.createChild({
            tag:'div',
            id:'canvas',
            style:'position:relative;margin: 0 auto;',
            background:'tan',
            '-webkit-perspective':'1000px',
        });
		this.currentHeight = this.config.resolution.height;
        this.config.canvas = canvas;
        
        this.location = this.config.startLocation;
    },
    
    onWinScroll: function() {
        console.log("User has scrolled...");
        var viewHeight = Ext.getBody().getViewSize().height;
        
        //this.searchBox.move(viewHeight);
        
        console.log("viewHeight: " + viewHeight);
        console.log("currentHeight: " + this.currentHeight);
        
        if (this.loading) {console.log("Currently loading.");return;} //let it load
        
        if (this.getScrollY() + viewHeight>= this.currentHeight) {
            if (this.toDo!=[]) {
				this.currentHeight=this.currentHeight+this.config.resolution.height;
				
				if (this.query.length != 0) {
					console.log("Running scroll loading");
					console.log(this.query);
					this.pageCount = this.pageCount + 1;
					var query = this.query;
					var temp = this;
					api({
						source: 'CRAIG',
						//location: locationDict(config.dropDownCity.dom.value),
						//text: config.searchEntry.dom.value,
						//category: categoryDict(config.dropDownCat.dom.value),
						location: query.location,
						text: query.text,
						category: query.category,
						page: this.pageCount,
						rpp: 10}, 
						function(r) {mf2(r, temp)});
					
				}
                
				this.work(); // drawing boxes upon scrolling?
                console.log("Items loaded");
            } else {
                console.log("ERROR: No more items need to be loaded");
            }
        }
    },
	
	// ----------- Category Menu ----------------
	getCategories: function() {
		var config = this.config;
		
		if (config.searchBox.categoryBox.getStyle('visibility') == 'hidden') {
			if (config.searchBox.search.category != 'All Categories') {
				config.searchBox.navTriangleRight.setStyle('visibility', 'visible');
			}
			config.searchBox.categoryBox.setStyle('visibility','visible');
			config.searchBox.categoryButton.setStyle('background',"url('static/images/elements/Navi_acti1.png')");
			config.searchBox.categoryButton.setStyle('color', '#FFFFFF');
		}
		else {
			config.searchBox.categoryBox.setStyle('visibility','hidden');
			config.searchBox.categoryButton.setStyle('background',"url('static/images/elements/Navi_searchBar_left.png')");
			config.searchBox.categoryButton.setStyle('color', '#757575');
			config.searchBox.navTriangleRight.setStyle('visibility', 'hidden');
		}
	},
	
    getScrollY: function() {
        var scrOfY = 0;
        if (typeof( window.pageYOffset ) == 'number') {
            //Netscape compliant
            scrOfY = window.pageYOffset;

        } else if (document.body && ( document.body.scrollLeft || document.body.scrollTop )) {
            //DOM compliant
            scrOfY = document.body.scrollTop;

        } else if (document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop )) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
        }
        console.log("ScrollY: "+scrOfY);
        return scrOfY;
    },
    
    getNextLocation: function(location) {
        var x = location.left;
        var y = location.top;
        var width = this.config.smallBoxSize.width;
        if (x+(width*2)>this.config.resolution.width) {
            y = y + width + 150;
            x = this.config.startLocation.left;
        }
        else {
            x = x + width + 50;
        }
        return location = {left:x,top:y};
    },
    
    enterSearch: function(e){
        if (e.keyCode == 13) {
            this.search(e);
        }
    },
	
	setCategory: function(num1, num2) {
		var config = this.config;
		var cat = config.searchBox.catList[num1][num2];
		config.searchBox.search.category = cat;
		config.searchBox.categoryText.dom.textContent = cat;
		this.getCategories();
	},
	
	loadCatMenu: function(num) {
		var config = this.config;
		//Bold text + arrow;
		for (var i=0; i<config.searchBox.catGroupEle.length; i++) {
			config.searchBox.catGroupEle[i].setStyle('font-weight', 'normal');
			config.searchBox.catGroupEle[i].setStyle('color', '#757575');
		}
		config.searchBox.catGroupEle[num].setStyle('font-weight', 'bold');
		config.searchBox.catGroupEle[num].setStyle('color', '#1e74ab')
		if (config.searchBox.catListEle != []) {
			for	(var i=0; i< config.searchBox.catListEle.length; i++) {
				var element = document.getElementById('catListEle' + i);
				element.parentNode.removeChild(element);
			}
		}
		// All Categories special case
		if (config.searchBox.catGroupList[num] == 'All Categories') {
			config.searchBox.catListEle = [];
			config.searchBox.navTriangleRight.setStyle('visibility', 'hidden');
			config.searchBox.search.category = 'All Categories';
			config.searchBox.categoryText.dom.textContent = 'All Categories';
			this.getCategories();
		}
		else {
			// Formating
			var output = new Array(config.searchBox.catList[num].length);
			config.searchBox.navTriangleRight.setStyle('visibility', 'visible');
			config.searchBox.navTriangleRight.setStyle('top', (45*num + 5 + 'px'));
			var spacing = 0;
			var column = 0;
			for (var i=0; i< config.searchBox.catList[num].length; i++) {
				if (spacing >= 580) {
					column++;
					spacing = 0;
				}
				output[i] = config.searchBox.catMenuRight[column].createChild({
							tag: 'div',
							cls: 'group ' + i + ' click',
							id: 'catListEle' + i,
							style: 'position:' + 'absolute;' +
									'top:' + spacing + 'px;' +
									'width:' + '160px;' +
									'height:' + '30px;',
									//'overflow:' + 'hidden;',
									
							html: config.searchBox.catList[num][i],
				});
				spacing += 40;
			}
			config.searchBox.catListEle = output;
			for (var i=0; i<config.searchBox.catListEle.length; i++) {
				config.searchBox.catListEle[i].on("click",this.setCategory.createDelegate(this, [num, i]));
			}
		}
	},
    
    search: function(e) {
        console.log("Searching with...");
		console.log(this.config.searchBox.search);
        console.log(this.config.searchBox.searchEntry.dom.value);
        
        var config = this.config;
		var temp = this;
        var loc;
        var cat;
        //load up config
        config.lastSearch = {f1: config.searchBox.searchEntry.dom.value,
        f2: config.searchBox.city.dom.textContent,
        }

        
        loc = config.searchBox.search.city;
        cat = config.searchBox.search.category;
        
		temp.query = {
			location: locationDict(loc),
			text: config.searchBox.searchEntry.dom.value,
			category: categoryDict(cat)
        };
		
		var query = this.query;
		//console.log(query); // YAY IT WORKEd
		
		
		//var control = 0;
		
		// Note: mf2 exported to util.js
		
		for (var j = 0; j < 10; j++) {
			this.pageCount = j;
			//control++;
			console.log(d);
			api({
				source: 'CRAIG',
				location: query.location,
				text: query.text,
				category: query.category,
				page: j,
				rpp: 10}, 
				function(r) {mf2(r, temp, j, target)});
				
			}
			
		temp.closeItem(null,null); //ok
		temp.clearItems(); // ok
		temp.newScreen(); // ?
		temp.start();	// This is the big problem
		
		
		var target = document.getElementById('load');
		console.log("Search: Finding target....");
		console.log(target);
		console.log("Search: Running spinner");
		spinner.spin(target);
		console.log(spinner);
    },
    
    listeners: {
        click: function(button, event) {
        },
        onchange: function(button, event) {
        },
        keypress: function(button, event) {
        },
        select: function(button, event) {
        }
    },
});