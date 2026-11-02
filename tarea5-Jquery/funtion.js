$(document).ready(function () {
    $("#bars-menu, #iconomenu").click(function (e) {
        e.preventDefault();
        $("#cajamenu").slideToggle();
    });

    $(".btn-ver").click(function (e) {
        e.preventDefault();
        $(".imagen-hero").fadeToggle();
    });
});

