const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');
let ww=1500
let wh=750
mysize()
mx=ww/2
my=wh/2
let fps=100

//全域變數 
let rr
let right_rr
let left_rr
let line
let passage_=[]
let drop_speed=0
let bfs=0
let tt=0
let all_rr=[]
let all_time=[]
let mode=0
let choose=0
let current_score=0
let allpoint=new Group()
let audio
let istimeback=0
let right_arrow
let left_arrow
let up_arrow
let down_arrow
let ibtn
function init(){
	//event






	right_arrow=new arrow({position:{x:ww-100,y:wh/2}})
	left_arrow=new arrow({position:{x:100,y:wh/2},scale:{x:-1,y:1}})
	up_arrow=new arrow({position:{x:250,y:30},rotation:-Math.PI/2,scale:{x:0.5,y:0.5}})
	down_arrow=new arrow({position:{x:250,y:70},rotation:Math.PI/2,scale:{x:0.5,y:0.5}})
	ibtn=new Circle({position:{x:40,y:680},color:{fill:'black',stroke:'rgb(214,255,214)'},stroke:true})
	information=new information({position:{x:200,y:600},visible:false})
	information_=new information_({position:{x:125,y:600},visible:false,scale:{x:-1,y:1}})


	line=new judge_line({position:{x:ww/2,y:600}})
	line.scale.x=2
	for(let i=0;i<5;i++){
		let pl=new passage({position:{x:550+100*i,y:500}})
		pl.scale.y=3
		pl.visible=false
		passage_.push(pl)

	}
	
	window.addEventListener('keydown',keydown)
	window.addEventListener('keyup',keyup)
	window.addEventListener('click',click)
	window.addEventListener('resize',mysize)
}
function update(){

	if(mode!==0){
		if(tt>=long_array[mode-1]){
		//如果當前時間>=目前歌曲的時長
			if(current_score>score_array[mode-1]){
				score_array[mode-1]=current_score
			}
			//如果目前分數比最高分數高就將最高分數設為當前分數
			mode=0
			//將模式設為零(選擇歌曲的畫面)
			current_score=0
			//分數歸零
			audio.pause()
			audio.currentTime=0
			//將音樂暫停並將時間歸零(下次撥放時將從頭撥放)
		}
		
		tt+=10



		if(tt!==istimeback){
			istimeon()
			if(tt>0&&tt%1000===0&&audio.ended===false){



				if(Math.abs(Math.floor(audio.currentTime*1000)-tt)>10){
				//如果歌曲時間與遊戲時間的偏差大於10毫秒
					let kk=audio.currentTime
					if(Math.floor(kk*100)*10-tt>0){
					//如果歌曲比較快
						for(let y=0;y<(Math.floor(kk*100)*10-tt)/10;y++){
							tt+=10//將遊戲當前時間調快
							istimeon()//檢測在跳過的時間中是否有要加入方塊
						}
						
					
					}else{
					//否則(遊戲比歌曲快)	
						tt+=Math.floor(kk*100)*10-tt//將遊戲時間倒退
						istimeback=tt+10//標記時間點(以免同一個時間點執行兩次)
					}
					
					
					
				}
			}
		}
		
		
		
		
			
		if((tt+bfs)-(tt+bfs)%10===0){
			audio = new Audio(src_array[mode-1])
			audio.play()
		}
		
		

		for(let i=0;i<all_rr.length;i++){
			for(let y=0;y<all_rr[i].length;y++){
				all_rr[i][y].position.y+=drop_speed
				if(y===0){
					if(all_rr[i][0].position.y-600>6*drop_speed){
						let pp=new point({write:'MISS',color:'rgb(255,200,200)',font:20})
							pp.position.y=700
							if(i<4){
								pp.position.x=550+100*i
								if(i>1){
									pp.position.x+=100
								}
							}else{
								pp.position.x=750
							}
						allpoint.add(pp)
						all_rr[i].splice(0,1)
					}
				}
				
			}
			
		}
		for(let i=0;i<allpoint.members.length;i++){
			allpoint.members[i].through+=0.02
			if(allpoint.members[i].through>0.9){
				allpoint.clear(0)
			}
		}
		
	}
	
	
	

}
function draw(){
	background('black')
	if(mode===0){
		ibtn.draw()
		ctx.font='40px New Century Schoolbook'
		ctx.fillStyle='white'
		ctx.fillText('i',33,693)
		information.draw()
		information_.draw()
		ctx.fillStyle='yellow'
		ctx.font='30px New Century Schoolbook'
		if(information_.visible){
			ctx.fillText('Q',13,520)
			ctx.fillText('E',63,550)
			ctx.fillText('F',115,580)
			ctx.fillText('J',115,667)
			ctx.fillText('I',168,642)
			ctx.fillText('P',215,670)
		}
		
		ctx.fillStyle='white'

		up_arrow.draw()
		down_arrow.draw()
		right_arrow.draw()
		left_arrow.draw()
		ctx.font='80px Verdana'
		ctx.fillText(name_array[choose],ww/2-100,wh/2-50)
		ctx.font='40px Verdana'
		ctx.fillText('Long '+Math.floor(long_array[choose]/1000/60)+'m'+Math.floor(long_array[choose]/1000%60)+'s',ww/2-100,wh/2)
		ctx.fillText('Speed '+speed_array[choose],ww/2-100,wh/2+40)
		ctx.fillText('Score '+score_array[choose],ww/2-100,wh/2+80)
		ctx.fillText('BFS '+bfs,20,65)
		let nn=0
		for(let i=0;i<time_array[choose].length;i++){
			nn+=time_array[choose][i].length
		}
		ctx.fillText(Math.floor(score_array[choose]/nn/2*100)+'%',ww/2-100,wh/2+120)

		ctx.fillText('ENTER TO START',ww/2-160,wh-50)
		ctx.fillText(choose+1,ww-50,wh-50)
	}
	if(mode!==0){
		ctx.font='40px Verdana'
		ctx.fillStyle='white'
		ctx.fillText('highest '+score_array[mode-1],50,50)
		ctx.fillText('score '+current_score,50,90)
		ctx.beginPath()
		for(let i=500;i<500+100*6;i+=100){
			ctx.moveTo(i,0)
			ctx.lineTo(i,wh)
			ctx.strokeStyle='white'
			ctx.lineWidth=2
			ctx.stroke()
		}
		for(let i=0;i<5;i++){
			passage_[i].draw()
		}
		for(let i=0;i<all_rr.length;i++){
			for(let y=0;y<all_rr[i].length;y++){
				all_rr[i][y].draw()
			}
		}
		line.draw()
		allpoint.draw()
	}
	

	
	requestAnimationFrame(draw)
}
setInterval(update,1000/fps)
requestAnimationFrame(draw)

