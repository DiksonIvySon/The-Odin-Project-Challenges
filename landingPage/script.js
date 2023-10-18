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
}

