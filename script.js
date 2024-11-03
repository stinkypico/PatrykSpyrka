$(document).ready(function() {
    $("#ul-menu > li > a").hover(function() {
        if ($(window).width() > 600) {
            if (!$(this).parent().is(":animated") && !$(this).parent().hasClass("active")) {
                $(this).parent().animate({top: '-15px', left: '15px'}, 100);
                $(this).parent().addClass("hover-rainbow");
                $(this).animate({"backgroundColor": "rgba(0, 0, 0, 0.4)"}, 100);
            }
        }
    }, function() {
        if ($(window).width() > 600) {
            if (!$(this).parent().hasClass("active")) {
                $(this).parent().animate({top: '0px', left: '0px'}, 100);
                $(this).parent().removeClass("hover-rainbow");
                $(this).animate({"backgroundColor": "transparent"}, 100);
            }
        }
    });

    $("#ul-menu > li > a").click(function(e) {
        e.preventDefault();

            if (!$(this).parent().hasClass("active")) {
                if($(window).width() > 600){
                    $("#ul-menu > li > a").not(this).parent().removeClass("active").animate({top: '0px', left: '0px'}, 100);
                    $("#ul-menu > li").removeClass("hover-rainbow");
                    $("#ul-menu > li > a").css("backgroundColor", "transparent");
                    
                    $(this).parent().addClass("hover-rainbow");
                    $(this).css("backgroundColor", "rgba(0, 0, 0, 0.4)");
                }

                
                $("#ul-menu > li > a").not(this).parent().removeClass("hover-rainbow-background");
                $(this).parent().addClass("active");

                if($(window).width() <= 600){
                    $(this).parent().addClass("hover-rainbow-background");
                }
                
                
                

                let data_type = $(this).data("type");
                
                $("#container > div").each(function() {
                    if ($(this).data("type") == data_type) {
                        $(this).css("visibility", "visible");
                    } else {
                        $(this).css("visibility", "hidden");
                    }
                });

                $("#container").css("display", "flex");

            } else {
                $(this).parent().removeClass("active");
                $("#container > div").css("visibility", "hidden");
                $("#container").css("display", "none");
                $(this).animate({"backgroundColor": "transparent"}, 100);
                $(this).parent().removeClass("hover-rainbow-background");
            }
    });

    let stopGate = true;
    $("#stop-animation").click(function() {
        if (stopGate) {
            stopGate = false;
            $(this).css("backgroundImage", "url('img/locker-lock.png')");
            $("#cube").removeClass("cube-animation");
            console.log("locked");
        } else {
            stopGate = true;
            $(this).css("backgroundImage", "url('img/locker-unlock.png')");
            $("#cube").addClass("cube-animation");
            console.log("unlocked");
        }
    });

    $('#cube').hover(
        function() {

            let windowWidth = $(window).width();
            let widlen;

            if (windowWidth > 1440) {
                widlen = 180;
            } else if (windowWidth <= 1400 && windowWidth > 425) {
                widlen = 130;
            } else if (windowWidth <= 425) {
                widlen = 60;
            }

            $('#top-side').css('transform', 'rotateX(90deg) translateZ(' + widlen + 'px)');
            $('#bottom-side').css('transform', 'rotateX(90deg) translateZ(-' + widlen + 'px)');
            $('#left-side').css('transform', 'rotateY(90deg) translateZ(' + widlen + 'px)');
            $('#right-side').css('transform', 'rotateY(-90deg) translateZ(' + widlen + 'px)');
            $('#front-side').css('transform', 'rotateY(180deg) translateZ(' + widlen + 'px)');
            $('#back-side').css('transform', 'translateZ(' + widlen + 'px)');
        },
        function() {

            let windowWidth = $(window).width();
            let widlen;

            if (windowWidth > 1440) {
                widlen = 180;
            } else if (windowWidth <= 1400 && windowWidth > 425) {
                widlen = 130;
            } else if (windowWidth <= 425) {
                widlen = 75; 
            }

            $('#top-side').css('transform', 'rotateX(90deg) translateZ(' + (widlen - 30) + 'px)');
            $('#bottom-side').css('transform', 'rotateX(90deg) translateZ(-' + (widlen - 30) + 'px)');
            $('#left-side').css('transform', 'rotateY(90deg) translateZ(' + (widlen - 30) + 'px)');
            $('#right-side').css('transform', 'rotateY(-90deg) translateZ(' + (widlen - 30) + 'px)');
            $('#front-side').css('transform', 'rotateY(180deg) translateZ(' + (widlen - 30) + 'px)');
            $('#back-side').css('transform', 'translateZ(' + (widlen - 30) + 'px)');
        }
    );
});

