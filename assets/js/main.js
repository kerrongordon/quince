$(document).ready(function() {
    //toggle mobile menu
      $('.menubutton').click(function() {
          $('nav.moblemenu').toggleClass('showmenu');
     });
    
    // hide mobile menu on click 
    $('ul#navlist li a').click(function() {
        $('nav.moblemenu').toggleClass('showmenu');
        return false;
    });
    
    //init load home page 
    $('#loadPage').load('pages/home.html');
    
    //load menu pages
    $('ul#navlist li a').click(function() {
        var pages = $(this).attr('href');        
        $('#loadPage').fadeOut('slow', function(){
            $('#loadPage').load('pages/' + pages + '.html', function(){
                $('#loadPage').fadeIn('slow');
            });
        });
        
        //adds page title to tab
        document.title = pages + ' | Gordon-tek';
        window.location.hash = pages;
        return false;
    });
    
}); 
