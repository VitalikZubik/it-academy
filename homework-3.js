// 1. Палиндром — слово, предложение или последовательность символов, 
//которая абсолютно одинаково читается как в привычном направлении, 
//так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
const pPalindrome = document.getElementById('46'),
      inputPalindrome = document.getElementById('45'),
      btnPalindrome = document.getElementById('47');

let strPalindrome = '';

const palindrome = () => {
    strPalindrome = strPalindrome.toLowerCase();
    strReverse = strPalindrome.split('').reverse().join('');
    
    pPalindrome.innerHTML = strPalindrome === strReverse;
};


inputPalindrome.addEventListener('input', () => {strPalindrome = inputPalindrome.value});
btnPalindrome.addEventListener('click', palindrome);

// 2.Требуется написать функцию, выводящую в консоль числа от 1 до n, 
//где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//вывод fizz вместо чисел, кратных 3;
//вывод buzz вместо чисел, кратных 5;
//вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

const inputFizzBuzz = document.getElementById('48'),
      pFizzBuzz = document.getElementById('49'),
      btnFizzBuzz = document.getElementById('50');

let numFizzBuzz = 0;

const fizzBuzz = () => {
    for (let i = 1; i <= numFizzBuzz; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            pFizzBuzz.innerHTML += ' fizzbuzz,';
        } else if (i % 3 === 0) {
            pFizzBuzz.innerHTML += ' fizz,';
        } else if (i % 5 === 0) {
            pFizzBuzz.innerHTML += ' buzz,';
        } else {
            pFizzBuzz.innerHTML += ` ${i},`;
        }
    }
};

inputFizzBuzz.addEventListener('input', () => { numFizzBuzz = inputFizzBuzz.value});
btnFizzBuzz.addEventListener('click', fizzBuzz);

// 3.