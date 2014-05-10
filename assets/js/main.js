$(document).ready(function() {
      $('.menubutton').click(function() {
          $('nav.moblemenu').toggleClass('showmenu');
     });
    
    //init 
    $('#loadPage').load('pages/index.html');
    
    //load menu page
    $('ul#navlist li a').click(function() {
        var pages = $(this).attr('href');
        $('#loadPage').load('pages/' + pages + '.html');
        return false;
    });
}); 
