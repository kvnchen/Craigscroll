Cs.SmallItemBox = Ext.extend(Cs.Box, {
    //external values
    item:null,
    config:null,
    box:null,
	location:null,

    //internal values
    imageExist:0,
    
    
    //constructor
    constructor: function(item,config) {
        this.item=item;
        this.config=config;
        if (item.images!=null) {
            this.imageExist=1;
        }
    },
    
    //functions
    display: function(location) {
		this.location = location;
        var config = this.config;
        var price = "$" + this.item.price;
        var bodyText = this.item.bodyText;
        var box = new Cs.Box(config.smallBoxSize);
        box = box.createBox(location);
        this.item.smallItemBox = box;
		box.setStyle('z-index','-1');
        box.addClass('small click containerSmall');
        
        //header
        var boxHeader = box.createChild({
            tag:'div',
            cls:'small header',
            html:price + ' ' + this.item.title,
        });

        if (this.imageExist==1) {
            var boxBody = box.createChild({
                tag:'div',
                cls:'small imageContainer',
            });
            
            boxBody.createChild({
                tag:'img',
                cls:'small bodyImage',
                src:this.item.images[0],
            });
        }
        else {
            var boxBody = box.createChild({
                tag:'div',
                cls:'small bodyText',
                html:bodyText,
            });
        }
		
    },
	
	
    
    
});