function istimeon(){
	for(let i=0;i<6;i++){
	//對每個軌道執行(左右邊各兩條再加上中間的向左符號以及向右符號)

		let new_rr

		if(i<4){
		//如果是執行左邊兩條或右邊兩條(正常方塊)

			if(tt===all_time[i][0]-700/drop_speed*10){
			//如果當前時間=此軌道應最早落下的方塊落至判定線的時間(此軌道方塊的時間陣列的第一項)-方塊落下所需花費的時間
				
				new_rr=new drop_rect({position:{x:550+100*i,y:-100},scale:{x:1,y:0.1}})
				if(i>1){
					new_rr.position.x+=100
				}
				all_rr[i].push(new_rr)
				//在Y座標-100,此軌道X座標的位置加入方塊

				all_time[i].splice(0,1)
				//將此軌道方塊的時間陣列的第一項刪除(已經加入)
			}
		}else{

			if(tt===all_time[i][0]-700/drop_speed*10){
				if(i===4){
					new_rr=new left_rect({position:{x:750,y:-100},scale:{x:1,y:1}})
				}else{
					new_rr=new right_rect({position:{x:750,y:-100},scale:{x:-1,y:1}})
				}
				all_rr[i].push(new_rr)
				all_time[i].splice(0,1)
			}
		}
		
	}
}
function isget (i){
	if(mode!==0&&all_rr[i].length>0){
		if(Math.abs(all_rr[i][0].position.y-600)<=3*drop_speed){
			current_score+=2
			all_rr[i].splice(0,1)
			let pp=new point({write:'+2',color:'rgb(200,255,200)'})
			pp.position.y=700
			if(i<4){
				pp.position.x=550+100*i
				if(i>1){
					pp.position.x+=100
				}
			}else{
				pp.position.x=750
			}
			allpoint.add(pp)
		}else if(Math.abs(all_rr[i][0].position.y-600)<=6*drop_speed){
			current_score+=1
			all_rr[i].splice(0,1)
			let pp=new point({write:'+1',color:'white'})
			pp.position.y=700
			if(i<4){
				pp.position.x=550+100*i
				if(i>1){
					pp.position.x+=100
				}
			}else{
				pp.position.x=750
			}
			allpoint.add(pp)
		}else{

		}
	}
}

