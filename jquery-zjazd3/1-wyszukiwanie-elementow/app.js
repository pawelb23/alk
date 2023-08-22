
'use strict';

//KOD 

$(function () {
    console.info('DOM zaladowany!');

    // Find all section elements on document
    // Add to these elements class backgroundElement
    $('section').addClass('backgroundElement');

    // Find element nav in ssection 'links
    // Add to this element class hover-effect
    $('.links').find('nav').addClass('hover-effect');

    //    $('.menu').find('a').css('color', 'red');

    var menu = $('.menu')

    menu.find('a').css('color', 'red');

    menu.find('li').addClass('redLinks');

    //zadanie 6

    $('h1').addClass('creepyHeader');

    $('h1').parent().css('border', "3px solid blue");

    $('h1').next().addClass('crazy');

    //Zadanie 7

    var lis = menu.find('li');

    var firstLi = lis.first();

    var thirdLi = lis.eq(2);

    var lastLi = lis.eq(-1); //lis.last(); 

    console.log(firstLi, thirdLi, lastLi);

    //Zadanie 9.

    var href = $('#googleLink').attr('href');

    console.log(href);

    var newLink = $('#googleLink').attr('href', 'www.wp.pl');

    console.log(newLink);

    //Zadanie 10. --- w tym zadaniu attr() zadziała, a data() nie bo to jest mały kruczek

    var backbone = $('.links').find('a').first().attr('data-hover', 'Backbone');
    var javascript = $('.links').find('a').eq(1).attr('data-hover', 'JavaScript');
    var angular = $('.links').find('a').eq(2).attr('data-hover', 'Angular');
    var ember = $('.links').find('a').last().attr('data-hover', 'Ember');

    console.log(backbone);
    
    console.log(javascript);
    
    console.log(angular);
    
    console.log(ember);
    

});