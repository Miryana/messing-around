/*jslint browser:true, devel:true, evil: true, regexp: true */

// mySound.play();



$(document).ready(function() {



  $(".btn-danger").click(function() {
    MK.toggleBySelector(".jumbotron");

    MK.myPlay('mySound1');
  });


  $(".btn-default").click(function() {
    MK.toggleBySelector(".jumbotron");

    MK.myPlay('mySound2');
  });



});



(function(exports, $) {
  'use strict';

  var MK = exports.MK || {};
  MK.version = '0.1';



  MK.toggleBySelector = function(elem) {
    return $(elem).toggle();
  };

  MK.myPlay = function(sound) {
    return MK.sounds[sound].play();
  };



  MK.sounds = {
    mySound1: new buzz.sound("/sounds/ogg/elephant.ogg"),
    mySound2: new buzz.sound("/sounds/ogg/monkey.ogg")
  };

  console.log('MK Ready');
  exports.MK = MK;
}(window, jQuery));