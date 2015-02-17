var COOKIE;
require(["cookie"],function(c){COOKIE=c;console.warn('Cookies Ready');});

function setZip(zip) {
  cookies = new Array(); 
  cookies = document.cookie.split('; '); 
  var isNew = true; 
  for(i=0; i<cookies.length; i++) { 
    names = new Array(); 
    names = cookies[i].split('='); 
    if(names[0] == 'MISCGCs') {
      isNew = false; values = new Array(); 
      values = names[1].split('USERPC1_92_'); 
      void(document.cookie="MISCGCs = " + values[0] + "USERPC1_92_" + zip  +  values[1].substring(5,values[1].length+1) + " ; path=/;"  );
    } 
  } 
  if(isNew == true) { 
    void(document.cookie="MISCGCs = USERPC1_92_" + zip + "; path=/; domain=.fds.com;"); 
  } 
  alert(document.cookie);
}

function setSegment(seg) {
  document.cookie='SEGMENT=%7B%22EXPERIMENT%22%3A%5B'+seg+'%5D%7D; path=/;';
  alert('set segment: ' + seg) ;
  
}
function getSegment() {
  alert(COOKIE.get('SEGMENT'));
}
function getZip(){
  alert(COOKIE.get('MISCGCs'));
}


