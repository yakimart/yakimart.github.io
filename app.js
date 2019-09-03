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



let likeButtons = document.querySelectorAll(".like");
console.log(likeButtons);

for (let i = 0; i < likeButtons.length; i++){
	likeButtons[i].addEventListener("click", function(){
		if(this.classList.contains("liked")){
			this.classList.remove("liked");
		} else{
			this.classList.add("liked");
		}
	})
}




let decrementButtons = document.querySelectorAll(".decrement-button"),
	incrementButtons = document.querySelectorAll(".increment-button"),
	quantityInputs = document.querySelectorAll(".quantity-input input"),
	minProductCount = 1,
	maxProductCount = 10;




function toogleButtonState(count, i){
	if (count <= 1)  {
		decrementButtons[i].disabled = "true";
	} else{
		decrementButtons[i].disabled = "false";
	}
	if (count >= 10){
		incrementButtons[i].disabled = "true";
	} else{
		incrementButtons[i].disabled = "false";
	}

}




for (let i = 0; i < incrementButtons.length; i++){
	incrementButtons[i].addEventListener("click", function(){
		let currentValue = +quantityInputs[i].value;
		let nextValue = currentValue + 1;
		quantityInputs[i].value = nextValue;
		toogleButtonState(+nextValue, i);

	})}

for (let i = 0; i < decrementButtons.length; i++){
	decrementButtons[i].addEventListener("click", function(){
		let currentValue = +quantityInputs[i].value;
		let nextValue = currentValue - 1;
		quantityInputs[i].value = nextValue;
		toogleButtonState(+nextValue, i);

	})}




//LIKED BUTTON JS

//ДОВІЛЬНИЙ ЧИСЛОВИЙ МАСИВ, ВИВЕСТИ СУМУ ЕЛЕМЕНТІВ МАСИВУ,

//ДОВІЛЬНИЙ ЧИСЛОВИЙ МАСИВ, НАЙБІЛЬШЕ ЗНАЧЕННЯ МАСИВУ ВИВКСТИ