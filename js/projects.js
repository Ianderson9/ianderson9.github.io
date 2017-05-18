$(document).ready(function() {
  $('#box1').delay(500).animate({
    height: '66.666%',
  },500);
  $('#box2').delay(1100).animate({
    height: '33.3%',
  },500);
  $('#box3').delay(1300).animate({
    width: '50%',
    left: '50%'
  },500);
  $('#box4').delay(900).animate({
    left: '0%',
    width: '25%'
  },500);
  $('#box5').delay(700).animate({
    height: '66.6%',
    top: '33.3%'
  },500);
  $('#box6').delay(900).animate({
    height: '33.3%',
  },500);
  $('#box7').delay(1100).animate({
    width: '25%',
    left: '75%'
  },500);
  // $('.display').each(function() {
  //   $(this).hover(function() {
  //     $(this).css('background','url("../images/art-1.gif")');
  //   }, function() {
  //     $(this).css('background','white');
  //   })
  // })
  $('#display1').hover(function() {
    $(this).css('background','url("../images/art-1.gif")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  },function() {
    $(this).css('background','linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url("../images/art-1.png")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  })
  $('#display2').hover(function() {
    $(this).css('background','url("../images/art-2.gif")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  },function() {
    $(this).css('background','linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url("../images/art-2.png")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  })
  $('#display3').hover(function() {
    $(this).css('background','url("../images/art-7.gif")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  },function() {
    $(this).css('background','linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url("../images/art-7.png")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  })
  $('#display4').hover(function() {
    $(this).css('background','url("../images/art-3.gif")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  },function() {
    $(this).css('background','linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url("../images/art-3.png")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  })
  $('#display5').hover(function() {
    $(this).css('background','url("../images/art-6.gif")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  },function() {
    $(this).css('background','linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url("../images/art-6.png")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  })
  $('#display6').hover(function() {
    $(this).css('background','url("../images/art-4.gif")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  },function() {
    $(this).css('background','linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url("../images/art-4.png")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  })
  $('#display7').hover(function() {
    $(this).css('background','url("../images/art-5.gif")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  },function() {
    $(this).css('background','linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), url("../images/art-5.png")');
    $(this).css('background-position','center');
    $(this).css('background-size','cover');
  })
})
