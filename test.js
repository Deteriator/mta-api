  $(document).ready(function() {
    var userChoice= "stops"
   $.getJSON('https://ajar-target.gomix.me/'+userChoice, function(response){
     $('#gifs').append(response)
   var userStops= ['1','2','3','4','5','6','7'] 
  $("#post_button").click(function(){
    var input2= $("#input").val();  
    var mta= Object.keys(response)   
     /* $("#gif").append("<img src=" + response.data[3].images.fixed_width_downsampled.url + ">");
           $("#gif").append("<img src=" + response.data[4].images.fixed_width_downsampled.url + ">");  
            $("#gif").append("<img src=" + response.data[5].images.fixed_width_downsampled.url + ">");  
             $("#gif").append("<img src=" + response.data[8].images.fixed_width_downsampled.url + ">");  
              $("#gif").append("<i
      */
      
    });
  });
});
  
     /* $("#gif").append("<img src=" + response.data[3].images.fixed_width_downsampled.url + ">");
           $("#gif").append("<img src=" + response.data[4].images.fixed_width_downsampled.url + ">");  
            $("#gif").append("<img src=" + response.data[5].images.fixed_width_downsampled.url + ">");  
             $("#gif").append("<img src=" + response.data[8].images.fixed_width_downsampled.url + ">");  
              $("#gif").append("<i
      */
      
