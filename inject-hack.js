console.error($('.iconImgLarge img'));
$('.iconImgLarge img').each(function(e){
    console.log(e);
    $(this).attr('draggable', 'true');
  });
  $('.iconImgSmall img').each(function(e){
    console.log(e);
    $(this).attr('draggable', 'true');
  });
  $('.fullColorOverlayOff img').each(function(e){
    console.log(e);
    $(this).attr('draggable', 'true');
  });

var permissionForm = new function () {
  
  var me = this;
  
  me.init = function () {
    if (EventHelpers.hasPageLoadHappened(arguments)) {
      return;
    }
    
    var dragNodes = cssQuery('[draggable=true]');
    
    for (var i=0; i<dragNodes.length; i++) {
      EventHelpers.addEvent(dragNodes[i], 'dragend', userDragEndEvent);
    }
  };
  
  function userDragEndEvent(e) {  
    console.log(e.target);
    var x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    var y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    parent.postMessage({"x":x,"y":y, "src":e.target.src},'*');
  }
  
  
  
}

DragDropHelpers.fixVisualCues=true;
EventHelpers.addPageLoadEvent('permissionForm.init');


  

