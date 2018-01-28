// Task 1
const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
// Task 2-3
    charCount: function setcharCount () {
    	let checkPositiveInteger = (data) => ((data <= 0) && (data%1!==0));
    	do {
    		quantity = prompt(`Введите количество символов`, `Количество символов`);
    	}
    	while (
    		checkPositiveInteger(quantity)
    	)
    	console.log(`Количество введенных символов - ${quantity}`);
    	return quantity;
    },
// Task 4
	task: function createTask () {
		let array = [];
		let randomLetter;
		array.length = keyTrainer.charCount();
		for (let i=0; i<array.length; i++) {
			randomLetter = Math.floor(this.chars.length * Math.random());
			array[i] = this.chars[randomLetter];
		}
// Task 5-6 
	    let inputArr = array.join('');
		let startTask = prompt(`Введите увиденную строку ${inputArr}`);
		keyTrainer.userInput = startTask;
		let errorCounter = 0;
		for (let j=0; j<inputArr.length; j++) {
					if (startTask[j] == inputArr[j]) {
						continue;
					}
					else {
						errorCounter += 1;
					}

		}
// Task 7
		keyTrainer.userErrors = errorCounter;

		if (keyTrainer.userErrors == 0) {
			alert(`Поздравляем символы введены правильно!`);
			console.log(`Поздравляем символы введены правильно!`);
		}
		else {
			alert(`Количество ошибок - ${keyTrainer.userErrors}. Успехов в следующем упражнении!`);
			console.log(`Количество ошибок - ${keyTrainer.userErrors}. Успехов в следующем упражнении!`);
		}
		
		console.log(`Случайная строка - ${inputArr}`);
		console.log(`Введеная строка - ${startTask}`);

	}
}
// Task 8
function run() {
  keyTrainer.task();
}
run()