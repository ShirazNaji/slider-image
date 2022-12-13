/* global $ , jQuery ,alert */
$(function () {
    
    
	'use strict';
    
   
    ///////////////////////////////////////////////////////////// Gallery  ////////////////////////////////////////////
    
                        //////////////////////////// add images size////////////////////////////
    
    
    var numofthumbnails = $('.thumbnails').children().length; /// num of img thambnails
    var margibbetweeinth ='.5';
    var totalmarginbetweenthab = (numofthumbnails - 1) * margibbetweeinth;
    var widththahmb =  (100 - totalmarginbetweenthab) / numofthumbnails;
    $('.thumbnails img').css({
        'width':widththahmb + '%',
        'margin-right': margibbetweeinth + '%' 
        
    });
    
    
    console.log(widththahmb)
    
                        ////////////////////////////////////////////////click///////////////////
    
    
     $('.thumbnails img').on('click', function () {
           
          $(this).addClass('active').siblings().removeClass('active');
           
           $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);
       });
    
    
    
                      /////////////////////////////// < > /////////////////////////////////////
    
    
    
    $('.master-img .fa-chevron-right').on('click', function () {
        
        if($('.thumbnails .active').is(':last-child')){
            
            
            $('.thumbnails img:first-child').click();
           
           } else {
        
        $('.thumbnails .active').next().click();
           }
        
    });
    
    
    $('.master-img .fa-chevron-left').on('click', function () {
        
        
        if($('.thumbnails .active').is(':first-child')){
            
            
            $('.thumbnails img:last-child').click();
           
           } else {
        
           $('.thumbnails .active').prev().click();
        
           }
        
        
        
    });

});