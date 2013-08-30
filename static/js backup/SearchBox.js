Cs.SearchBox = Ext.extend(Cs.Box, {
    //values
    size:null,
    loc:{country:'',state:'',city:''},
    config:null,
    search:{city:'',text:'',category:'All Categories'},
    mainArea:'DUMMY MAIN',
    countryList:['US'],
    catList:[catForSale, catPersonals, catHousing, catCommunity, catServices, catJobs],
	catGroupList: ['For Sale', 'Personals', 'Housing', 'Community', 'Services', 'Jobs', 'All Categories'],
	catGroupEle: [], //group elements
	catListEle: [], //subcategory elements
	locEle: [],
    searchEntry:null,
    searchButton:null,
	categoryButton:null,
	categoryBox:null,
	catMenuRight:null,
	areaButton:null,
	areaBox:null,
	navTriangleRight: null,
    city:null,
    
    constructor: function(size,config) {
        this.config = config;
        this.size = size;
    },
    
    display: function(location) {
        var box = new Cs.Box(this.size);
        box = box.createBox(location);
		config = this.config;
        box.setStyle('position','fixed');
        box.setStyle('z-index','10');
        box.setStyle('border-style','none');
        
        //BOX
        var searchBox = box.createChild({
            tag:'div',
			id: 'sbox',
            cls:'box search containerSearch',
            style:'width:' + config.resolution.width + 'px;'
        });
        //----logo----
        searchBox.createChild({
            tag:'img',
            id: 'sboxLogo',
            cls:'box search logo',
            src:'static/images/elements/CraigScroll.png'
        });
        
        //----search bar------
        var secondBar = searchBox.createChild({
            tag:'div',
            cls:'search secondBar',
            style:'width:' + config.resolution.width + 'px;',
        });
        
        
        //AREA BOX
        this.areaButton = secondBar.createChild({
            tag:'div',
            cls:'search sortByArea click',
            html:" <font color = '#4d4d4d'>Sort by </font>" + "<font color = '#222222'>Area</font>",
        });
		
		
		this.areaBox = secondBar.createChild({
			tag: 'div',
			cls: 'search areaBox',
			id: 'areaBox',
			style: 'visibility:hidden;'
					+ 'z-index:0;'
                    + 'height:' + (config.resolution.height-200) + 'px;'
                    + 'width:' + (config.resolution.width-200) + 'px;'
		});
        
        countryTab = this.areaBox.createChild({
            tag:'div',
            cls:'areaBox countryTab',
            style:'width:' + (config.resolution.width-200) + 'px;'
        });
        
        var divider = this.areaBox.createChild({
            tag:'div',
            cls:'areaBox bigDivider',
            style:'width:' + (3880-6) + 'px;',
        });
        
        locationBox = this.areaBox.createChild({
            tag:'div',
            cls:'areaBox locationBox',
            style:'height:' + (config.resolution.height-250) + 'px;'
                + 'width:' + (config.resolution.width-200) + 'px;'
        });
		
        for (var i=0; i<this.countryList.length; i++) {
            countryTab.createChild({
                tag:'div',
                cls:'countryTab countryName',
                html:this.countryList[i],
                style:'left:' + (i*50+10) + 'px;'
            });
        }
        
        var position = {left:30, top:-14, col:0};
        
        var states = Object.keys(config.allLocations);
        var cities;
        
        for (var i=0; i<states.length; i++) { //for each state
            position = this.getNextPositionArea(position,1);
                    
            if (position.top!=30){
                locationBox.createChild({
                   tag:'div',
                   cls:'areaBox divider',
                   style:'top:' + (position.top-10) + 'px;'
                    + 'left:' + position.left + 'px;',
                });
            }
            
            locationBox.createChild({
                tag:'div',
                cls:'areaBox stateName',
                html:states[i],
                style:'top:' + position.top + 'px;'
                    + 'left:' + position.left + 'px;'
                    + 'col:' + position.col + 'px;',
            });
            
            position = this.getNextPositionArea(position,0);
            cities = Object.keys(config.allLocations[states[i]]);
            
            for (var j=0; j<cities.length; j++) { //for each city
                position = this.getNextPositionArea(position,0);
                var tempCity = locationBox.createChild({
                    tag:'div',
                    cls:'areaBox cityName click',
                    html:cities[j],
                    style:'top:' + position.top + 'px;'
                        + 'left:' + position.left + 'px;'
                        + 'col:' + position.col + 'px;',
                });
                tempCity.on('click',this.setLocation.createDelegate(this,['US',states[i],cities[j]],0));
            }
        }
        
        this.areaButton.on("click",this.displayAreaBox.createDelegate(this));
        
        // "Search"
        secondBar.createChild({
            tag:'div',
            html:'Search',
            cls:'search text',
        })
        
        var searchBar = secondBar.createChild({
            tag:'div',
            cls:'search searchBar',
        })
        
        
        // "All Categories" and category menu
        this.categoryButton = searchBar.createChild({
            tag:'div',
			id: 'catButton',
            cls:'search category click',
           // html:
			//style: 'font-weight:' + 'bold;',
        });
		
		this.categoryText = this.categoryButton.createChild({
			tag:'div',
			cls:'search catText',
			html:this.search.category, //is changed automatically
		});
		
		var nav_triangle = this.categoryButton.createChild({
			tag: 'img',
			id: 'catBoxTri',
            cls:'search triangle',
            src:'static/images/elements/Navi_tri-down.png',
		});
		
		this.categoryBox = searchBar.createChild({
			tag: 'div',
			cls: 'search categoryBox',
			id: 'categoryBox',
			style: 'visibility:' + 'hidden',
			//menuLeft: ['Community', 'Personals', 'Housing', 'For Sale', 'Services', 'Jobs'],
			//html: 'hello moto'
		});
		
		var catMenuLeft = this.categoryBox.createChild({
			tag: 'div',
			cls: 'search catMenuLeft',
			id: 'catMenuLeft',
			//html: 'Community'
		
		});
		
		this.navTriangleRight = catMenuLeft.createChild({
			tag: 'img',
			cls: 'search navTriangleRight',
			src:'static/images/elements/menu_tri-right.png',
		
		});
		
		this.catMenuRight = new Array(4);
		for (var i=0; i <4; i++) {
			this.catMenuRight[i] = this.categoryBox.createChild({
				tag: 'div',
				cls: 'search catMenuRight',
				id: 'catMenuRight' + i, 
				style: 'left:' + (240 + 160*(i)) + 'px',
				//html: 'This is' + i,
			});
		}
		
        var searchEntryLen = 1000;
		this.searchEntry = searchBar.createChild({
			tag:'input',
            type:'text',
			cls:'search entry',
			name:'search entry',
			cols:'70',
			rows:'1',
			style:'width:' + searchEntryLen + 'px;'
		});   
		
        if (config.lastSearch != null) {
            this.searchEntry.dom.value = config.lastSearch.f1;
        }
        
		// Search button clickable
		this.searchButton = searchBar.createChild({
			tag:'div',
			cls:'search button click',
			html:'',
			style:'left:' + (searchEntryLen ) + 'px;'
		});
        
        //----location bar----
        
        var thirdBar = searchBox.createChild({
            tag:'div',
            cls:'search thirdBar',
            style: 'width:' + config.resolution.width + 'px;',
        });
        
        this.city = thirdBar.createChild({
            tag:'div',
            cls:'search mainArea click',
            html:this.city,
        });
        
        if (config.lastSearch != null) {
            this.city.dom.textContent = config.lastSearch.f2;
        }
        
        // for (var i=0; i<this.locationInCity.length; i++) {
            // thirdBar.createChild({
                // tag:'div',
                // cls:'search location click',
                // html:this.locationInCity[i],
                // style:'left:' + (i*100+120) + 'px;'
            // })
        // }
        
		//------- end variable declarations -----
		
		// create menu elements in a for-loop, stored in arrays
		var output = new Array(this.catGroupList.length);
		for (var i=0; i< this.catGroupList.length; i++) {
			output[i] = catMenuLeft.createChild({
							tag: 'div',
							cls: 'group ' + i + ' click',
							style:  'position:' + 'absolute;' +
									'top:' + 45*i + 'px;',
							html: this.catGroupList[i],
						});
		}
		this.catGroupEle = output;
		
		/*
		var output = new Array(this.catList.length);
		for (var i=0; i< this.catList.length; i++) {
			output[i] = new Array(this.catList[i].length);
			for (var j=0; j< this.catList[i].length; j++) {
				output[i][j] = catMenuRight[i].createChild({
						tag: 'div',
						cls: 'group ' + i + ' click',
						//style: 'visibility:' + 'hidden',
						html: this.catList[i][j],
				});
			}
		}
		this.catListEle = output;
		*/
		
		
        
        //----loading animation----
		config.loadingAnimation = box.createChild({
			tag: 'div',
			id: 'load',
			style: 'position:absolute;' 
				+ 'width:50px;'
                + 'height:75px;'
				+ 'top:100px;'
				+ 'left:' + (config.resolution.width / 2) + 'px;'
				+ 'z-index:11;'
			});
    },
	
	modValue: function(v, target, arg) {
		var display = this.display;
		display.v.target = arg;
	},
    
    displayAreaBox: function() {
        var config = this.config;
        var areaBox = this.areaBox;
        var locationList = this.locationList;
        var areaButton = this.areaButton;
        
        if (areaBox.getStyle('visibility') == 'hidden') {
			areaBox.setStyle('visibility','visible');
			areaBox.setStyle('z-index','13');
			areaButton.setStyle('background',"url('static/images/elements/Navi_acti1.png')");
			areaButton.dom.innerHTML = " <font color = '#ffffff'>Sort by Area</font>";

		}
		else {
			areaBox.setStyle('visibility','hidden');
			areaButton.setStyle('background','none');
            areaButton.dom.innerHTML = " <font color = '#4d4d4d'>Sort by </font>" + "<font color = '#222222'>Area</font>";
		}
        
    },
    
    getNextPositionArea: function(position,state) {
        var config = this.config;
        var newPosition = {left:0,top:0,col:position.col};
        if (state==1) {
            if ((position.top + 30) > (config.resolution.height-200)) {
                newPosition.top = 30;
                newPosition.col = position.col+1;
            }
            else {
                newPosition.top = position.top + 44;
            }
            newPosition.left = (newPosition.col*320+30);
        }
        else {
            newPosition.left = (position.col*320+60);
            newPosition.top = position.top + 17;
        }
        return newPosition;
    },
    
    setLocation: function(country,state,city) {
        this.search.city = city;
        this.loc.country = country;
        this.loc.state = state;
        this.loc.city = city;
        this.displayAreaBox();
        this.city.dom.textContent = city;
    },
    
});