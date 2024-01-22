const menuBar = document.querySelector('.menuBar');
// navbar
menuBar.addEventListener('click',toggle);
function toggle(){
    let navbar = document.querySelector('.navbar');
    let left = document.querySelector('.left')
    let ul = document.querySelector('.ul');
    let line = document.querySelectorAll('.line');
    line.forEach(line=>{
        line.classList.toggle('cross')
    })
    ul.classList.toggle('active')
    navbar.classList.toggle('nav-direct');
    left.classList.toggle('resize')
}

// Adding to cart and storing in local storage
const bagContainerElement = document.querySelector('.bag-items-container');
 let cartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
function onload(){
     cartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
    displayCartItems();
}
onload();

function displayCartItems(itemToDisplay = cartItems){
    let bagHtml = ``;
    if(itemToDisplay){

        itemToDisplay.forEach(item=>{
           
           bagHtml +=` <div class="dish">
            <img src="${item.image}" alt="" />
            <div class="Summary">
              <h1 class="satisfy">${item.name}</h1>
              <h3>Price of 1kg: $${item.price}</h3>
              <h3> Amount: ${item.count}</h3>
              <button class="order-now" onclick='removeFromCart(${item.id})'>Remove From Cart</button>
            </div>
          </div>`;
        });
        bagContainerElement.innerHTML = `${bagHtml}`;
    }
    return;
}
// removing from itms from cart and also updating the local storage 
function removeFromCart(idToremove){
    console.log(idToremove)
    if(cartItems){
        let upadtedCart = cartItems.filter((item)=>{
          if(item.id !== idToremove){
              return item
          }
        });
        cartItems = [...upadtedCart];
      
        console.log(cartItems)
        localStorage.setItem('CartItems',JSON.stringify(cartItems));
        cartItems = JSON.parse(localStorage.getItem('CartItems'));
        displayCartItems();
    }
}
