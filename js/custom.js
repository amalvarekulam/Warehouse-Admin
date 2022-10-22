/*------------------------------------------------------------------
    File Name: custom.js
  -------------------------------------------------------------------*/

/*--------------------------------------
	sidebar
--------------------------------------*/
"use strict";

$(document).ready(function() {
    if ($(window).width() < 500) {
        $('#sidebar').removeClass('active');
    } else {
        $('#sidebar').addClass('active');

    }
    /*-- sidebar js --*/
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
    $('#sidebarCollapseMobile').on('click', function() {
        $("#content").toggleClass("companymenulicontentpermanent");
        if (!$("#content").hasClass("companymenulicontentpermanent")) {
            $("#sidebarCollapseMobile i").removeClass("fa-close");
            $(".sidebar_active ul").removeClass("companymenuliul");
            $("#sidebarCollapseMobile i").addClass("fa-bars");
        } else {
            $("#sidebarCollapseMobile i").removeClass("fa-bars");

            $("#sidebarCollapseMobile i").addClass("fa-close");
            $(".sidebar_active ul").addClass("companymenuliul");
        }

        $("#content").toggleClass("showSubmenu");

    });

    /*-- tooltip js --*/
    $('[data-toggle="tooltip"]').tooltip();
});

$(".companymenuli a").hover(function() {
    $("#content").addClass("companymenulicontent");
}, function() {
    $("#content").removeClass("companymenulicontent");
})

$(document).on('click', ".companymenuli", function() {
    $('#content').addClass("companymenulicontentpermanent");
    $(".companymenuli ul").removeClass("companymenuliul");
    $(this).children('ul').addClass("companymenuliul");
    //$(".companymenuliul").css("min-height",$(document).height());
    // var tot =$(document).height()+85-($(".sidebar_active").offset().top);
    // $(".sidebar_active .companymenuliul").css("top",tot-($(".sidebar_active").offset().top));
    $("#sidebarCollapseMobile i").removeClass("fa-bars");

    $("#sidebarCollapseMobile i").addClass("fa-close");
});

/*--------------------------------------
    scrollbar js
--------------------------------------*/

var ps = new PerfectScrollbar('#sidebar');


/*--------------------------------------
 Active class
--------------------------------------*/

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("companymenuli");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("sidebar_active");
        current[0].className = current[0].className.replace(" sidebar_active", "");
        this.className += " sidebar_active";
    });
}


/*--------------------------------------
 Icon Transform
--------------------------------------*/

$(".rotate").click(function() {
    $(this).toggleClass("down");
})

/*--------------------------------------
 Loader 
--------------------------------------*/

$(".inner_container").css('opacity','.01');
window.addEventListener('load', function() {  
      setTimeout(function(){
        $(".inner_container").css('opacity','1');

        $(".full_container").removeAttr("id");
      },1000);
   });

/*--------------------------------------
Border color change
--------------------------------------*/

function colorRed() {
      $("#tabcontent").css("border-color","#E9212C");
  }

function colorBlue() {
    $("#tabcontent").css("border-color","#00B5FF");
}

function colorDeepBlue() {
    $("#tabcontent").css("border-color","#5B84FF");
  }

function colorGreen() {
     $("#tabcontent").css("border-color","#079227");
}

function colorCyan() {
    $("#tabcontent").css("border-color","#00AEB9");
}

   