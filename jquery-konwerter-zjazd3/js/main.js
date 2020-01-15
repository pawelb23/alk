//'use strict';
//
//var converterForm = $('.converter'); // --- . czyli class
//
//var temp1 = $(converterForm.find('#t1')); //--- tak używamy w Jquery - # czyli id
//
//var temp2 = $(converterForm.find('#t2')); //--- tak używamy w Jquery - # czyli id
//
//var submitToDblClick = converterForm.find('input[type="submit"]');
//
//console.log(submitToDblClick);
//
////Zdarzenie i funkcja potrzebne do szukania kodu znaków na klawiaturze
////$('#searchingForLetter').on({
////    'keypress': function (letterPush) {
////
////        //        console.log('działa');
////
////        console.log(letterPush.keyCode);
////
////    }
////
////});
//
//// con'keypress': function (keySign) {
////    //
////            temp1.val(parseInt.replace('+', '').replace('-', ''));
//
//
//converterForm.on({
//    'submit': function (event) {
//
//        event.preventDefault();
//
//        var _temp1 = temp1.val();
//
//        var _temp2 = temp2.val();
//
//        var farenDegree = 9 / 5 * (_temp1) + 32;
//
//        var celsDegree = 5 / 9 * ((_temp2) - 32);
//
//        if ($('input').hasClass('first-position')) {
//
//            if (temp1.val() === '') {
//
//                temp1.val('0');
//                temp2.val(farenDegree);
//
//            } else {
//
//                temp1.val();
//
//                var temp2ParseFl = parseFloat(farenDegree);
//
//                var temp2ParseIn = parseInt(farenDegree);
//
//                console.log(temp2ParseFl);
//
//                console.log(temp2ParseIn);
//
//                if (temp2ParseFl === temp2ParseIn) { //Porównujemy czy liczba jest całkowita czy nie
//
//                    var temp2NoStep = temp2.val(parseFloat(farenDegree));
//
//                } else
//
//                    var temp2Step = temp2.val(parseFloat(farenDegree).toFixed(1)); //taki zapis pozwoli zaokrąglić nam liczbę do miejsc po przecinku (w zależności jaką liczbę wstawimy w nawias)
//
//            }
//
//        } else if ($('input').hasClass('second-position')) {
//
//            if (temp2.val() === '') {
//
//                temp2.val('0');
//                temp1.val(celsDegree);
//
//            } else {
//
//                temp2.val();
//
//                temp1.val(celsDegree);
//
//            }
//
//        }
//
//    },
//    'keypress': function (keySign) {
//
//        var inputMinus = ($('input[type="number"]'));
//
//        if (keySign.keyCode === 43 || keySign.keyCode === 44 || keySign.keyCode === 46 || keySign.keyCode === 101) {
//
//            return false;
//
//        } 
//
//                      else if (inputMinus.eq(0).val() === '') {
//            
//                        if (keySign.keyCode === 45) {
//            
//                            return inputMinus.eq(0).val('');
//    //        
//                        } 
//                 
//                 }
//        
//    }
//
//
//    //        
//    //        else if (inputMinus.eq(0).val()) {
//    //            
//    //            console.log(inputMinus.eq(0).val());
//    //            
//    //        }
//    //        
//    //
//    //            
//    //        }
//
//    //        console.log(inputMinus.eq(1).val());
//
//    //        console.log(inputMinus.eq(0).val());
//    //        
//    //           console.log(temp2.val());
//
//    //    }
//    //                
//      
////    else {
//    //        
//    //                        return inputMinus.eq(0).val();
//    //        
//    //                    }
//    //        
//    //                } 
//    //                
//    //                else if (inputMinus.eq(0).val() !== '') {
//    //        
//    //                    if (keySign.keyCode === 45) {
//    //        
//    //                        return false;
//    //
//    //    }
//
//});
//
//submitToDblClick.on({
//    'dblclick': function (event) {
//
//        event.preventDefault();
//
//        //        console.log('działa');
//
//        var masterDblClick = $('#master-container div');
//
//        var classForInput = $('.inline-class input');
//
//        if (masterDblClick.hasClass('switching-dblclick')) {
//
//            console.log('poz2');
//
//            $('#place-one .celsius-div').appendTo('#place-two');
//
//            $('#t1').attr('disabled', 'true');
//            
//            $('#place-two .fahrenheit-div').appendTo('#place-one');
//
//            $('#t2').removeAttr('disabled', 'true');
//
////             temp1.val(parseFloat(5 / 9 * (temp2.val()) - 32));
//            
//            temp2.val(parseFloat(temp2.val()).toFixed(0));
//
//            masterDblClick.removeClass('switching-dblclick');
//
//            classForInput.removeClass('first-position');
//
//            classForInput.addClass('second-position');
//
//            submitToDblClick.css({
//
//                'transform': 'rotate(180deg)',
//                'transition': 'all 0.5s'
//
//            })
//
//        } else {
//
//            console.log('poz1');
//
//            $('#place-one .fahrenheit-div').appendTo('#place-two');
//
//            $('#t1').removeAttr('disabled', 'true');
//
//            $('#place-two .celsius-div').appendTo('#place-one');
//
//            $('#t2').attr('disabled', 'true');
//
//            temp1.val(parseFloat(temp1.val()).toFixed(0));
//            
//            temp2.val(parseFloat(9 / 5 * (temp1.val()) + 32).toFixed(1));
//
//            masterDblClick.addClass('switching-dblclick');
//
//            classForInput.removeClass('second-position');
//
//            classForInput.addClass('first-position');
//
//            submitToDblClick.css({
//
//                'transform': 'rotate(0deg)',
//                'transition': 'all 0.5s'
//
//
//
//            })
//
//        }
//
//    }
//
//});


