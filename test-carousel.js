$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});


$(document).ready(function(){
  $("#menoooo").click(function(){
    $(".sp_menu_toggleeeeee").slideToggle();
  });
});


$(document).ready(function(){
  $("#menooo").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
  $("#mene").click(function(){
    $(".sp_menu_togglee").slideToggle();
  });
});

$(document).ready(function(){
  $("#memo").click(function(){
    $(".sp_menu_toggleee").slideToggle();
  });
});

$(document).ready(function(){
  $("#memoo").click(function(){
    $(".sp_menu_toggleeee").slideToggle();
  });
});

$(document).ready(function(){
  $("#mena").click(function(){
    $(".sp_menu_tog").slideToggle();
  });
});

$(document).ready(function(){
  $("#me").click(function(){
    $(".sp_menu_to").slideToggle();
  });
});



$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});