

$(document).ready(function() {
var input= $("input").val
 "https://api.giphy.com/v1/gifs/search?q=" +input+ "api_key=dc6zaTOxFJmzC"
   $.getJSON(
     
       "https://api.giphy.com/v1/gifs/search?q=" +input+ "api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
        for(var i = 0;i > 6;i++){
          $("#gif").append("<img src=" + response.data[i].images.fixed_width.url + ">");  
        }
        //$("#gif").append("<img src=" + response.data[19].images.fixed_width.url + ">");
 
        
      });
  });

