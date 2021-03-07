if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-primary shop-item-button1')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
//add items

function addItem() {
    var itemName = document.forms["myForm"]["fname"].value;
    var itemCategory = document.forms["myForm"]["category"].value;
    var itemSize = document.forms["myForm"]["Size"].value;
    var itemColor = document.forms["myForm"]["color"].value;
    var itemPrice = document.forms["myForm"]["fprice"].value;
    var itemImage = document.forms["myForm"]["fimage"].value;
    var nbr = clothes.length++;

    prodArt();
    artcTxt(nbr);
    artcLast(nbr);
    range(k, itemName, itemColor, itemSize, itemPrice, itemImage);
    editMenuDisplay(nbr);
    deleteItemBtn(nbr);
}