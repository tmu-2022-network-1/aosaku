const pageMostBottom = document.body.scrollHeight - window.innerHeight;
let scr=0;
let scrb=0;

window.addEventListener('scroll', function(){
	//連番雛形
	let walk=new Array();
	for(let i=0;i<17;i++){
		walk[i]=i;
		if(walk[i]==scr){
			this.document.getElementById(`a${i+1}`).style.opacity=1;
		}else this.document.getElementById(`a${i+1}`).style.opacity=0;
	}//

	let stair=new Array();
	for(let i=0;i<8;i++){
		stair[i]=i;
		if(stair[i]==scrb){
			this.document.getElementById(`b${i+1}`).style.opacity=1;
		}else this.document.getElementById(`b${i+1}`).style.opacity=0;
	}//

		scr=Math.trunc(window.scrollY%1700/100);
		scrb=Math.trunc(window.scrollY%800/100);
		//表示されるもの



		const scrollTop =document.documentElement.scrollTop;
		if (scrollTop >= pageMostBottom) {
			this.window.scrollTo(0,0);
		}
	});
