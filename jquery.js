$(document).ready(function () {
    $(".main-drop").click(() => {

        $(".dropdown").slideToggle();


    });

    $(".main-drop").focusout(() => {

        $(".dropdown").hide();

    });

    $("input").focus(() => {
        
        $(this).addClass("add-border")

    });

     $("input").focusout(() => {

        $(this).removeClass("add-border")

    });

    

    $(window).resize(function () {

        if ($(window).width() <= 576) {

            // $(".header-left a").hover(() => {

            //     $(".header-left a").css("color", "black");
               
            // })

            $(".dropdown a").mouseover(function()  {

                $(this).css("color", "black");
               
            })

            $(".dropdown a").mouseout(function()  {

                $(this).css("color", "white");
               
            })


        }

    });
});
