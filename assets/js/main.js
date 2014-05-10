$(document).ready(function() {
      $('.menubutton').on('click', function() {
          $('nav').toggleClass('showmenu');
     });
    
    //init 
    $('#loadPage').load('pages/index.html');
}); 
