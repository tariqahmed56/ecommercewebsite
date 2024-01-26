const homeDiv = document.querySelector('#home');
const menuBar = document.querySelector('.menuBar');
const filtersElement = document.querySelector('.filters');
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

// home page background changing
const homebg = [2,3,4];
let bg = 0;
function instance(){
    if(bg < homebg.length -1){
        bg++
        // console.log(bg)
        homeDiv.style.background= `#282727 url('./images/homebg${homebg[bg]}.jpg') no-repeat fixed top`;
        homeDiv.style.backgroundSize = 'cover';

    }else{
        bg = 0;
        homeDiv.style.backgroundImage = `url(./images/homebg${homebg[bg]}.jpg)`;
        homeDiv.style.backgroundSize = 'cover';
    }
    // alert('run')
}
    setInterval(instance,2000);

    const dishesContainer =document.querySelector('.dishes-container');
    // array Fast food 
    const data = [
        {
          "id": 1,
          "name": "Margherita Pizza",
          "type": "Pizza",
          "price": 10.99,
          "image": "https://media.istockphoto.com/id/1447478119/photo/beef-supreme-pizza-isolated-on-cutting-board-top-view-on-dark-background-italian-fast-food.webp?b=1&s=170667a&w=0&k=20&c=BN0MVckw5jGVpN7hu9edrN82zSq3gCPklWMDs2qnkB4="
        },
        {
          "id": 2,
          "name": "Cheeseburger",
          "type": "Burger",
          "price": 5.99,
          "image": "https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.webp?b=1&s=170667a&w=0&k=20&c=eHoWSf-8VZbNmfiqwAe8-WdKefLdLAbT_1KpaqHRyqY="
        },
        {
          "id": 3,
          "name": "Chicken Nuggets",
          "type": "Appetizer",
          "price": 4.49,
          "image": "https://media.istockphoto.com/id/1148685363/photo/seasoning-tasty-bruscheta-in-the-kitchen.webp?b=1&s=170667a&w=0&k=20&c=3g3DfWVK6faViAYn9_xQmN63d5o1jQ8rtSgQOj1QG5c="
        },
        {
          "id": 4,
          "name": "Spicy Chicken Sandwich",
          "type": "Sandwich",
          "price": 7.99,
          "image": "https://media.istockphoto.com/id/1474835603/photo/ham-and-cheese-sandwich-in-white-bread.webp?b=1&s=170667a&w=0&k=20&c=xLfdRDSj_KtSTE_JZqz00cLqTCByL0TCrEGzjqoHvJ8="
        },
        {
          "id": 5,
          "name": "French Fries",
          "type": "Side",
          "price": 2.99,
          "image": "https://media.istockphoto.com/id/1496156677/photo/close-up-large-group-of-french-fries-background.webp?b=1&s=170667a&w=0&k=20&c=3oGns0a91cm7QauBuFcpLQdOBQtoY_qBOCAoZAOp2OE="
        },
        {
            "id" : 6,
            "name" : "Chicken Karahi",
            "type": "NonVeg",
            "price" : 6,
            "image" : "images/dish1.jpeg"
        },
        {
            "id" : 7,
            "type" : "NonVeg",
            "name" : "chicken Curry",
            "price": 15.49,
             "image" : 'images/dish2.jpeg'
        },
         {
            "id" : 8,
            "type" : "NonVeg",
            "name" : "chicken Curry",
            "price": 20.00,
             "image" : 'images/dish3.jpeg'
        }, 
        {
            "id" : 9,
            "type" : "NonVeg",
            "name" : "chicken Curry",
            "price": 10.00,
             "image" : 'images/dish4.jpeg'
        },
        {
          "id": 10,
          "name": "Vegetarian Pizza",
          "type": "Pizza",
          "price": 12.99,
          "image": "https://th.bing.com/th/id/OIP.RyF12CjDGrG3YngqLLEc2gHaHa?w=184&h=185&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": 11,
          "name": "Classic Caesar Salad",
          "type": "Salad",
          "price": 8.49,
          "image": "https://th.bing.com/th/id/OIP.8UagT3WWGxruvIOqJTCPeQHaE8?w=184&h=123&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": 12,
          "name": "Shrimp Scampi Pasta",
          "type": "Pasta",
          "price": 14.99,
          "image": "https://th.bing.com/th/id/OIP.9ypSQDAHBgkR0otNYTnD5AHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": 13,
          "name": "Veggie Wrap",
          "type": "Wrap",
          "price": 9.99,
          "image": "https://th.bing.com/th/id/OIP.WSuERtK52yBQW_OEGcXWowHaJK?w=149&h=185&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": 14,
          "name": "BBQ Pulled Pork Sandwich",
          "type": "Sandwich",
          "price": 11.49,
          "image": "https://th.bing.com/th/id/OIP.DDSvbPgWW2zwsL_xEGIvPQHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7"
        }
       
      ]; 
      // stores html products
      let itemsHTML = ``;
// displaying product
function displayProducts(item){
  itemsHTML += `
  <div class="dish" data-type='${item.type}'>
    <img src="${item.image}" alt="" />
    <div class="Summary">
      <h1 class="satisfy">${item.name}</h1>
      <h3>${item.price}</h3>
      <button class="order-now" onclick='addToCart(${item.id})'>Order Now</button>
    </div>
  </div>
  `
}

    data.forEach(item=>{
      displayProducts(item);   
    });
    // separate array for categories to filterOut
   let categories = [];
   data.forEach(category=>{
    if(categories.includes(category.type)){

    }else{
      categories.push(category.type)
    }
  })
  dishesContainer.innerHTML += `${itemsHTML}`;

    // adding UI for filters
    let checkboxHtml = categories.map(category=>`<label for='${category}'><input type='checkbox' data-set-type='${category}' id='${category}' /> ${category}</label>`);
    checkboxHtml.forEach(checkBox=>{
      filtersElement.innerHTML += checkBox;
    });
    
   
    // selecting Checkboxes
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    // adding interactivity in filters
    let filteredItem = [];
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', () => {

            let dataSet = checkBox.dataset.setType;
            if (filteredItem.includes(dataSet)) {
                let toRemove = filteredItem.findIndex(items => items === dataSet);
                filteredItem.splice(toRemove, 1);
                // console.log(filteredItem)
            } else {
                filteredItem.push(dataSet);
            }
            if(filteredItem.length>0){
              itemsHTML = ``;
              filteredItem.forEach(filter=>{
               data.forEach(item=>{
                  if(item.type === filter){
                 displayProducts(item)
                  };
                })
              });
              dishesContainer.innerHTML = `${itemsHTML}`
            }else{
              itemsHTML = '';
              data.forEach(item=>{
                displayProducts(item)
              })
   };
   dishesContainer.innerHTML = `${itemsHTML}`

    });
});

    // add to Cart
   function addToCart(id) {
     cartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
    //  checking If the item is already in the cart
     let existingItem = cartItems.find(existItem => existItem.id === id);
        // updating Cart accordingly if the item is already in the cart or Not
     if(existingItem){
      existingItem.count += 1; 
       
    }else{
     let newItem = data.find(item=> item.id === id);
     if(newItem){
      newItem.count = 1;
      cartItems.push(newItem);
     }
    }
      localStorage.setItem('CartItems', JSON.stringify(cartItems));
      // updating Bag summary Where Price is Shown
      calculateCart();
    
}
