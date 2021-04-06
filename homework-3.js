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
