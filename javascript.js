// JavaScript Document

function loaded(){

	document.getElementById("loading").style.width="0";
	document.getElementById("loading").style.height="0";

	
}
 
function mymusic(){
	
				var context = new AudioContext();
				document.querySelector("audio").play();
				document.getElementById("zero").style.width="0";
			

	}
		
	

var typed = new Typed(".type", {
  strings: ["hello Shivran Verma","This is for you","click any Butterfly"],
   typeSpeed:50,
   backSpeed:50,
   loop:true   
});