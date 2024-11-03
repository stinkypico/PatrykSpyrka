$(document).ready(function() {
    const handleHover = function() {
        if ($(window).width() > 600) {
            const parent = $(this).parent();
            if (!parent.is(":animated") && !parent.hasClass("active")) {
                parent.animate({top: '-15px', left: '15px'}, 100).addClass("hover-rainbow");
                $(this).animate({"backgroundColor": "rgba(0, 0, 0, 0.4)"}, 100);
            }
        }
    };

    const handleHoverOut = function() {
        if ($(window).width() > 600) {
            const parent = $(this).parent();
            if (!parent.hasClass("active")) {
                parent.animate({top: '0px', left: '0px'}, 100).removeClass("hover-rainbow");
                $(this).animate({"backgroundColor": "transparent"}, 100);
            }
        }
    };

    $("#ul-menu > li > a").hover(handleHover, handleHoverOut);

    $("#ul-menu > li > a").click(function(e) {
        e.preventDefault();
        const parent = $(this).parent();
        const isActive = parent.hasClass("active");

        if (!isActive) {
            if ($(window).width() > 600) {
                $("#ul-menu > li.active").removeClass("active").animate({top: '0px', left: '0px'}, 100);
                $("#ul-menu > li").removeClass("hover-rainbow");
                $("#ul-menu > li > a").css("backgroundColor", "transparent");
                parent.addClass("hover-rainbow");
                $(this).css("backgroundColor", "rgba(0, 0, 0, 0.4)");
            }else if($(window).width() <= 600){
                $("#ul-menu > li > a").parent().removeClass("hover-rainbow-background");
                parent.addClass("hover-rainbow-background");
            }

            const data_type = $(this).data("type");

            $("#container > div").css("visibility", "hidden");
            $("#container > div[data-type='" + data_type + "']").css("visibility", "visible");
            $("#container").css("display", "flex");
            parent.addClass("active");

        } else {
            parent.removeClass("active");
            $("#container > div").css("visibility", "hidden");
            $("#container").css("display", "none");
            $(this).animate({"backgroundColor": "transparent"}, 100);
            parent.removeClass("hover-rainbow-background");
        }
    });

    let stopGate = true;
    $("#stop-animation").click(function() {
        stopGate = !stopGate;
        if (stopGate) {
            $(this).css("backgroundImage", "url('img/locker-unlock.png')");
            $("#cube").addClass("cube-animation");
        } else {
            $(this).css("backgroundImage", "url('img/locker-lock.png')");
            $("#cube").removeClass("cube-animation");
        }
    });

    $('#cube').hover(
        function() {
            const windowWidth = $(window).width();
            let widlen;
            if (windowWidth > 1440) {
                widlen = 180;
            } else if (windowWidth <= 1400 && windowWidth > 425) {
                widlen = 130;
            } else {
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
            const windowWidth = $(window).width();
            let widlen;
            if (windowWidth > 1440) {
                widlen = 180;
            } else if (windowWidth <= 1400 && windowWidth > 425) {
                widlen = 130;
            } else {
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

    $(".slide-project-frame").click(function() {
        const thisDataFrame = $(this).data("type");
        $(".project-frame").each(function() {
            if ($(this).data("type") === thisDataFrame) {
                $(this).slideToggle();
            }
        });
    });
});
