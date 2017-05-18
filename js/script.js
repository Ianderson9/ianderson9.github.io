$('#resume-toggle').click(function() {
  $('#resume-container').animate({
    top: '0px',
  },500);
})
$('.exit').click(function() {
  $('#resume-container').animate({
    top: '100vh',
  },500);
})
$('#contact-toggle').click(function() {
  $('#contact-card').animate({
    right: '0px',
  },500);
})
$('#contact-card').click(function() {
  $('#contact-card').animate({
    right: '-300px',
  },500);
})
$('#about-toggle').click(function() {
  // $('#about').toggle();
  $('.main').animate({
    opacity: '0',
  },500,function() {
    $(this).toggle();
  });
  $('#about').animate({
    opacity: '1',
  },500);
})
$('#about-exit').click(function() {
  $('.main').toggle();
  $('.main').animate({
    opacity: '1',
  },500);
  $('#about').animate({
    opacity: '0',
  },500);
})
$('#projects').click(function() {
  window.location.replace('projects.html');
})
