$(document).ready(function() {
    $(".first").click(function() {
        $(".second").css("display", "block");
        $("p").css("display", "none");
        $(".first").css({
            "top": "20px",
            "width": "170px",
            "height": "60px",
            "text-align": "center"
        });
    });

    $(".second").click(function() {
        $(".third").css("display", "block");
    });

    $(".third").click(function() {
        $(".furth").css("display", "block");
    });

    $(".furth").click(function() {
        $(".second, .third, .furth").text("Happy birthday!");
        $(".carte").toggleClass("background_second");
    });
});
