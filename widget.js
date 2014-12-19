 var P13NEngine = {}
 
 P13NEngine.sessionStorage;
 P13NEngine.init = function() {

   require(['clientSideStorage'], function(css) {
     P13NEngine.sessionStorage = css;
   });

   if($('#facets').length) {
     console.warn('facets found');
     if(!$('#PERSONALIZATION').length) {
    
       var container = $('#facets').prepend($('<div>').attr('class','facet')
           .append($('<div>').attr('class','facet-name').append($('<h2>').attr('id','PERSONALIZATION').html('Shop For')))
           .append($('<div>').attr('class','clear-all').html('clear'))
           .append($('<div>').attr('class','clearFloats'))
           .append($('<ul>').attr('class','defaultFacet'))         
       );
     
       $('.defaultFacet', container).append(P13NEngine.generateFacet('0001','John Doe'));
       $("#PERSONALIZATION").parent().parent().find("ul").on('mouseenter mouseleave', 'li', P13NEngine.highlight);
       $("#PERSONALIZATION").parent().parent().find("ul").on('click', 'li', P13NEngine.select);
   
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

 
   var facet,
   facets = P13NEngine.getFacetListById('0001');

   for(i = 0; i < facets.length; i++) {
     facet = $(facets[i]).parent().next();
     if(!facet.hasClass("selected")) {
       facet.children().click();
     }
   }

 };
   
P13NEngine.getFacetListById = function(id) {
  //Get From Session Storage
  var fListJSON = P13NEngine.sessionStorage.getSession('p13n_'+id);
  if(!fListJSON) { 
    //Get From Service - STUBBED
    $.ajax({
      url: 'https://rawgit.com/bigreddale/personalization-kit/master/p13n_'+id+'.json',
      success: function(json) {
        fListJSON = json;
      },
      async:false
    });
    //Set Session Value
    P13NEngine.sessionStorage.setSession('p13n_'+id, fListJSON);
  } 
  
  return fListJSON;
};

 
 $(document).ready(function(){
   MACYS.Faceted.selectedFacetEvent.subscribe(P13NEngine.init);
   P13NEngine.init();
   console.warn('loaded init');
 });
  

