$(document).ready(function(){
  var facet,
      facets = [
$('a[href*="INSEAM_SIZE\=36"]').parent().next(),
$('a[href*="Inseam_size/36"]').parent().next()
                ];
  
  for(i = 0; i < facets.length; i++) {
    facet = facets[i];
    if(!facet.hasClass("selected")) {
      facet.children().click();
    }
  }
});