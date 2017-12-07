var nbr, btn, randval, valiny, dingana, max, test, test2 , nivGame, fanandramana, tmp, fanandramana0, fanandramana1, fanandramana2, fanandramana3, fanandramana4, dingana0, dingana1, dingana2, dingana3;


//programm Attmpt 

dingana0=document.getElementById('dingana0');
dingana1=document.getElementById('dingana1');
dingana2=document.getElementById('dingana2');
dingana3=document.getElementById('dingana3');

var tmp = fanandramana;
max=30;

function randomize(){
	return Math.floor(Math.random()*max+1);
}
	randval=randomize();
	//alert('sopapa = '+randval, 'test'); 

	nbr=document.getElementById('nbr');
	btn=document.getElementById('btn');
	valiny=document.getElementById('valiny');
	

	btn.onclick=function (){
					if (nbr.value.trim() !=''){

						test();

					}
					else{
								valiny.innerHTML='mahazo manoratra ra efa nisafidy dingana';
									}

							if (dingana1.checked){
							alert('dingana1 afahanao manandrana in° 10');
							fanandramana=10;
							dingana1.checked=true;
							dingana1.checked=false;
							dingana1.checked=false;
							dingana2.checked=false;
							dingana3.checked=false;
							dingana1.checked=false;} 

							if (dingana2.checked){
							alert('dingana2 fafahanao manandrana in° 5');
							fanandramana=5;
							dingana1.checked=false;
							dingana3.checked=false;
							dingana2.checked=true;
							dingana2.checked=false
							dingana2.checked=false}

							if (dingana3.checked){
							alert ('dingana3 afahanao manandrana in° 3');
							fanandramana=3;
							dingana1.checked=false;
							dingana2.checked=false;
							dingana3.checked=true;
							dingana3.checked=false;
							dingana3.checked=false;
							}
						  }		


					function test(){
						if (nbr.value>randval) {
						valiny.innerHTML +='<br>'+'- Mbola mahazo manandrana  in° '+fanandramana+' fa ny isa '+ nbr.value + ' dia ngeza loatra';fanandramana--;
						}
						else if (nbr.value<randval){
						valiny.innerHTML +='<br>'+'- Mbola mahazo manandrana in° '+fanandramana+' fa ny isa '+ nbr.value + ' dia kely loatra';fanandramana--;
						}
						else{
							   test2();
						}
					}

					function test2(){
						if(nbr.value=randval){
								valiny.innerHTML=valiny.innerHTML='azonao ny loka, arabaina!';
								Alert('marina dia marina tokoa ny '+randval); }
						else if (tmp==0){
								valiny.innerHTML='atreo aloha ny androany fa tapitra ny lalao';
								alert(randval+' no valiny marina fa tapitra ny fanandramana');
							}
						}