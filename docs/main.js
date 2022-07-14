const pageMostBottom = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function(){
		let p1=this.document.getElementById("a1");
		let p2=this.document.getElementById("a2");
		let p3=this.document.getElementById("a3");
		let p4=this.document.getElementById("a4");
		let p5=this.document.getElementById("a5");
		let p6=this.document.getElementById("a6");
		let p7=this.document.getElementById("a7");
		let p8=this.document.getElementById("a8");
		let p9=this.document.getElementById("a9");
		let p10=this.document.getElementById("a10");
		let p11=this.document.getElementById("a11");
		let p12=this.document.getElementById("a12");
		let p13=this.document.getElementById("a13");
		let p14=this.document.getElementById("a14");
		let p15=this.document.getElementById("a15");
		let p16=this.document.getElementById("a16");
		let p17=this.document.getElementById("a17");

		let q1=this.document.getElementById("b1");
		let q2=this.document.getElementById("b2");
		let q3=this.document.getElementById("b3");
		let q4=this.document.getElementById("b4");
		let q5=this.document.getElementById("b5");
		let q6=this.document.getElementById("b6");
		let q7=this.document.getElementById("b7");
		let q8=this.document.getElementById("b8");
		
		const scr=Math.trunc(window.scrollY%1700/100);
		const scrb=Math.trunc(window.scrollY%800/100);
		console.log(scr);
		//表示されるもの

		if(scrb==0){
			q1.style.opacity=1;
		}else q1.style.opacity=0;
		if(scrb==1){
			q2.style.opacity=1;
		}else q2.style.opacity=0;
		if(scrb==2){
			q3.style.opacity=1;
		}else q3.style.opacity=0;
		if(scrb==3){
			q4.style.opacity=1;
		}else q4.style.opacity=0;
		if(scrb==4){
			q5.style.opacity=1;
		}else q5.style.opacity=0;
		if(scrb==5){
			q6.style.opacity=1;
		}else q6.style.opacity=0;
		if(scrb==6){
			q7.style.opacity=1;
		}else q7.style.opacity=0;
		if(scrb==7){
			q8.style.opacity=1;
		}else q8.style.opacity=0;

		if(scr==0){
			p1.style.opacity=1;
		}else p1.style.opacity=0;
		if(scr==1){
			p2.style.opacity=1;
		}else p2.style.opacity=0;
		if(scr==2){
			p3.style.opacity=1;
		}else p3.style.opacity=0;
		if(scr==3){
			p4.style.opacity=1;
		}else p4.style.opacity=0;
		if(scr==4){
			p5.style.opacity=1;
		}else p5.style.opacity=0;
		if(scr==5){
			p6.style.opacity=1;
		}else p6.style.opacity=0;
		if(scr==6){
			p7.style.opacity=1;
		}else p7.style.opacity=0;
		if(scr==7){
			p8.style.opacity=1;
		}else p8.style.opacity=0;
		if(scr==8){
			p9.style.opacity=1;
		}else p9.style.opacity=0;
		if(scr==9){
			p10.style.opacity=1;
		}else p10.style.opacity=0;
		if(scr==10){
			p11.style.opacity=1;
		}else p11.style.opacity=0;
		if(scr==11){
			p12.style.opacity=1;
		}else p12.style.opacity=0;
		if(scr==12){
			p13.style.opacity=1;
		}else p13.style.opacity=0;
		if(scr==13){
			p14.style.opacity=1;
		}else p14.style.opacity=0;
		if(scr==14){
			p15.style.opacity=1;
		}else p15.style.opacity=0;
		if(scr==15){
			p16.style.opacity=1;
		}else p16.style.opacity=0;
		if(scr==16){
			p17.style.opacity=1;
		}else p17.style.opacity=0;

		
		//

		const scrollTop =document.documentElement.scrollTop;
		if (scrollTop >= pageMostBottom) {
			this.window.scrollTo(0,0);
		}
	});