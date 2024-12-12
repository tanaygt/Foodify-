//variable declaration
var addBtn = document.getElementsByClassName("bton")
var cardQuantity = document.querySelector(".quantity")
var item = document.querySelectorAll(".card")
console.log(item);
var cart = document.querySelector(".crt-on")
var cb = document.getElementsByClassName("cart-box")


var qty = 0;
cardQuantity.textContent = qty;

for (var items of addBtn){
    items.addEventListener('click',function check(){
        console.log("hello")
        qty++;
        console.log(qty);
        cardQuantity.textContent = qty;

    })

}

cart.addEventListener('click',function(){
    console.log("hemlojiiiiiiiii");
    cb.style.width = '250px'
})
