const btns = document.getElementsByClassName("btn_comprar");
let price;

for (btn of btns) {
  btn.addEventListener("click", (e) => {
    let id = e.target.parentNode.id;
    let product = document.getElementById(`${id}`);
    price = product.children[1].innerText.slice(-5);
    document.cookie = `price = ${price}; expires=''; path=/pages`;
  });
}
