const pageMostBottom = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function(){
		let p=this.document.getElementById("one");
		let q=this.document.getElementById("two");
		const scr=Math.trunc(window.scrollY%200/100);
		console.log(scr);
		//表示されるもの

		if(scr==0){
			q.style.opacity=1;
		}else q.style.opacity=0;
		
		//

		const scrollTop =document.documentElement.scrollTop;
		if (scrollTop >= pageMostBottom) {
			this.window.scrollTo(0,0);
		}
	});


	
