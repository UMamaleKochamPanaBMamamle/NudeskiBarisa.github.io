var r = document.querySelector(':root');
function resizeFileDisplay(){
  var height = window.innerWidth * res[1];
  if(height >= window.innerHeight){                                //16:9
    var width = window.innerHeight * res[0];
    if(window.innerWidth - button.offsetWidth < width){
      r.style.setProperty('--width', width-button.offsetWidth+"px");
      r.style.setProperty('--height', (width-button.offsetWidth)*res[1]+"px");
      r.style.setProperty('--LposX', (window.innerWidth - width)/4+"px");
      r.style.setProperty('--VposX', "0");
      r.style.setProperty('--VposY', window.innerHeight/2-(width-button.offsetWidth)*res[1]/2+"px");
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
      r.style.setProperty('--width', (height-button.offsetHeight)*res[0]+"px");
      r.style.setProperty('--LposY', (window.innerHeight - height)/4+"px");
      r.style.setProperty('--VposX', window.innerWidth/2-(height-button.offsetHeight)*res[0]/2+"px");
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
function initResize(){
  resizeFileDisplay();
  window.addEventListener('resize', function(){resizeFileDisplay();});
}
var button = document.getElementById('filelist_button');
var res = [16/9,9/16], file=document.getElementById('file');
resizeFileDisplay();
switch(data[x]['filetype']){
  case "audio":
    initResize();
    break;
  case "img":
    file.onload = function(){
      res = [file.naturalWidth/file.naturalHeight,file.naturalHeight/file.naturalWidth];
      initResize();
    }
    break;
  case "video":
    file.addEventListener( "loadedmetadata", function(){
      res = [this.videoWidth/this.videoHeight,this.videoHeight/this.videoWidth];
      initResize();
    });
    break;
}
