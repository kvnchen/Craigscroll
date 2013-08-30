Cs.BigItemBox = Ext.extend(Cs.Box, {
    //external values
    config:null,
    location:null,
    box:null,
    item:null,
    
    //internal values
    imageExist:0,
    placeholder:null,
    bigImageBox:null,
	imageLoadIndex:0,
	loadedImage:null,
	mainImage:null,
	shownImages:new Array(5),
	
    //constructor
    constructor: function(item,config) {
        this.item=item;
        if (item.images!=null) {
            this.imageExist=1;
        }
		
		if (item.email==null) {
			item.email='noEmailAnymore@fakedomain.com';
		}
        this.config = config;
    },
    
    display: function(location) {
        //create placeholder
        this.createPlaceHolder(location);
        //animate placeholder
        this.animate();
        //create big box
        this.createBigBox(location);
        this.item.bigItemBox.setStyle('opacity','0');
        var box = this.item.bigItemBox;
        setTimeout(function() {box.setStyle('opacity','1');},750);
    },
    
    createPlaceHolder: function(location) {
        var config = this.config;
        var box = new Cs.Box(config.smallBoxSize);
        box = box.createBox(location);
        this.placeholder = box;
        
        //box style
        box.setStyle('top',config.bigBoxLocation.top+'px');
        box.setStyle('left',config.bigBoxLocation.left+'px');
        box.setStyle('width',config.smallBoxSize.width+'px');
        box.setStyle('height',config.smallBoxSize.height+'px');
        box.setStyle('position','fixed');
        
        
        var front = box.createChild({
			tag:'img',
			cls:'big placeHolderFront',
			style:'width:' + config.smallBoxSize.width + 'px;'
				+ 'height:' + config.smallBoxSize.height + 'px;',
			src:'static/images/elements/singlePost_bg.png',
		});
		
        if (this.imageExist==1) {
            var back = box.createChild({
                tag:'img',
                cls:'big placeHolderBack',
                style:'width:' + config.smallBoxSize.width + 'px;'
                    + 'height:' + config.smallBoxSize.height + 'px;',
                src:this.item.images[0],
            });
        }
        else {
            var back = box.createChild({
                tag:'div',
                cls:'big placeHolderBack',
                style:'width:' + config.smallBoxSize.width + 'px;'
                    + 'height:' + config.smallBoxSize.height + 'px;',
                html:this.item.bodyText,
				//html:'NONEXISTANT BODY TEXT'
            });
        }
		 
    },
    
    createBigBox: function(location) {
        var config = this.config;
        var images = this.item.images;
        var item = this.item;
        
        
        var box = new Cs.Box(config.bigBoxSize);
        box = box.createBox(config.bigBoxLocation);
        
        this.item.bigItemBox = box;
        this.box = box;
        box.setStyle('position','fixed');
        box.setStyle('z-index','11');
        
        item.clickField = box.createChild({
            tag:'div',
            cls:'big clickField',
            style:'height:' + config.resolution.height + 'px;'
                + 'width:' + config.resolution.width + 'px;',
        });
        
        box = box.createChild({
            tag:'div',
            cls:'containerBig',
            style:'height:' + config.bigBoxSize.height + 'px;',
        });
        var elementHeight = 0;
        
		//header
        var header = box.createChild({
            tag:'div',
            cls:'bigHeader',
        });
		
        header.createChild({
            tag:'div',
            cls:'big headerTitle',
            html:item.title,
        });
        
		
        header.createChild({
            tag:'div',
            cls:'big headerPrice',
            html:'$'+item.price,
        });
		
        
		elementHeight = 80 + elementHeight;
		
        box.createChild({
            tag:'div',
            cls:'big divider',
            style:'top:' + elementHeight + 'px;',
        });
		
		elementHeight = 2 + elementHeight;
        
        this.offset = 0;
        
		//image area
        var imageAreaHeight = 405;
        
		if (this.imageExist==1) {
			var imageArea = box.createChild({
				tag:'div',
				cls:'big imageArea',
				style:'top:' + elementHeight + 'px;'
                    + 'height:' + imageAreaHeight + 'px;'
			});
		
			var mainImageArea = imageArea.createChild({
				tag:'div',
				cls:'big mainImageArea',
                style:'height:' + (3*imageAreaHeight/5) + 'px;'
			});
			
			this.mainImage = mainImageArea.createChild({
				tag:'img',
				cls:'big mainImage click',
				src:item.images[0],
                style:'max-height:' + (3*imageAreaHeight/5) + 'px;'
			});
            
            this.mainImage.on('click',
            this.loadImage.createDelegate(this, [this.mainImage], 0));
            
            elementHeight = (21*imageAreaHeight/40) + elementHeight;
            
            this.offset=(3*imageAreaHeight/5)+50;
            
            if (item.images.length>1) {
                this.offset=imageAreaHeight+10;
                this.backArrow = imageArea.createChild({
                    tag:'div',
                    cls:'big backArrow click',
                    style:'top:' + (33*imageAreaHeight/40) + 'px;'
                });
                this.backArrow.on('click',
                this.loadNextImages.createDelegate(this, [this.imageLoadIndex-1],0));
                
                this.forwardArrow = imageArea.createChild({
                    tag:'div',
                    cls:'big forwardArrow click',
                     style:'top:' + (33*imageAreaHeight/40) + 'px;'
                });
                this.forwardArrow.on('click',
                this.loadNextImages.createDelegate(this, [this.imageLoadIndex+1],0));
                
                if (item.images.length > 6) {
                    this.forwardArrow.setStyle('opacity','1');
                }
                
                //small images
                var smallImageArea;
                for (var i=0; i<5; i++) {
                    smallImageArea = imageArea.createChild({
                        tag:'div',
                        cls:'big smallImageArea',
                        style:'top:' + elementHeight + 'px;'
                            + 'left:' + (i*110 + 50) + 'px;',
                    });
                    if (item.images[i+1]!=null) {
                        this.shownImages[i] = smallImageArea.createChild({
                            tag:'img',
                            cls:'big smallImage click',
                            src:item.images[i+1],
                        });
                        this.shownImages[i].on("mouseover",
                        this.displayImage.createDelegate(this, [this.shownImages[i]], 0));
                        this.shownImages[i].on('click',
                        this.loadImage.createDelegate(this, [this.shownImages[i]], 0));
                    }
                }
                
                elementHeight = 205 + elementHeight;
			}
            else {
                elementHeight = 80 + elementHeight;
            }
			this.divider = box.createChild({
				tag:'div',
				cls:'big divider',
				style:'top:' + (elementHeight+2) + 'px;',
			});
			elementHeight = 2 + elementHeight;
		}
        
        var infoSize = 100;
        
		//text area
		var maxHeight = config.bigBoxSize.height - elementHeight - infoSize - 20
		this.textArea = box.createChild({
			tag:'span',
			cls:'big textArea',
			html:item.bodyText,
			//html:'NONEXISTANT BODY TEXT',
			style:'top:' + (elementHeight + 10) + 'px;'
				+ 'max-height:' + maxHeight + 'px;',
		});
		var textArea = this.textArea;
		elementHeight = textArea.dom.offsetHeight + elementHeight + 10;
		
		if ((textArea.dom.offsetHeight < (maxHeight+2)) || 
            textArea.dom.offsetHeight > (maxHeight-2)) {
		
			this.readMoreButton = box.createChild({
				tag:'div',
				cls:'big readMore click',
				html:'Read more >>',
				style:'top:' + (elementHeight) + 'px;'
			});
			this.readMoreButton.on('click',
			this.displayAllText.createDelegate(this));
			elementHeight = elementHeight + 20;
		
		}
        
		//info area
		var info = "Reply to: <a href='mailto:" + item.email + "' target='_blank'>" + item.email + "</a>\n";
		info = info + 'Date Posted: ' + item.date + '\n';
        info = info + "Org Post: <a href='" + item.url + "' target='_blank'>" + item.url + "</a>\n";
		info = info + "*Note: Please check that the post is still listed on CraigsList.org before contacting the seller.";

        
		
		
		box.createChild({
			tag:'div',
			cls:'big infoArea',
			html:info,
			style:'top:' + (elementHeight + 10) + 'px;'
				+ 'height:' + infoSize + 'px;',
		});
    },
	
	displayAllText: function() {
        var textArea = this.textArea;
        this.textAreaHeight = this.textArea.dom.offsetHeight;
		textArea.setStyle('overflow','auto');
        textArea.setStyle('max-height',(this.textAreaHeight + this.offset)+'px');
        textArea.setStyle('height',(this.textAreaHeight + this.offset)+'px');
        textArea.setStyle('top',(this.textArea.dom.offsetTop - this.offset)+'px');
        textArea.setStyle('z-index','13');
        if (this.imageExist==1) {
            this.divider.setStyle('opacity','0');
        }
		this.readMoreButton.dom.textContent = 'Read less <<';
		this.readMoreButton.removeAllListeners();
		this.readMoreButton.on('click',
		this.closeAllText.createDelegate(this));
	},
	
	closeAllText: function() {
		this.textArea.setStyle('overflow','hidden');
        this.textArea.setStyle('max-height',(this.textAreaHeight)+'px');
        this.textArea.setStyle('top',(this.textArea.dom.offsetTop + this.offset)+'px');
		if (this.imageExist==1) {
            this.divider.setStyle('opacity','1');
        }
        this.readMoreButton.dom.textContent = 'Read more >>';
		this.readMoreButton.removeAllListeners();
		this.readMoreButton.on('click',
		this.displayAllText.createDelegate(this));
	},
	
    loadNextImages: function(index) {
        var item = this.item;
        var config = this.config;
        var shownImages = this.shownImages;
        //checks
        if (index<0) {
            //console.log("No previous images");
			this.backArrow.removeAllListeners();
            return;
        }
        else if (index >= (item.images.length-5)) {
            //console.log("No more images");
			this.forwardArrow.removeAllListeners();
            return;
        }
		else {
            for (var i=0; i<5; i++) {
                shownImages[i].setStyle('opacity','0');
                shownImages[i].removeAllListeners();
			}
			for (var i=0; i<5; i++) {
				shownImages[i].dom.src = item.images[index+i+1];
                shownImages[i].on('click',
                this.loadImage.createDelegate(this, [shownImages[i]], 0));
                shownImages[i].setStyle('opacity','1');
			}
			this.backArrow.removeAllListeners();
			this.forwardArrow.removeAllListeners();
			this.imageLoadIndex = index;
			this.backArrow.on('click',
			this.loadNextImages.createDelegate(this, [this.imageLoadIndex-1],0));
			this.forwardArrow.on('click',
			this.loadNextImages.createDelegate(this, [this.imageLoadIndex+1],0));
		}
		if (index-1<0) {
			this.backArrow.setStyle('opacity','.5');
		}
		else {
			this.backArrow.setStyle('opacity','1');
		}
		if (index+1 >= (item.images.length-5)) {
			this.forwardArrow.setStyle('opacity','.5');
		}
		else {
			this.forwardArrow.setStyle('opacity','1');
		}
		
    },
    
    displayImage: function(imageBox) {
        var mainImage = this.mainImage;
        mainImage.dom.src = (imageBox.dom.src);
        mainImage.removeAllListeners();
        mainImage.on('click',
        this.loadImage.createDelegate(this, [mainImage], 0));
    },
    
    loadImage: function(imageBox) {
        //console.log("Opening image");
        if (this.bigPic!=null) {
            return;
        }
        var config = this.config;
        this.bigPic = this.config.canvas.createChild({
            tag:'div',
            cls:'big fullImageArea click',
            style:'height:' + config.resolution.height + 'px;'
                + 'width:' + config.resolution.width + 'px;',
        });
        this.bigPic.createChild({
            tag:'img',
            cls:'big fullImage',
            style:'max-height:' + config.resolution.height + 'px;'
                + 'max-width:' + config.resolution.width + 'px;',
            src:imageBox.dom.src,
        });
        this.bigPic.on('click',this.closeImage.createDelegate(this));
    },
    
    closeImage: function() {
        //console.log("Closing image");
        this.bigPic.remove();
        this.bigPic = null;
    },
    
	animate: function() {
		var box = this.placeholder;
		var config = this.config;
        this.time = 750; //milliseconds
        
        heightChange = (31/30)*config.bigBoxSize.height/config.smallBoxSize.height;
        widthChange = (31/30)*config.bigBoxSize.width/config.smallBoxSize.width;
        
        box.setStyle('-webkit-transform-origin','70% 0%');
		box.setStyle('-webkit-transform','rotateY(180deg) scaleX('+widthChange+') scaleY('+heightChange+')');
		box.setStyle('-webkit-transform-style','preserve-3d');
		box.setStyle('-webkit-transition','all 0' + (this.time/1000) +'s ease');
		box.setStyle('z-index','13');
        
        setTimeout(function() {box.remove();},this.time);
	},
    
    listeners: {
        mouseover: function(button, event) {
        }
    },

});