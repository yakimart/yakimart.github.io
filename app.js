let productsCountEl = document.getElementById("bag");

let addToCartButtons = document.querySelectorAll(".add-to-cart")

console.log(addToCartButtons);

for(let i = 0; i < addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener("click", 
		function(){
			let prevProductsCount = +productsCountEl.textContent;
			productsCountEl.textContent = prevProductsCount + 1;
		}
		)
}



//LIKED BUTTON JS

//ДОВІЛЬНИЙ ЧИСЛОВИЙ МАСИВ, ВИВЕСТИ СУМУ ЕЛЕМЕНТІВ МАСИВУ,

//ДОВІЛЬНИЙ ЧИСЛОВИЙ МАСИВ, НАЙБІЛЬШЕ ЗНАЧЕННЯ МАСИВУ ВИВКСТИ