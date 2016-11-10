
// Initialize your app
var myApp = new Framework7();



// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
    keyboardControl:true,
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
  prevButton: '.swiper-button-prev',
}); 






$.get('/fact-data/animal.txt',function(data){
    var lines = data.split("~");
    var arraytest = data.split("~").length; 
  
   for(var i = arraytest-1 ; i >= 0 ; i--){
       
      
        var example = 
                    "<div class='swiper-slide'>" +
                            "<span>"+lines[i]+"</span>"+
                        "</div>";
 
        $(".swiper-wrapper").prepend(example); 
   }
    
});

//opening the panels
 $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });

// closing the panels
  $$('.panel-close').on('click', function (e) {
        myApp.closePanel();
    });
 

// Bottom Bar Icon functionality 




function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".fa-clone").click(function(){
    copyToClipboard(".swiper-slide-active");
    $(".text-copied").fadeIn(500).fadeOut(2000);
    
});


mySwiper.on('slideChangeEnd',function(){
    $("#bottom-btn-copy-hidden").fadeIn(500);
    $("#bottom-btn-forward-hidden").fadeIn(500);
    $("#bottom-btn-favorite-hidden").fadeIn(500);
    $("#bottom-btn-share-hidden").fadeIn(500);
    //alert(mySwiper.activeIndex);
    
    
})

/*$("#bottom-btn-favorite-hidden").click(function(){
    var temp=$(".swiper-slide-active").text(); 
   favorite.push(temp);
    localStorage.setItem("favorite",JSON.stringify(favorite)); 
    
   
}); */




/*$("#bottom-btn-favorite-hidden").click(
function(){
    var temp=$(".swiper-slide-active").text(); 
   favorite.push(temp);
    localStorage.setItem("favorite",JSON.stringify(favorite));  
    
    
});

*/


/*  $("#bottom-btn-favorite-hidden").on('click',function(){

if($("#bottom-btn-favorite-hidden").attr('data-click-state') == 1) {  
    
$("#bottom-btn-favorite-hidden").attr('data-click-state', 0)
/*Change this to your own property / function - second function State 2

$(".swiper-slide-active").addClass("favorite-dislike").removeClass("favorite-like");
     $("#bottom-btn-favorite-hidden").css("color","white");
    
    
    
    
    
/*Click State 1 finish
} else {
$("#bottom-btn-favorite-hidden").attr('data-click-state', 1)
/*Change this to your own property / function - first function State 
$(".swiper-slide-active").addClass("favorite-like").removeClass("favorite-dislike");
    $("#bottom-btn-favorite-hidden").css("color","red");



/*Click State 2 finish
}

}); */




    







///Code use to give each class and index number and use document.ready function because
// the swiper slide have to append first before signing the index number :)// 
$(document).ready(function(){
    
$(".swiper-slide").addClass(function(index){
    return ""+index;
});
    
   


})

