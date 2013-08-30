function doSearch ( s ) {
openDbRelativeURL("All?SearchView&Query=" + s.value);
}

function doSearch ( s ) {
var regExp1 = /\bfield\b/;
var regExp2 = /[(,),<,>,\[,\]]/;
var str = s.value; if ( str == "" ){ 
alert("Please be sure to enter something to search for.");
s.focus();
} else { 
if ( typeof regExp1.source != 'undefined' ) //supports regular expression testing 
if ( regExp1.test( str ) || regExp2.test( str ) ){
var alrt = "Please note that you can not include:"; 
alrt += "\n\nThe reserved word 'field'\nthe characters [, ], (, ), < or >";
alrt += "\n\nin your search query!\n\nIf you are confident that you know";
alrt += "\nwhat you are doing, then you can\nmanually produce the URL required."
s.focus();
return alert( alrt );
}
openDbRelativeURL("All?SearchView&Query=" + escape( str ) + "&start=1&count=10");
}
}

function openDbRelativeURL( url, target ){
//Check we have a target window;
target = (target == null ) ? window : target;
//Work out the path of the database;
path = location.pathname.split('.nsf')[0] + '.nsf/';
target.location.href = path + url;
}