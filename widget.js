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
    
       $('#facets').prepend($('<div>').attr('class','facet')
           .append($('<div>').attr('class','facet-name').append($('<h2>').attr('id','PERSONALIZATION').html('Shop For')))
           .append($('<div>').attr('class','clear-all').html('clear'))
           .append($('<div>').attr('class','clearFloats'))
           .append($('<ul>').attr('class','defaultFacet'))         
       );
     
       $('#facets .defaultFacet').append(P13NEngine.generateFacet('00001','John Doe'));
       $("#PERSONALIZATION").parent().parent().find("ul").on('mouseenter mouseleave', 'li', P13NEngine.highlight);
       $("#PERSONALIZATION").parent().parent().find("ul").on('click', 'li', P13NEngine.select);
   
       for(i = 0; i < facets.length; i++) {
         facet = facets[i];
         if(!facet.hasClass("selected")) {
           facet.children().click();
         }
       }
     }
   } else {
     console.warn('facets not found');
     setTimeout(P13NEngine.init, 500);
   }; 
   
 
 }; 
 
 P13NEngine.generateFacet = function(id, name) {
   var facet = $('<li>').append($('<span>').attr('class','PERSONALIZATION').html(name))
               .append($('<span>').attr('id','edit_PERSONALIZATION_'+id).attr('class','facet-item-count')
                   .append($('<a>').attr('href','#').attr('rel',id).html(' (edit)')));
   
   return facet;
 }
 
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
     target = target.closest('li');
   };
   
   target.toggleClass('selected');
   target.closest('.facet').toggleClass('selected');
   target.removeClass('active-facet-list');
   target.find('span').removeClass('facet-item-highlight');         
 };
   
 P13NEngine.getFacetListById = function(id) {
 
 };

 
 $(document).ready(function(){
   P13NEngine.init();
   console.warn('loaded init');
 });
  

