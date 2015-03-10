function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function(){
  switch(getParameterByName("c2g")) {
  case "1":
    $("row2_column1 img").attr("src","https://rawgit.com/bigreddale/personalization-kit/master/img/c2g_banner_1.jpg");
    break;
  case "2":
    $("row2_column1 img").attr("src","https://rawgit.com/bigreddale/personalization-kit/master/img/c2g_banner_2.jpg");
    break;
  case "3":
    $("row2_column1 img").attr("src","https://rawgit.com/bigreddale/personalization-kit/master/img/c2g_banner_3.jpg");
    break;
  case "4":
    $("row2_column1 img").attr("src","https://rawgit.com/bigreddale/personalization-kit/master/img/c2g_banner_4.jpg");
    break;
  case "5":
    $("row2_column1 img").attr("src","https://rawgit.com/bigreddale/personalization-kit/master/img/c2g_banner_5.jpg");
    break;
   default:
     $("row2_column1 img").attr("src","https://rawgit.com/bigreddale/personalization-kit/master/img/c2g_banner_default.jpg");
     break;
  
  }
  
});

