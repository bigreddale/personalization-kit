 var P13NEngine = {}; 
 
 P13NEngine.init = function() {
   var facet,
       facets = [
 $('a[href*="INSEAM_SIZE\=36"]').parent().next(),
 $('a[href*="Inseam_size/36"]').parent().next()
                 ];
   
   if($('#facets').length) {
     console.warn('facets found');
     if(!$('#PERSONALIZATION').length) {
       $('#facets').prepend('<div class="facet"> \
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
     $("#PERSONALIZATION").parent().parent().find("ul").on('click', 'li', P13NEngine.select);
   
     for(i = 0; i < facets.length; i++) {
       facet = facets[i];
       if(!facet.hasClass("selected")) {
         facet.children().click();
       }
     }
   } else {
     console.warn('facets not found');
     setTimeout(P13NEngine.init, 500);
   }; 
   
 
 }; 
  
 P13NEngine.highlight = function(obj) {
   var target = $(obj.target);
   if(!target.is('li')) {
     target = target.parent('li');
   };
   
   if(!target.hasClass('selected')) {
     if(obj.type === "mouseenter") {
       target.addClass('active-facet-list');
       target.find('span').addClass('facet-item-highlight');
     } else {
       target.removeClass('active-facet-list');
       target.find('span').removeClass('facet-item-highlight');         
     }
   }
 };
   
 P13NEngine.select = function(obj) {
   var target = $(obj.target);
   if(!target.is('li')) {
     target = target.parent('li');
   };
   
   target.toggleClass('selected');
   target.removeClass('active-facet-list');
   target.find('span').removeClass('facet-item-highlight');         
 };
   
  

 $(document).ready(function(){
   P13NEngine.init();
   console.warn('loaded init');
 });
  

