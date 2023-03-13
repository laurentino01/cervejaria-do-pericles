const ck = document.cookie;
const price = ck.slice(-5);
const checkoutCard = document.getElementById("checkout");
const oldChild = checkoutCard.children[1];
const newChild = document.createElement("p");
newChild.innerText = `Olá! O total a ser pago é: R$ ${price}`;

checkoutCard.replaceChild(newChild, oldChild);
