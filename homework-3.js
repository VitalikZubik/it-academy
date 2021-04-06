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

// 3.Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, 
// причем регистр букв не имеет значения. Учитываются лишь символы; 
// пробелы или знаки препинания в расчет не берутся.

const inputStr1Anagram = document.getElementById('51'),
      inputStr2Anagram = document.getElementById('52'),
      pAnagram = document.getElementById('53'),
      btnAnagram = document.getElementById('54');

let str1 = '',
    str2 = '';

const anagram = () => {
    pAnagram.innerHTML = [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');
};

inputStr1Anagram.addEventListener('input', () => {str1 = inputStr1Anagram.value});
inputStr2Anagram.addEventListener('input', () => {str2 = inputStr2Anagram.value});

btnAnagram.addEventListener('click', anagram);

// 4. Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности
//  Фибонначи, причем n — число, которое передается в качестве аргумента функции.
const inputFibonacci = document.getElementById('55'),
      pFibonacci = document.getElementById('56'),
      btnFibonacci = document.getElementById('57');
let numFibonacci;

const fibonacci = () => {
    const result = [0, 1];

    for (let i = 2; i <= numFibonacci; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
    }

    pFibonacci.innerHTML = result[numFibonacci];
}

inputFibonacci.addEventListener('input', () => {numFibonacci = inputFibonacci.value});
btnFibonacci.addEventListener('click', fibonacci);

// 5.Реализуйте класс Student (Студент), который будет наследовать от класса User, 
// подобно тому, как это сделано в теоретической части урока. 
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), year (год поступления в вуз). 
// Класс должен иметь метод getFullName() (наследуется от User), 
// с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), 
// который будет выводить текущий курс студента (от 1 до 5). 
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
// Текущий год получите самостоятельно.

