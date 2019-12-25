'use strict';

console.log('działa');

var newsletterForm = $('.newsletter');

var userName = $(newsletterForm.find('input').eq(0)); //--- tak używamy w Jquery

//var userName = $(newsletterForm.user); // sprawdzić w konsoli co się dziej

var userEmail = $(newsletterForm.find('input').eq(1)); //--- tak używamy w Jquery

//var userName = $(newsletterForm.email); // sprawdzić w konsoli co się dzieje

newsletterForm.on('submit', function (event) {
   
    event.preventDefault();
    
    var name = userName.val();
    
    var email = userEmail.val();
    
    console.log(name,email);
    
});