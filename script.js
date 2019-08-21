// // // //FIRST TASK

// let period = prompt("Пора року", "");
// let message = (period == "зима") ? ("Зараз зима"):
// 	(period == "Зима") ? ("Зараз " + period):
// 	(period == "ЗИма") ? ("Зараз " + period):
// 	(period == "зИма") ? ("Зараз " + period):
// 	(period == "весна") ? ("Зараз " + period):
// 	(period == "літо") ? ("Зараз " + period):
// 	(period == "осінь") ? ("Зараз " + period):
// 	(period == "зИма") ?("Зараз " + period):
// 	("Пори року " + period + " не існує");
// alert(message);




// // // //SECOND TASK
// let result, rate;
// let sum = +prompt("Введіть суму", "");
// let term = +prompt("Введіть термін", "");

// if (term >= 1 && term <= 2){
// 	rate = 10;
// } else if (term >= 3 && term < 9){
// 	rate = 15;
// } else if (term >= 9 && term <= 11){
// 	rate = 17;
// } else if (term >= 12){
// 	rate = 18;
// }

// alert(rate);

// if (rate != null){result = ((sum * rate) / 100) / 12;
// } else{result = "invalid value";}

// alert("your monthly profit: " + result);






// // //THIRD TASK

// let a = +prompt("Enter first value", "");
// let b = +prompt("Enter second value", "");

// let message;

// if ((a > 3 && a < 12)  || (b > 5 && b < 13)){
// 	message = "TRUE";
// } else {message = "FALSE";}

// alert(message);






function countMax(){
	let value_0 = +prompt("Enter first value", ""),
		value_1 = +prompt("Enter second value", ""),
		value_2 = +prompt("Enter third value", "");

	let max = ((value_0 >= value_1) && (value_0 >= value_2)) ? value_0 :
			  ((value_1 >= value_0) && (value_1 >= value_2)) ? value_1 :
			  value_2;

	let min = ((value_0 <= value_1) && (value_0 <= value_2)) ? value_0 :
			  ((value_1 <= value_0) && (value_1 <= value_2)) ? value_1 :
			  value_2;


	console.log("Minimal value: " + min + "\n" + "Maximal value: " + max);
} 




function calcPriceWithDisc(){
	let total = +prompt("Enter total price", ""),
		discount = (total < 1000) ? 0.03 :
				   ((total >= 1000) && (total <= 5000)) ? 0.05 :
				   0.1;
	let totalWithDisc = total - (total * discount);

	console.log("Your discount is: " + discount * 100  + "%\n" + "Your total with discount is: " + totalWithDisc);
}









// // // // typeof() - перевірка типу оператора
// // // // Number(a) - перетворити на число

// // // // Оператори: математичні, порівняння, умовні, логічні, побітові

// // // // == - нестроге (5 = "5") 
// // // // === - строге (5 != "5")