//--------------------

'use strict';

var converterForm = $('.converter');

var temp1 = $(converterForm.find('#t1'));

var temp2 = $(converterForm.find('#t2'));

var minusEmpty = '';

var submitToDblClick = converterForm.find('input[type="submit"]');

//Zdarzenie i funkcja potrzebne do szukania kodu znaków na klawiaturze
//$('#searchingForLetter').on({
//    'keypress': function (letterPush) {
//
//        //        console.log('działa');
//
//        console.log(letterPush.keyCode);
//
//    }
//
//});


converterForm.on({
    'submit': function (event) {

        event.preventDefault();

        var _temp1 = temp1.val();

        var _temp2 = temp2.val();

        var farenDegree = 9 / 5 * (_temp1) + 32;

        var celsDegree = 5 / 9 * ((_temp2) - 32);

        if ($('input').hasClass('first-position')) {

            if (temp1.val() === '') {

                temp1.val(0);
                temp2.val(farenDegree);

            } else {

                temp1.val();

                var temp2ParseFl = parseFloat(farenDegree);

                var temp2ParseIn = parseInt(farenDegree);

                //                console.log(temp2ParseFl);
                //
                //                console.log(temp2ParseIn);

                if (temp2ParseFl === temp2ParseIn) { //Porównujemy czy liczba jest całkowita czy nie

                    var temp2NoStep = temp2.val(parseFloat(farenDegree));

                } else {

                    var temp2Step = temp2.val(parseFloat(farenDegree).toFixed(1)); //taki zapis pozwoli zaokrąglić nam liczbę do miejsc po przecinku (w zależności jaką liczbę wstawimy w nawias)

                }

            }

        } else if ($('input').hasClass('second-position')) {

            if (temp2.val() === '') {

                temp2.val(0);
                temp1.val(celsDegree);

            } else {

                temp2.val();

                temp1.val(celsDegree);

            }

        }

    },
    'keypress': function (keySign) {

        var inputMinus = ($('input[type="number"]'));

        var inputMinusActiveInput = inputMinus.eq(0).val()

        if (keySign.keyCode === 43 || keySign.keyCode === 44 || keySign.keyCode === 46 || keySign.keyCode === 101) {

            return false;

        }
        //        
        //        else if (keySign.keyCode === 45) {
        //
        //    keySign.keyCode = '-';
        //            
        //        }
        //        
        //        for (var i = 0; inputMinusActiveInput.length > i; i++) {
        //        
        //            console.log('af');
        //            
        //       if (inputMinusActiveInput[i] === '-' ) {
        //
        //            console.log('a');
        //            
        //            return inputMinus.eq(0).val() ;
        //
        //            }
        //            
        //        }

    }

});

submitToDblClick.on({
    'dblclick': function (event) {

        event.preventDefault();

        //        console.log('poz2');

        var masterDblClick = $('#master-container div');

        var classForInput = $('.inline-class input');

        if (masterDblClick.hasClass('switching-dblclick')) {

            $('#place-one .celsius-div').appendTo('#place-two');

            $('#t1').attr('disabled', 'true');

            $('#place-two .fahrenheit-div').appendTo('#place-one');

            $('#t2').removeAttr('disabled', 'true');

            if (temp2.val() < 0 && temp2.val() > -1) {

                temp2.val(0);

            }

            temp2.val(parseFloat(temp2.val()).toFixed(0));


            temp1.val(parseFloat(5 / 9 * (temp2.val() - 32)));

            masterDblClick.removeClass('switching-dblclick');

            classForInput.removeClass('first-position');

            classForInput.addClass('second-position');

            submitToDblClick.css({

                'transform': 'rotate(180deg)',
                'transition': 'all 0.5s'

            })

        } else {

            //            console.log('poz1');

            $('#place-one .fahrenheit-div').appendTo('#place-two');

            $('#t1').removeAttr('disabled', 'true');

            $('#place-two .celsius-div').appendTo('#place-one');

            $('#t2').attr('disabled', 'true');

            temp1.val(parseFloat(temp1.val()).toFixed(0));

            if ((parseFloat(9 / 5 * (temp1.val()) + 32)) === (parseInt(9 / 5 * (temp1.val()) + 32))) {

                temp2.val(parseFloat(9 / 5 * (temp1.val()) + 32));

            } else {

                temp2.val(parseFloat(9 / 5 * (temp1.val()) + 32).toFixed(1));

            }



            masterDblClick.addClass('switching-dblclick');

            classForInput.removeClass('second-position');

            classForInput.addClass('first-position');

            submitToDblClick.css({

                'transform': 'rotate(0deg)',
                'transition': 'all 0.5s'

            })

        }

    }

});