//event function
function keydown(e){
	let keyid=e.code
	if(keyid==='KeyQ'){
		passage_[0].visible=true
		isget(0)
		
	}
	if(keyid==='KeyE'){
		passage_[1].visible=true
		isget(1)

	}
	if(keyid==='KeyI'){
		passage_[3].visible=true
		isget(2)

	}
	if(keyid==='KeyP'){
		passage_[4].visible=true
		isget(3)

	}
	if(keyid==='KeyJ'){
		passage_[2].visible=true
		isget(4)		
	}
	if(keyid==='KeyF'){
		passage_[2].visible=true
		isget(5)
	}
	if(keyid==='KeyI'&&mode===0){
		if(information_.visible){
			information_.visible=false
			information.visible=false

		}else{
			information_.visible=true
			information.visible=true
		}
		
	}
	if(keyid==='ArrowRight'){
		if(mode===0){
			choose+=1
			if(choose>=name_array.length){
				choose=0
			}
		}
	}
	if(keyid==='ArrowLeft'){
		if(mode===0){
			choose-=1
			if(choose<0){
				choose=name_array.length-1
			}
		}
	}
	if(keyid==='ArrowUp'){
		if(mode===0){
			bfs+=10
		}
	}
	if(keyid==='ArrowDown'){
		if(mode===0){
			bfs-=10
		}
	}
	if(keyid==='Enter'){
		if(mode===0){			
			all_time=[[],[],[],[],[],[]]
			for(let i=0;i<time_array[choose].length;i++){
				for(let y=0;y<time_array[choose][i].length;y++){
					all_time[i].push(time_array[choose][i][y])
				}

			}
			drop_speed=speed_array[choose]
			tt=-700/drop_speed*10-bfs
			all_rr=[[],[],[],[],[],[]]
			
			mode=choose+1
			

		}
	}
	if(keyid==='Backspace'){
		if(mode!==0){
			if(current_score>score_array[mode-1]){
				score_array[mode-1]=current_score
			}
			mode=0
			current_score=0
			audio.pause()
			audio.currentTime=0
		}
	}
	if(keyid==='Space'){
		console.log(tt)
	}
}
function keyup(e){
	let keyid=e.code
	if(keyid==='KeyQ'){
		passage_[0].visible=false
	}
	if(keyid==='KeyE'){
		passage_[1].visible=false
	}
	if(keyid==='KeyI'){
		passage_[3].visible=false
	}
	if(keyid==='KeyP'){
		passage_[4].visible=false
	}
	if(keyid==='KeyJ'){
		passage_[2].visible=false
	}
	if(keyid==='KeyF'){
		passage_[2].visible=false
	}
}
function click(e){
	if(right_arrow.ispointinpath(e.pageX,e.pageY)){
		if(mode===0){
			choose+=1
			if(choose>=name_array.length){
				choose=0
			}
		}
	}
	if(left_arrow.ispointinpath(e.pageX,e.pageY)){
		if(mode===0){
			choose-=1
			if(choose<0){
				choose=name_array.length-1
			}
		}
	}
	if(ibtn.ispointinpath(e.pageX,e.pageY)&&information.visible===false){
		information_.visible=true
		information.visible=true
	}else if(information.ispointinpath(e.pageX,e.pageY)&&information.visible){
		information_.visible=false
		information.visible=false
	}
	if(e.pageX>ww/2-200&&e.pageX<ww/2+2000&&e.pageY>wh-150){
		if(mode===0){			
			all_time=[[],[],[],[],[],[]]
			for(let i=0;i<time_array[choose].length;i++){
				for(let y=0;y<time_array[choose][i].length;y++){
					all_time[i].push(time_array[choose][i][y])
				}

			}
			drop_speed=speed_array[choose]
			tt=-700/drop_speed*10-bfs
			all_rr=[[],[],[],[],[],[]]
			
			mode=choose+1
			

		}

	}
}
function mysize(){
	if(window.innerHeight/window.innerWidth>=wh/ww){
		canvas.style.width=window.innerWidth+'px'
		canvas.style.height=wh*window.innerWidth/ww+'px'
		canvas.width=window.innerWidth
		canvas.height=wh*window.innerWidth/ww
	}else{
		canvas.style.width=ww*window.innerHeight/wh+'px'
		canvas.style.height=window.innerHeight+'px'
		canvas.width=ww*window.innerHeight/wh
		canvas.height=window.innerHeight
	}
	ctx.restore()
	ctx.save()
	if(window.innerHeight/window.innerWidth>=wh/ww){
		ctx.scale(window.innerWidth/ww,window.innerWidth/ww)
	}else{
		ctx.scale(window.innerHeight/wh,window.innerHeight/wh)
	}
	
}
init()


















