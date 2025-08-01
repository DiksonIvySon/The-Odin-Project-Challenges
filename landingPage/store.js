//list to contain the card items
let cartList = [];

// function to convert the cartItem properties to a single object
function cartItem(name, price, imageURL) {
    this.name = name;
    this.price = price;
    this.quantity = 1;
    this.quantity_price = price;
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
                                        <input type="number" value="${cartList[i].quantity}" id="${i}" onchange="handleQuantityChange(${i})">
                                    </div>
                                    <div>
                                        <span><strong>PRICE: </strong>R${cartList[i].quantity_price}</span>
                                    </div>
                                    <button role="button" class="remove-btn" onclick="deleteCartItem(${i})">REMOVE</button>
                                </div>
                             `
    
        cartItem_container.appendChild(cart_Item);
    }   
    //call setCartNumber function
    setCartNumber();
}

//function to handle deleting an item from the cart
function deleteCartItem(index) {
    cartList.splice(index, 1);
    display_cartList();
}

//function to change the price when the quantity when the quantity is changed
function handleQuantityChange(index) {
    let quantity = document.getElementById(index).value;
    let new_price = cartList[index].price * quantity;
    cartList[index].quantity_price = new_price;

    //also change the quantity in the dom
    cartList[index].quantity = quantity;

    //rerender the cartList display
    display_cartList()

}

//function to change the items number in the cart when item is added
function setCartNumber() {
    let items_inCart = cartList.length;
    document.querySelector('#cart-number').textContent = items_inCart;

    //call totalCost function
    totalCost()
}

//function to calculate the total cost and display it
function totalCost() {
    let total_cost = 0; 

    for (i = 0; i < cartList.length; i++) {
        total_cost += cartList[i].quantity_price;
    }
    console.log(total_cost)

    document.querySelector('#total-cost').textContent = total_cost;
}

// working on the view product functionality ......................................................................................
window.onload = function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    }
}

function handleViewProduct(cardID) {
    let popupContainer = document.querySelector(".product-view-popup");
    popupContainer.style.display = "block";
};

function handleCloseViewProduct() {
    let popupContainer = document.querySelector(".product-view-popup");
    popupContainer.style.display = "none";
};


/* Accordion functionality*/
document.addEventListener("DOMContentLoaded", function() {
    let panel1 = document.querySelector(".panel1");
    let panel2 = document.querySelector(".panel2");
    let panel3 = document.querySelector(".panel3");
    let accordion1 = document.querySelector(".accordion1");
    let accordion2 = document.querySelector(".accordion2");
    let accordion3 = document.querySelector(".accordion3");

    function togglePanel(panel) {
        
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    };

    window.handlePanelClick = function(panelNumber) {
        panel1.style.display = "none";
        panel2.style.display = "none";
        panel3.style.display = "none";

        accordion1.className = "accordion accordion1";
        accordion2.className = "accordion accordion2";
        accordion3.className = "accordion accordion3";

        if (panelNumber === "1") {
            togglePanel(panel1);
            accordion1.className = "accordion accordion1 active";
        }else if (panelNumber === "2"){
            togglePanel(panel2);
            accordion2.className = "accordion accordion2 active";
        }else {
            togglePanel(panel3);
            accordion3.className = "accordion accordion3 active";
        };
    };
});
