const pageMostBottom = document.body.scrollHeight - window.innerHeight;

//具体例

for(let j=0;j<32;j++){
	document.write(`<img src="images/flow/${('0000'+(j+200)).slice(-4)}.png" class ="imgk" id="o${j+1}">`);
	}

for(let j=0;j<8;j++){
	document.write(`<img src="images/bg/${('0000'+(j+1)).slice(-4)}.png" class ="imgf" id="j${j+1}">`);
}

for(let j=0;j<120;j++){
	document.write(`<img src="images/open/${('0000'+(j+1)).slice(-4)}.png" class ="imgd" id="d${j+1}">`);
}

for(let j=0;j<33;j++){
	document.write(`<img src="images/walk/${('0000'+(j+200)).slice(-4)}.png" class ="imgd" id="e${j+1}">`);
	
}

for(let j=0;j<76;j++){
	document.write(`<img src="images/end/${('0000'+(j+200)).slice(-4)}.png" class ="imgd" id="h${j+1}">`);
}

for(let j=0;j<60;j++){
	document.write(`<img src="images/gero/${('0000'+(j+1)).slice(-4)}.png" class ="imge" id="i${j+1}">`);
}

for(let j=0;j<18;j++){
document.write(`<img src="images/face/${('0000'+(j+1)).slice(-4)}.png" class ="imgg" id="k${j+1}">`);
document.write(`<img src="images/face/${('0000'+(j+1)).slice(-4)}.png" class ="imgh" id="l${j+1}">`);
}


for(let j=0;j<50;j++){
	document.write(`<img src="images/mi/${('0000'+(j+1)).slice(-4)}.png" class ="imgi" id="m${j+1}">`);
	}

for(let j=0;j<8;j++){
	document.write(`<img src="images/horse/${('0000'+(j+1)).slice(-4)}.png" class ="imgj" id="n${j+1}">`);
	}

