class information{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:1.5308084989341916e-16,y:2.5},topleft:{x:-215,y:-120},rightbottom:{x:215,y:125},stroke:{is:true,color:'rgb(0,0,0)',width:2},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0},{type:'line',p:{x:0,y:0},pointarray:[[0,-110],[0,110]],stroke:{is:true,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:50,y:0},pointarray:[[0,-110],[0,110]],stroke:{is:true,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:50,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-50,y:0},pointarray:[[0,-110],[0,110]],stroke:{is:true,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:-50,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-100,y:6.123233995736766e-15},pointarray:[[-50,-110],[-50,110]],stroke:{is:true,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:-50,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-150,y:1.2246467991473532e-14},pointarray:[[-100,-110],[-100,110]],stroke:{is:true,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:-50,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-200,y:1.8369701987210297e-14},pointarray:[[-150,-110],[-150,110]],stroke:{is:true,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:-50,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'rect',p:{x:-174.99999999999997,y:-60.00000000000004},topleft:{x:-200,y:-70},rightbottom:{x:-150,y:-50},stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0},{type:'rect',p:{x:-124.99999999999997,y:-35.00000000000004},topleft:{x:-150,y:-50},rightbottom:{x:-200,y:-70},stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:50,y:25},deg:0,scale:{x:1,y:1},through:0},{type:'rect',p:{x:-24.999999999999986,y:59.99999999999999},topleft:{x:-150,y:-45},rightbottom:{x:-100,y:-25},stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:100,y:95},deg:0,scale:{x:1,y:1},through:0},{type:'rect',p:{x:25.000000000000004,y:85},topleft:{x:-50,y:50},rightbottom:{x:0,y:70},stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:50,y:25},deg:0,scale:{x:1,y:1},through:0}]
			

		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class information_{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:0,y:0},topleft:{x:-25,y:-10},rightbottom:{x:25,y:10},stroke:{is:false,color:'rgb(0,0,0)',width:2},fill:{is:true,color:'rgb(24,24,251)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0},{type:'line',p:{x:-5,y:0},pointarray:[[-10,-15],[0,-15],[15,0],[0,15],[-10,15],[5,0]],stroke:{is:true,color:'rgb(255,255,251)',width:2},fill:{is:true,color:'rgb(255,255,251)'},translate:{x:-5,y:0},deg:0,scale:{x:1.4000000000000004,y:1},through:0,iscolse:false},{type:'rect',p:{x:0,y:85},topleft:{x:25,y:10},rightbottom:{x:-25,y:-10},stroke:{is:false,color:'rgb(254,48,51)',width:2},fill:{is:true,color:'rgb(254,48,51)'},translate:{x:0,y:85},deg:0,scale:{x:1,y:1},through:0},{type:'line',p:{x:7.000000000000001,y:85.00000000000007},pointarray:[[-20,-15],[-5,-15],[15,0],[-5,15],[-20,15],[0,0]],stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:85},deg:-3.1415926535897825,scale:{x:1.2000000000000002,y:1},through:0,iscolse:false}]

		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}

class point{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			through:0,
			write:'',
			color:'white',
			font:20
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x-40,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				ctx.globalAlpha=1-this.through
				ctx.fillStyle=this.color
				ctx.font=this.font+'px Verdana'
				ctx.fillText(this.write,0,0)
				ctx.globalAlpha=1
			ctx.restore()
		}
	}
}
class drop_rect{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:0,y:0},topleft:{x:50,y:100},rightbottom:{x:-50,y:-100},stroke:{is:true,color:'rgb(189,224,255)',width:3},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0}],
			

		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class right_rect{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'line',p:{x:-6.666666666666667,y:8.164311994315688e-16},pointarray:[[-30,-30],[-10,-30],[30,0],[-10,30],[-30,30],[10,0]],stroke:{is:false,color:'rgb(35,65,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-23.333333333333332,y:2.8575091980104907e-15},pointarray:[[-30,-10],[-30,10],[-10,0]],stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'rect',p:{x:0,y:0},topleft:{x:-50,y:10},rightbottom:{x:50,y:-10},stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(66,59,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0},{type:'line',p:{x:-6.666666666666667,y:8.164311994315688e-16},pointarray:[[-30,-30],[-10,-30],[30,0],[-10,30],[-30,30],[10,0]],stroke:{is:false,color:'rgb(66,59,255)',width:2},fill:{is:true,color:'rgb(251,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-23.333333333333332,y:2.8575091980104907e-15},pointarray:[[-30,-10],[-30,10],[-10,0]],stroke:{is:false,color:'rgb(251,255,255)',width:2},fill:{is:true,color:'rgb(251,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false}],
			
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class left_rect{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:0,y:0},topleft:{x:-50,y:-10},rightbottom:{x:50,y:10},stroke:{is:false,color:'rgb(0,0,0)',width:2},fill:{is:true,color:'rgb(255,25,58)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0},{type:'line',p:{x:-6.666666666666667,y:8.164311994315688e-16},pointarray:[[-30,-30],[-10,-30],[30,0],[-10,30],[-30,30],[10,0]],stroke:{is:false,color:'rgb(255,25,58)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false},{type:'line',p:{x:-23.333333333333332,y:2.8575091980104907e-15},pointarray:[[-30,-10],[-30,10],[-10,0]],stroke:{is:false,color:'rgb(255,255,255)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false}],
			
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class judge_line{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'line',p:{x:0,y:0},pointarray:[[-500,0],[500,0]],stroke:{is:true,color:'rgb(172,235,105)',width:5},fill:{is:true,color:'rgb(0,0,0)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:30,iscolse:false}],

		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){

			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class passage{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'rect',p:{x:0,y:0},topleft:{x:50,y:250},rightbottom:{x:-50,y:-250},stroke:{is:false,color:'rgb(191,35,0)',width:2},fill:{is:true,color:'rgb(255,168,166)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:50}],
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
class arrow{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:[{type:'line',p:{x:-6.666666666666667,y:8.164311994315688e-16},pointarray:[[-20,-30],[20,0],[-20,30]],stroke:{is:false,color:'rgb(0,0,0)',width:2},fill:{is:true,color:'rgb(255,255,255)'},translate:{x:0,y:0},deg:0,scale:{x:1,y:1},through:0,iscolse:false}],
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}





















/*
//example
class test{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			visible:true,
			array:
		}
		this.group=[]

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				drawer(this.array)
			ctx.restore()
		}
	}
	ispointinpath(x,y){
		ctx.save()
		ctx.translate(this.position.x,this.position.y)
		ctx.rotate(this.rotation)
		ctx.scale(this.scale.x,this.scale.y)
		return ispointinarraypath(x,y,this.array)
	}
}
*/