

var allproducts = document.querySelectorAll(".product")

var content = document.querySelector(".content")

var pricecontent = document.querySelector(".pricecontent")

var btn1 = document.querySelector("#btn1")

var line = document.querySelector("br")

var totalprice = 0 ;



allproducts.forEach(
    function(item){
        item.onclick = function(){
           
            totalprice +=parseInt(item.getAttribute("price"))
            content.innerHTML +=item.textContent  + " / "
            if(content.innerHTML !=""){
                btn1.style.visibility = "visible"
                pricecontent.style.visibility= "visible"
            }
            
            }
            
        }
)

btn1.onclick = function(){

    pricecontent.innerHTML = "Total Price : " + totalprice;
}

