Cs.Box = Ext.extend(Ext.util.Observable, {
    //values
    location:null,
    size:null,
    
    constructor: function(size) {
        this.size = size;
    },
    
    createBox: function(location){
        var canvas = Ext.get('canvas');
        
        var left = location.left;
        var top = location.top;
        
        var boxWidth = this.size.width;
        var boxHeight = this.size.height;
        
        var box = canvas.createChild({
            tag:'div',
            cls:'box',
            style:'width:' + boxWidth + 'px;'
                + 'height:' + boxHeight + 'px;'
                + 'top:' + top + 'px;'
                + 'left:' + left + 'px;'
                + 'position: absolute;'
                + 'display:block;'
        });
        return box;
    },
    
});