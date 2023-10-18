//list to contain the card items
let cartList = [];

// function to convert the cartItem properties to a single object
function cartItem(name, price, imageURL) {
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
}

//function to handle the add-to-cart click
function handleAddToCart(id) {
    let nameClass = ".name" + id;
    let priceClass = ".price" + id;
    let imageClass = ".image" + id;

    let name = document.querySelector(nameClass).textContent;
    let price = Number(document.querySelector(priceClass).textContent);
    let imageURL = document.querySelector(imageClass).getAttribute('src');

    addToCartList(name, price, imageURL)
} 

//function to make a cartItem object and add it to cartList
function addToCartList(name, price, imageURL) {
    let new_cartItem = new cartItem(name, price, imageURL);
    cartList.push(new_cartItem);
    console.log(cartList)
    display_cartList();
}

//function to display the cart list items in the cart section
function display_cartList() {
    let cartItem_container = document.querySelector('.cart-items-container');
    cartItem_container.textContent = "";

    for (let i = 0; i<cartList.length; i++) {
        let cart_Item = document.createElement('div');
        cart_Item.setAttribute('class', 'cart-item');
        cart_Item.innerHTML= `
                                <div class="cart-item-img">
                                    <img src=${cartList[i].imageURL} >
                                </div>
                                <div class="cart-item-info">
                                    <div>
                                        <span><strong>ITEM: </strong>${cartList[i].name}</span>
                                    </div>
                                    <div>
                                        <label for="qualities"><strong>Quality: </strong></label>
                                        <input type="number" value="1">
                                    </div>
                                    <div>
                                        <span><strong>PRICE: </strong>R${cartList[i].price}</span>
                                    </div>
                                    <button role="button" class="remove-btn" onclick="deleteCartItem(${i})">REMOVE</button>
                                </div>
                             `
    
        cartItem_container.appendChild(cart_Item);
    }   
}

//function to handle deleting an item from the cart
function deleteCartItem(index) {
    cartList.splice(index, 1);
    display_cartList();
}
