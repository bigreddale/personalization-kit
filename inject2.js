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
    void(document.cookie="MISCGCs = USERPC1_92_" + zip + "3_87_USERLL1_92_37.7795%2C-122.41953_87_DT1_92_PC3_87_DSW1_92_2803_87_DSH1_92_1753_87_DBN1_92_Chrome3_87_DMN1_92_40; path=/; domain=.fds.com;"); 
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


