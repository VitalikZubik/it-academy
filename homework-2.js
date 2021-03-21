            // HOMEWORK - 2

//1. Сравнить массивы
// var a=[2,3,5];
// var b=[2,3,5];
// var c=[2,2,3,3,5,6]
// var d=[1,2,3]
const inputArr1 = document.getElementById('13'),
      inputArr2 = document.getElementById('14'),
      btnResultCompare = document.getElementById('15'),
      pCompareResult = document.querySelector('.compare_result');

let resultCompareArrays = '';
let arrA = [],
    arrB = [];

const resultCompare = () => {

    const compareArrays = (arr1, arr2) => {
        if(arr1.length !== arr2.length) {
            return resultCompareArrays = false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i])) {
                return resultCompareArrays = false;
            }
        }

        return resultCompareArrays = true;
    }

    compareArrays(arrA,arrB);
    
    if(resultCompareArrays) {
        pCompareResult.innerHTML = 'Результат: Массивы 1 и 2 равны.';
    } else {
        pCompareResult.innerHTML = 'Результат: Массивы 1 и 2 не равны.';
    }
}
inputArr1.addEventListener('input', () => {arrA = inputArr1.value.toLowerCase().split(', ')});
inputArr2.addEventListener('input', () => {arrB = inputArr2.value.toLowerCase().split(', ')});

btnResultCompare.addEventListener('click', resultCompare);


// 2. Вывести уникальные эелементы (цикл в цикле) и (используя {} (Map или HashMap)) 
// использовать for, forEach, reduce 
// const myArray1 = [55,77,66];
// const myArray2 = [55,11,15,77,66,99,100,110];



// 3. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. 
// Найдите два решения.
const inputStr = document.getElementById('16'),
      pSolution1 = document.getElementById('17'),
      pSolution2 = document.getElementById('18'),
      btnResultUpCase = document.getElementById('19');

let solution1 = '',
    solution2 = '',
    str = '';

const capitalizeFirstCharacter = () => {
    solution1 = str[0].toUpperCase() + str.slice(1);

    solution2 = str.split('');
    solution2[0] = solution2[0].toUpperCase();
    solution2 = solution2.join('');

    pSolution1.innerHTML = `Решение 1: ${solution1}`;
    pSolution2.innerHTML = `Решение 2: ${solution2}`;
}

inputStr.addEventListener('input', () => {str = inputStr.value});
btnResultUpCase.addEventListener('click', capitalizeFirstCharacter);


// 4. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') 
// не используя цикл.
const inputReverse = document.getElementById('20'),
      pReverse = document.getElementById('21'),
      btnResultReverse = document.getElementById('22');

let strReverse = '';

const reverseStr = () => {
    strReverse = strReverse.split('').reverse().join('');

    pReverse.innerHTML = `Результат: ${strReverse}`;
}

inputReverse.addEventListener('input', () => {strReverse = inputReverse.value});
btnResultReverse.addEventListener('click', reverseStr);

// 5. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.
const pFloor = document.getElementById('23'),
      pCeil = document.getElementById('24'),
      btnResultSqrt = document.getElementById('25');

const myObj = {},
      number = 587;


const getSqrt = () => {
    myObj.floor = Math.floor(Math.sqrt(number));
    myObj.ceil = Math.ceil(Math.sqrt(number));

    pFloor.innerHTML = `Floor: ${myObj.floor}`;
    pCeil.innerHTML = `Ceil: ${myObj.ceil}`;
}

btnResultSqrt.addEventListener('click', getSqrt)

// 6. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число 
// (Math.min, Math.max).
const pMin = document.getElementById('26'),
      pMax = document.getElementById('27'),
      btnResultMinMax = document.getElementById('28');
      
const myArrNum = [4, -2, 5, 19, -130, 0, 10];

let min = 0,
    max = 0;

const getMinMaxNum = () => {
    min = Math.min(...myArrNum);
    max = Math.max(...myArrNum);

    pMin.innerHTML = `Min: ${min}`;
    pMax.innerHTML = `Max: ${max}`;    
}

btnResultMinMax.addEventListener('click', getMinMaxNum);

// 7. Заполните массив 10-ю случайными целыми числами. Посчитайте их сумму с помощью reduce, 
// создайте новый массив в котором будут квадраты этих чисел, используя map, 
// оставьте отфильтруйте четные, отсортируйте по убыванию их квадратных корней 
// (целой части корня).

// 8. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. 
// Выведите с его помощью слово 'jQuery'.

// 9. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. 
// Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, 
// а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и 
// среду по английски (пусть понедельник - это нулевой день).