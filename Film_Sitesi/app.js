$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    document.getElementById("ay").onclick=function(){
        document.getElementById("body").style.backgroundColor="black";
        document.getElementById("ay").style.display="none";
       document.getElementById("gunes").style.display="inline";
        document.getElementById("gif").style.display="inline";
      }
      
      
      document.getElementById("gunes").onclick=function(){
        document.getElementById("body").style.backgroundColor="white";
        document.getElementById("gunes").style.display="none";
       document.getElementById("ay").style.display="inline";
        document.getElementById("gif").style.display="none";
      }

    
    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})
$(document).ready(function() {
    //area 1
    $('.mainList').children().hover(function() {
      $(this).siblings().stop().fadeTo(100,0.3);
    }, function() {
      $(this).siblings().stop().fadeTo(100,1);
    });
  });
  