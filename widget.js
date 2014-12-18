 var P13NEngine = {}; 
 alert(1);
  
$(document).ready(function(){
  
  
  P13NEngine.init = function() {
    var facet,
        facets = [
  $('a[href*="INSEAM_SIZE\=36"]').parent().next(),
  $('a[href*="Inseam_size/36"]').parent().next()
                  ];
    
    if($('#facets').length) {
      if(!$('#PERSONALIZATION').length) {
        $('#facets').prepend('<div class="facet selected"> \
            <div class="facet-name"> \
              <h2 id="PERSONALIZATION">Shop For</h2>\
            </div>\
            <div class="clear-all">clear</div> \
            <div class="clearFloats"></div> \
            <ul class="defaultFacet" height="120" style="height: auto;"> \
            <li> \
            <span class="PERSONALIZATION">John Doe</span>\
            <span id="edit_PERSONALIZATION_John_Doe" class="facet-item-count">(<a href="#">edit</a>)</span> \
            </li> \
            </ul>\
            </div>');
        
      }
      
      $("#PERSONALIZATION").parent().parent().find("ul").on('mouseenter mouseleave', 'li', P13NEngine.highlight);
    
      for(i = 0; i < facets.length; i++) {
        facet = facets[i];
        if(!facet.hasClass("selected")) {
          facet.children().click();
        }
      }
    };
    
    P13NEngine.highlight = function(obj) {
      console.log(obj);
      $(obj).parent().toggleClass('active-facet-list');
      $(obj).toggleClass('facet-item-highlight');
    };
      
  
  };
 
  P13NEngine.init();
  

});