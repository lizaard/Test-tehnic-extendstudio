
$(document).ready(function() {
    var i = 1;
    $('.btn-prev').click(function(){
      if(i > 1){
         $('.slider-wrapper').animate({
          left:'+=600px'
        });
        i--;
      }else if(i == 1){
        $('.slider-wrapper').animate({
          left:'-2400px'
        });
        i=5;
      }
    });
    $('.btn-next').click(function(){
      if(i < 4){
        $('.slider-wrapper').animate({
        left:"-=600px"
      });
        i++;
      }
      else if(i == 4 ){
        $('.slider-wrapper').animate({
         left:"0"
            });
        i=1;
      }
      
    });
    
    var autoSlide =function(){
      if(i < 4){
        $('.slider-wrapper').animate({
        left:"-=600px"
      });
        i++;
      }
      else if(i == 4 ){
        $('.slider-wrapper').animate({
         left:"0"
            });
        i=1;
      }
      
    };
    myInterval = setInterval(autoSlide,2000);
    $('.slider-container').mouseover(function(){
      window.clearInterval(myInterval);
    });
    $('.slider-container').mouseout(function(){
      myInterval = setInterval(autoSlide,2000);
    });
    
});

