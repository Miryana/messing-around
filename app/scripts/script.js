(function($) {
  "use strict";
  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));

var audio = {};

audio.markets = ['GBPUSD', 'EURUSD', 'USDCHF', 'GOLD', 'DOW'];
buzz.defaults = {
  autoplay: false,
  formats: ['ogg', 'mp3'],
  loop: false,
  preload: "metadata",
  volume: 80,
  i18n: 'eng'
};


$(function() {
  $.subscribe('Testing', function() {
    for (var a in arguments[1]) {
      FX.updateUnit(arguments[1][a]);
    }
  });
  setInterval(function() {
    $("#myDiv").load('signals.php?id=' + $.now());
  }, 2000);

});

(function(exports, $) {

  FX = exports.FX || {};

  FX.init = function() {
    FX.createAudio(audio.markets);
  };

  FX.updateUnit = function(obj) {
    $this = $(obj.unit);
    if(obj.update) { //both string and boolean will work because JS has Coercion but keep it clean....
      FX.updateUnitElHtml($this.find('.arrow'), obj.arrow);
      FX.updateUnitElHtml($this.find('.price'), obj.price);
      FX.updateUnitElHtml($this.find('.clock'), obj.clock);
      FX.updateUnitImg($this.find('.arrow_img'), obj.arrow_img);
      FX.playAudio(obj.market, obj.action);
    }
  };
  FX.updateUnitElHtml = function($el, data) {
    $el.html(data);
  };
  FX.updateUnitImg = function($el, data) {
    $el.find('img').attr('src', data);
  };
  FX.playAudio = function(market, action) {
    var xx = audio[market][action].load().play();
  };
  FX.createAudio = function(data) {

    $.each(data, function(idx, val) {
      audio[val] = {
        buy: new buzz.sound('/audio/i18n/'+ buzz.defaults.i18n + '/' + val + '_buy'),
        sell: new buzz.sound('/audio/i18n/'+ buzz.defaults.i18n + '/' + val + '_sell'),
        close: new buzz.sound('/audio/i18n/'+ buzz.defaults.i18n + '/' + val + '_close'),
        change: new buzz.sound('/audio/i18n/'+ buzz.defaults.i18n + '/' + val + '_change')
      };
    });
  };
  FX.init();
  exports.FX = FX;
}(window, jQuery));