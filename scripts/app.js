$(document).ready(function() {
    $("#miniNav").click(function() {
       $("#portal").toggleClass("active");
    });

    $("#Upward").click(function() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
    });
 });