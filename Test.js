(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Pond_Painting_Art_Night_461943_1920x1080 = function() {
	this.initialize(img.Pond_Painting_Art_Night_461943_1920x1080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.bコピー = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjSECIAOoDIBuAAIgJDcIAhg/IERBwIgtBdIiFhBQhDgcg9gXIgFENg");
	this.shape.setTransform(61.6,-202.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Aj5C5IBlhpIBehkQBBhGAshCIkRAoIgKh1IDPgTIBRgHQAxgCAeAMQA2AVAAAvQAAAcgQAeQgMAYghAnIhGBWIC8CYIhcBQIisiRIiPCTg");
	this.shape_1.setTransform(-0.2,-202.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ah9DhIB1jsIj9AbIAChvIIKgHIAABSIjhAFIA6AUIhrECgAjWj3IGwgPIAABXQh8AFhkAHQhIAEiIAPg");
	this.shape_2.setTransform(-61,-202);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("EgxXAJ2IAAzrMBivAAAIAATrg");
	this.shape_3.setTransform(0,-197.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AjSECIAOoDIBuAAIgJDcIAhg/IERBwIgtBdIiFhBQhDgcg9gXIgFENg");
	this.shape_4.setTransform(61.6,-202.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("Aj5C5IBlhpIBehkQBBhGAshCIkRAoIgKh1IDPgTIBRgHQAxgCAeAMQA2AVAAAvQAAAcgQAeQgMAYghAnIhGBWIC8CYIhcBQIisiRIiPCTg");
	this.shape_5.setTransform(-0.2,-202.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("Ah9DhIB1jsIj9AbIAChvIIKgHIAABSIjhAFIA6AUIhrECgAjWj3IGwgPIAABXQh8AFhkAHQhIAEiIAPg");
	this.shape_6.setTransform(-61,-202);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("EgxXAJ2IAAzrMBivAAAIAATrg");
	this.shape_7.setTransform(0,-197.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("EgxXAJ2IAAzrMBivAAAIAATrg");
	this.shape_8.setTransform(0,-197.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-260.9,632,126);


// stage content:
(lib.名称未設定2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* クリックして Web ページに移動
		特定のシンボルインスタンス上でクリックすると、新しいブラウザーウィンドウに URL がロードされます。
		
		手順 :
		1. http://www.adobe.com を目的の URL アドレスに置き換えます。
		   二重引用符 ("") は付けたままにします。
		*/
		
		this.b1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("index.html", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.b1 = new lib.bコピー();
	this.b1.name = "b1";
	this.b1.parent = this;
	this.b1.setTransform(960.1,738);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.bコピー(), 3);

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(1));

	// レイヤー_2
	this.instance = new lib.Pond_Painting_Art_Night_461943_1920x1080();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);
// library properties:
lib.properties = {
	id: 'CDF5A3430BF62947AF50D0E518E281B6',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Pond_Painting_Art_Night_461943_1920x1080.jpg", id:"Pond_Painting_Art_Night_461943_1920x1080"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CDF5A3430BF62947AF50D0E518E281B6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;