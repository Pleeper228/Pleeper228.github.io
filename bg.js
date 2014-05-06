
$(window).resize(centerLead);
$(function() {
  centerLead();
});
function centerLead() {
  var bodyPadding = 70;
  $(".band-position-0").first().height(window.innerHeight - bodyPadding);
  var offset = $(".band-position-0 .band-head").offset().top;
  $(".lead-body").first().css("margin-top", window.innerHeight / 2 - offset - bodyPadding);
}