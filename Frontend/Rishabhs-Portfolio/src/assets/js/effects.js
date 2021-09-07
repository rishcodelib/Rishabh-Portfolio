


$(window).scroll(function () {
    var $height = $(window).scrollTop();
    if ($height > 250) {
        $('.navbar').removeClass('bg-transparent navbar-dark');
        $('.navbar').addClass('bg-light navbar-light');
       
        document.querySelector(".web_des").setAttribute("style","width:90%");
        document.querySelector(".web_dev").setAttribute("style","width:85%");
        document.querySelector(".brand").setAttribute("style","width:70%");
        document.querySelector(".marketing").setAttribute("style","width:80%");
        
    } else {
        $('.navbar').removeClass('bg-light navbar-light');
        $('.navbar').addClass('bg-transparent navbar-dark');
          document.querySelector(".web_des").setAttribute("style","width:0%");
        document.querySelector(".web_dev").setAttribute("style","width:0%");
        document.querySelector(".brand").setAttribute("style","width:0%");
        document.querySelector(".marketing").setAttribute("style","width:0%");

    }
});

