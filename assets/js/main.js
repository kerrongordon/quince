$(document).ready(function() {
      $('.menubutton').on('click', function() {
          $('nav').toggleClass('showmenu');
     });
    
    //init 
    $('#loadPage').load('pages/index.html');
    
    $('ul#navlist li a').click(function() {
        var pages = $(this).attr('href');
        $('#loadPage').load('pages/' + pages + '.html');
    });
}); 
