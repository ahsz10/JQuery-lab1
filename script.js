
$(function(){
    $("section img").on("click",function(){
        console.log("hi");
        $(this).next("p").slideToggle(1000);
    });
});

function slider(){
    $current = $(".slider img.onDisplay");
     if($current.length==0){
        $(".slider img:firstchild").addClass("onDisplay");
     }else{
        $next = $current.removeClass("onDisplay").next();
        if($next.length == 0){
            $(".slider img:first-child").addClass("onDisplay");
        }else{
            $next.addClass("onDisplay");
        }
     }
};

var intervalIn = setInterval(slider,5000);
$(".stop").on("click",function () {
    if (this) {
        clearInterval(intervalIn);
    }
});

