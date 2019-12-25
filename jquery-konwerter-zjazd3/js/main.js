'use strict';

//console.log('działa');

var converterForm = $('.converter'); // --- . czyli class

var temp1 = $(converterForm.find('#t1')); //--- tak używamy w Jquery - # czyli id

var temp2 = $(converterForm.find('#t2')); //--- tak używamy w Jquery - # czyli id

converterForm.on('submit', function (event) {

    event.preventDefault();

    var _temp1 = temp1.val();

    var _temp2 = temp2.val();

    console.log(_temp1, _temp2);

});