$(document).ready(function() {
      $('.menubutton').click(function() {
          $('nav.moblemenu').toggleClass('showmenu');
     });
    
    $('ul#navlist li').click(function() {
        $('nav.moblemenu').removeClassClass('showmenu');
    });
    
    //init 
    $('#loadPage').load('pages/index.html');
    
    //load menu pages
    $('ul#navlist li a').click(function() {
        var pages = $(this).attr('href');
        $('#loadPage').load('pages/' + pages + '.html');
        return false;
    });
}); 
