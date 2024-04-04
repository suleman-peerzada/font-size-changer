$(document).ready(function () {
  $("#range-slider").on("input change", function () {
    $(".value").text($(this).val() + "px");
    $(".text").css("font-size", $(this).val() + "px");
  });
});
