
// 选项卡


	function fns(ele){
		let ones=ele.querySelectorAll('.wenzi1');
		let bbs=ele.querySelectorAll('.btom');
		console.log(bbs);
		ones.forEach(function(val,index){
			val.onmouseover=function(){
				for(let i=0;i<ones.length;i++){
					ones[i].classList.remove('wenz1');
					bbs[i].style.display='none';
				}
				val.classList.add('wenz1');
				bbs[index].style.display='block';
			}

		});

	};

	let fams=document.querySelectorAll('.family');
	for(let i=0;i<fams.length;i++){
		fns(fams[i]);
	}

	// let twos=document.querySelectorAll('#two .family-wenzi .wenzi1');
	// let zns=document.querySelectorAll('#two .btom');
	// twos.forEach(function(val,index){
	// 	val.onmouseover=function(){
	// 		for(let i=0;i<twos.length;i++){
	// 			twos[i].classList.remove('wenz1');
	// 			zns[i].style.display='none';
	// 		}
	// 		val.classList.add('wenz1');
	// 		zns[index].style.display='block';
	// 	}

	// });



	// let threes=document.querySelectorAll('#three .family-wenzi .wenzi1');
	// let btomthree=document.querySelectorAll('#three .btom');
	// threes.forEach(function(val,index){
	// 	val.onmouseover=function(){
	// 		for(let i=0;i<threes.length;i++){
	// 			threes[i].classList.remove('wenz1');
	// 			btomthree[i].style.display='none';
	// 		}
	// 		val.classList.add('wenz1');
	// 		btomthree[index].style.display='block';
	// 	}

	// });



	// let fours=document.querySelectorAll('#four .family-wenzi .wenzi1');
	// let btomfour=document.querySelectorAll('#four .btom');
	// fours.forEach(function(val,index){
	// 	val.onmouseover=function(){
	// 		for(let i=0;i<fours.length;i++){
	// 			fours[i].classList.remove('wenz1');
	// 			btomfour[i].style.display='none';
	// 		}
	// 		val.classList.add('wenz1');
	// 		btomfour[index].style.display='block';
	// 	}

	// });

	// let fives=document.querySelectorAll('#five .family-wenzi .wenzi1');
	// let btomfive=document.querySelectorAll('#five .btom');
	// fives.forEach(function(val,index){
	// 	val.onmouseover=function(){
	// 		for(let i=0;i<fives.length;i++){
	// 			fives[i].classList.remove('wenz1');
	// 			btomfive[i].style.display='none';
	// 		}
	// 		val.classList.add('wenz1');
	// 		btomfive[index].style.display='block';
	// 	}

	// });









// 轮播图

let dians=document.querySelectorAll('.lunbodian li');
let lunbo=document.querySelectorAll('.bannerbox li');
let num=0;
dians.forEach(function(val,index){
	val.onclick=function(){
		for(let i=0;i<dians.length;i++){
			dians[i].classList.remove('active');
			lunbo[i].classList.remove('active');
		}
		val.classList.add('active');
		lunbo[index].classList.add('active');
		num=index;
	}
});


let st=setInterval(fn,1500);
function fn(moren='r'){
	if(moren==='r'){
		num++;
		if(num===dians.length){
			num=0;
		}
	}else if(moren==='l'){
		num--;
		if(num===-1){
			num=dians.length-1;
		}
	}
	
	for(let i=0;i<dians.length;i++){
			dians[i].classList.remove('active');
			lunbo[i].classList.remove('active');
		}
		dians[num].classList.add('active');
		lunbo[num].classList.add('active');
}


//鼠标移入时清除样式
let bannerobj=document.querySelector('.banner');
bannerobj.onmouseover=function(){
	clearInterval(st);
};

bannerobj.onmouseout=function(){
	st=setInterval(fn,1500);
}




// 轮播图左右箭头

let arrowleft=document.querySelector('.arrow-l');
let arrowright=document.querySelector('.arrow-r');
arrowleft.onclick=function(){
	fn('l')
};
arrowright.onclick=function(){
	fn();
}





// 小米明星单品
let lefts=document.querySelector('.danpin-top-right .pre');
let rights=document.querySelector('.danpin-top-right .next');
let goods=document.querySelector('.danpin-bottom .goods');
lefts.onclick=prefn;
function prefn(){
	lefts.classList.add('top-ico1');
	rights.classList.remove('top-ico1');
	goods.style.marginLeft='0';
	numb=1;
};
rights.onclick=nextfn;
function nextfn(){
	rights.classList.add('top-ico1');
	lefts.classList.remove('top-ico1');
	goods.style.marginLeft='-1245px';
	numb=0;
};

let numb=1;
let stop=setInterval(stopfn,2000);
function stopfn(){
	numb++;
	if(numb%2==0){
		nextfn();
		
	}else{
		prefn();
		
	}
};
let danpin=document.querySelector('.danpin');
danpin.onmouseover=function(){
	clearInterval(stop);
};
danpin.onmouseout=function(){
	stop=setInterval(stopfn,2000);
};



// 为你推荐
let before=document.querySelector('.tuijian .danpin-top-right .befor');
let after=document.querySelector('.tuijian .danpin-top-right .afte');
let content=document.querySelector('.tuijian .danpin-bottom .goods');

before.onclick=beforefn;
function beforefn(){
	before.classList.add('top-ico1');
	after.classList.remove('top-ico1');
	content.style.marginLeft='0';
};
after.onclick=afterfn;
function afterfn(){
	after.classList.add('top-ico1');
	before.classList.remove('top-ico1');
	content.style.marginLeft='-1245px';
};

let now=0;
let set=setInterval(setfn,2000);
function setfn(){
	now++;
	if(now%2==0){
		beforefn();
			
	}else{
		afterfn();
		
	}
};
let tuijian=document.querySelector('.tuijian');
tuijian.onmouseover=function(){
	clearInterval(set);
};
tuijian.onmouseout=function(){
	set=setInterval(setfn,2000);
}



// 内容
{	
	
	let page=document.querySelectorAll('.page');
	for(let i=0;i<page.length;i++){
		pagefn(page[i]);
	};

	function pagefn(r){
		let ditem=r.querySelectorAll('.page-dian li');
		let citem=r.querySelector('.page-warp');
		let pre=r.querySelector('.zk-l');
		let next=r.querySelector('.zk-r');
		let now=0;
		ditem.forEach(function(ele,index){
			ele.onclick=function(){
				for(let i=0;i<ditem.length;i++){
					ditem[i].classList.remove('item');
				}
				ele.classList.add('item');
				citem.style.marginLeft=-296*index+'px';
				now=index;
			}
		});
		
		// 把两边箭头封装成函数
		function arrow(moren='r'){
			if(moren==='r'){
				now++;
				if(now===ditem.length){
					now=ditem.length-1;
				}
			}else if(moren==='l'){
				now--;
				if(now===-1){
					now=0;
				}
			};
			for(let i=0;i<ditem.length;i++){
				ditem[i].classList.remove('item');
			}
			ditem[now].classList.add('item');
			citem.style.marginLeft=-296*now+'px';
		}

		// 调用两边箭头
		next.onclick=function(){
			arrow();
		}
		pre.onclick=function(){
			arrow('l');
		};

	}
}
