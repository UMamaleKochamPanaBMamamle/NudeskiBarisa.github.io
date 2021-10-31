var r = document.querySelector(':root');
function resizevideo(){
  var height = window.innerWidth * 9 / 16;
  if(height >= window.innerHeight){                                //16:9
    var width = window.innerHeight* 16 / 9;
    if(window.innerWidth - button.offsetWidth < width){
      r.style.setProperty('--width', width-button.offsetWidth+"px");
      r.style.setProperty('--height', (width-button.offsetWidth)*9/16+"px");
      r.style.setProperty('--LposX', (window.innerWidth - width)/4+"px");
      r.style.setProperty('--VposX', "0");
      r.style.setProperty('--VposY', window.innerHeight/2-(width-button.offsetWidth)*9/16/2+"px");
    } else {
      r.style.setProperty('--height', window.innerHeight+"px");
      r.style.setProperty('--width', width+"px");
      r.style.setProperty('--LposX', (window.innerWidth - width-button.offsetWidth)/4+"px");
      r.style.setProperty('--VposX', "0");
      r.style.setProperty('--VposY', "0");
    }
    r.style.setProperty('--LposY', window.innerHeight/2-button.offsetHeight/2+"px");
  } else {                                                        //9:16
    if(window.innerHeight - button.offsetHeight < height){
      r.style.setProperty('--height', height-button.offsetHeight+"px");
      r.style.setProperty('--width', (height-button.offsetHeight)*16/9+"px");
      r.style.setProperty('--LposY', (window.innerHeight - height)/4+"px");
      r.style.setProperty('--VposX', window.innerWidth/2-(height-button.offsetHeight)*16/9/2+"px");
      r.style.setProperty('--VposY', "0");
    } else {
      r.style.setProperty('--width', window.innerWidth+"px");
      r.style.setProperty('--height', height+"px");
      r.style.setProperty('--LposY', (window.innerHeight - height-button.offsetHeight)/4+"px");
      r.style.setProperty('--VposX', "0");
      r.style.setProperty('--VposY', "0");
    }
    r.style.setProperty('--LposX', window.innerWidth/2-button.offsetWidth/2+"px");
  }
}
var button = document.getElementById('videolist');
resizevideo();
window.addEventListener('resize', function(event){
  resizevideo();
});
