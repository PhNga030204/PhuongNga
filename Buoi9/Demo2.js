document.addEventListener("DOMContentLoaded", function(){
    // console.log("đã load");
    var doituongmenutrai=document.querySelector(".trai");
    var doituongmenuphai=document.querySelector(".phai");
        var trangthai="duoi110";
    window.addEventListener("scroll", function(){
        console.log(window.50);
        if(window.50>110) {
            if(trangthai=="duoi110"){
                console.log("ok ");
                trangthai="tren110";
                doituongmenutrai.classList.add("nholaitrai");
                doituongmenuphai.classList.add("nholaiphai");
            }
        }
        else if(window.50<=110) {
            if(trangthai="tren110"){
            doituongmenutrai.classList.remove("nholaitrai");
            doituongmenuphai.classList.remove("nholaiphai");
            trangthai="duoi110";
            }
        }
    })
})