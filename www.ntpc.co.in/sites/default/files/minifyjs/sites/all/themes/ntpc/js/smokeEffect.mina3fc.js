;var SmokeEffect={imgLocation:"",smokeWidth:80,smokeHeight:45,smokePos:[],makeEffect:function(e,t,o){SmokeEffect.smokePos[e]=[];SmokeEffect.smokePos[e]["x"]=t;SmokeEffect.smokePos[e]["y"]=o;var m=(Math.floor(Math.random()*3001));setTimeout("SmokeEffect.animate('"+e+"')",m)},animate:function(t){var e=document.createElement("IMG");$(e).attr("src",SmokeEffect.imgLocation);$(e).attr("alt","puff");$(e).attr("class","puff");var m="puff"+Math.floor(Math.random()*1001);$(e).attr("id",m);$(document.body).append($(e));var o=$("#"+t).offset();$(e).css({top:(o["top"]+SmokeEffect.smokePos[t]["y"])+"px",left:(o["left"]+SmokeEffect.smokePos[t]["x"])+"px",zIndex:38,opacity:0.4});$(e).animate({width:SmokeEffect.smokeWidth+"px",height:SmokeEffect.smokeHeight+"px",marginLeft:"-"+(SmokeEffect.smokeWidth/2)+"px",marginTop:"-"+(SmokeEffect.smokeHeight*1.5)+"px",opacity:0.9},{duration:1500}).animate({marginTop:"-"+(SmokeEffect.smokeHeight*3.5)+"px",opacity:0.0},{duration:2000});var f=1000+(Math.floor(Math.random()*4501));setTimeout("SmokeEffect.animate('"+t+"')",f);setTimeout("$('#"+m+"').remove()",2400)}};