window.addEventListener('scroll', function(){
	let sY=this.window.scrollY;
	console.log(this.window.scrollY);

	if(sY>10000&&sY<20000){
		this.document.getElementById("particles-js").style.opacity=1;
	}else this.document.getElementById("particles-js").style.opacity=0;

	if(sY>20000&&sY<30000){
		this.document.getElementById("particles-js2").style.opacity=1;
	}else this.document.getElementById("particles-js2").style.opacity=0;

	this.document.getElementById("ship").style.left=sY/2+"px";

	//連番雛形

	if(sY<3000){
	let scrd=Math.trunc(sY*4%12000/100);
	let open=new Array();

	for(let i=0;i<120;i++){
		open[i]=i;
		if(open[i]==scrd){
			this.document.getElementById(`d${i+1}`).style.opacity=1;
		}else this.document.getElementById(`d${i+1}`).style.opacity=0;
	}
} else{
	for(let i=0;i<120;i++){
		this.document.getElementById(`d${i+1}`).style.opacity=0;
	}
}

	if(sY>3000&&sY<pageMostBottom-7600/4){
	let scre=Math.trunc((sY-3000)*4%3300/100);
	let walk=new Array();

	for(let i=0;i<33;i++){
		walk[i]=i;
		if(walk[i]==scre){
			this.document.getElementById(`e${i+1}`).style.opacity=1;
		}else this.document.getElementById(`e${i+1}`).style.opacity=0;
	}
} else{
	for(let i=0;i<33;i++){
		this.document.getElementById(`e${i+1}`).style.opacity=0;
	}
}

	if(sY>pageMostBottom-7600/4){
		let scrh=Math.trunc((sY-(pageMostBottom-7600/4))*4%7600/100);
		let end=new Array();
	
		for(let i=0;i<76;i++){
			end[i]=i;
			if(end[i]==scrh){
				this.document.getElementById(`h${i+1}`).style.opacity=1;
			}else this.document.getElementById(`h${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<76;i++){
			this.document.getElementById(`h${i+1}`).style.opacity=0;
		}
	}

	if(sY>3000&&sY<pageMostBottom-7600/4){
		let scri=Math.trunc((sY-3000)*4%6000/100);
		let gero=new Array();
	
		for(let i=0;i<60;i++){
			this.document.getElementById(`i${i+1}`).style.top=sY/1.2+"px";
			gero[i]=i;
			if(gero[i]==scri){
				this.document.getElementById(`i${i+1}`).style.opacity=1;
			}else this.document.getElementById(`i${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<60;i++){
			this.document.getElementById(`i${i+1}`).style.opacity=0;
		}
	}

	if(sY>3000&&sY<pageMostBottom-7600/4){
		let scrj=Math.trunc((sY-3000)*1%800/100);
		let bg=new Array();
	
		for(let i=0;i<8;i++){
			this.document.getElementById(`j${i+1}`).style.top=sY/1.1+"px";
			bg[i]=i;
			if(bg[i]==scrj){
				this.document.getElementById(`j${i+1}`).style.opacity=1;
			}else this.document.getElementById(`j${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<8;i++){
			this.document.getElementById(`j${i+1}`).style.opacity=0;
		}
	}

	if(sY>3000&&sY<pageMostBottom-7600/4){
		let scrk=Math.trunc((sY-3000)*1%1800/100);
		let face=new Array();
	
		for(let i=0;i<18;i++){
			this.document.getElementById(`k${i+1}`).style.top=sY/1.1+"px";
			face[i]=i;
			if(face[i]==scrk){
				this.document.getElementById(`k${i+1}`).style.opacity=1;
			}else this.document.getElementById(`k${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<18;i++){
			this.document.getElementById(`k${i+1}`).style.opacity=0;
		}
	}

	if(sY>3000&&sY<pageMostBottom-7600/4){
		let scrk=Math.trunc((sY-3000)*1%1800/100);
		let face=new Array();
	
		for(let i=0;i<18;i++){
			this.document.getElementById(`l${i+1}`).style.top=sY/1.2+"px";
			face[i]=i;
			if(face[i]==scrk){
				this.document.getElementById(`l${i+1}`).style.opacity=1;
			}else this.document.getElementById(`l${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<18;i++){
			this.document.getElementById(`l${i+1}`).style.opacity=0;
		}
	}

	if(sY>3000&&sY<pageMostBottom-7600/4){
		let scrl=Math.trunc((sY-3000)*1%5000/100);
		let mi=new Array();
	
		for(let i=0;i<50;i++){
			this.document.getElementById(`m${i+1}`).style.top=sY/1.1+"px";
			mi[i]=i;
			if(mi[i]==scrl){
				this.document.getElementById(`m${i+1}`).style.opacity=1;
			}else this.document.getElementById(`m${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<50;i++){
			this.document.getElementById(`m${i+1}`).style.opacity=0;
		}
	}

	if(sY>3000&&sY<pageMostBottom-7600/4){
		let scrm=Math.trunc((sY-3000)*1%800/100);
		let horse=new Array();
	
		for(let i=0;i<8;i++){
			this.document.getElementById(`n${i+1}`).style.top=sY/1.1+"px";
			horse[i]=i;
			if(horse[i]==scrm){
				this.document.getElementById(`n${i+1}`).style.opacity=1;
			}else this.document.getElementById(`n${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<8;i++){
			this.document.getElementById(`n${i+1}`).style.opacity=0;
		}
	}

	if(sY>3000&&sY<pageMostBottom-7600/4){
		let scrn=Math.trunc((sY-3000)*1%3200/100);
		let flow=new Array();
	
		for(let i=0;i<32;i++){
			this.document.getElementById(`o${i+1}`).style.top=sY/1.1+"px";
			flow[i]=i;
			if(flow[i]==scrn){
				this.document.getElementById(`o${i+1}`).style.opacity=1;
			}else this.document.getElementById(`o${i+1}`).style.opacity=0;
		}
	} else{
		for(let i=0;i<32;i++){
			this.document.getElementById(`o${i+1}`).style.opacity=0;
		}
	}

		

		const scrollTop =document.documentElement.scrollTop;
		if (scrollTop >= pageMostBottom) {
			this.window.scrollTo(0,0);
		}
	});


	