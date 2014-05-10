$(document).ready(function() {
      $('.menubutton').on('click', function() {
          $('.moblemenu').toggleClass('showmenu');
     });
    
    //init 
    $('#loadPage').load('pages/index.html');
    
    $('ul#navlist li a').click(function() {
        var pages = $(this).attr('href');
        $('#loadPage').load('pages/' + pages + '.html');
        return false;
    });
}); 
