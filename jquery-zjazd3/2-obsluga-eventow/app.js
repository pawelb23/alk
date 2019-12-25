 'use strict';

$(function () {
   
        console.info('DOM zaladowany!');
    
    //Zadanie 2
    
    function onClick() {
        
        console.log( $(this).data('feature') ); //--- aby działało poprawnie, musimy przed this umieścić dolara
        
    }
    
    $('.hero-buttons').find('button').on('click', onClick);
    
    //Zadanie 3 
    
    
    
//   var dl = $('superDescription').find('dl');  //--- zapis jak w CSS, czyli nazwa - wartość
//    
//    dl.find('dd').hide();
//    
//    dl.find('dt').on('click', function () {
//        
//        $(this).next().toggl();
//        
//    }
//    
//    
//});

//        var dl = $('.superhero-description').find('dl');  //--- zapis jak w CSS, czyli nazwa - wartość

    var dl = $('.superhero-description').find('dl');

    dl.find('dd').hide();

    dl.find('dt').on('click', function () {
        
        $(this).next().toggle();
        
    
        
    });
    

});
