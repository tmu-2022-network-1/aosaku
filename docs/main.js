const pageMostBottom = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function(){
		let p=this.document.getElementsByClassName("img")[0];
		const scr=Math.trunc(window.scrollY%500/100);
		console.log(scr);
		if(scr==0){
			p.style.opacity=0.1;
		}else p.style.opacity=1;

		const scrollTop =document.documentElement.scrollTop;
		if (scrollTop >= pageMostBottom) {
			this.window.scrollTo(0,0);
		}
	});


	
