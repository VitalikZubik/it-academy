const btnRef1 = document.querySelector('.homework_1'),
      btnRef2 = document.querySelector('.homework_2'),
      btnRef3 = document.querySelector('.homework_3'),
      btnRef4 = document.querySelector('.homework_4'),
      wraperHomework1 = document.querySelector('.wraper_homework_1'),
      wraperHomework2 = document.querySelector('.wraper_homework_2'),
      wraperHomework3 = document.querySelector('.wraper_homework_3'),
      wraperHomework4 = document.querySelector('.wraper_homework_4');

btnRef1.addEventListener('click', () => {
    if(wraperHomework1.classList.contains('not_active_homework')) {
        wraperHomework1.classList.remove('not_active_homework');
        wraperHomework2.classList.add('not_active_homework');
        wraperHomework3.classList.add('not_active_homework');
        wraperHomework4.classList.add('not_active_homework');
        btnRef1.classList.add('active_ref');
        btnRef2.classList.remove('active_ref');
        btnRef3.classList.remove('active_ref');
        btnRef4.classList.remove('active_ref');
    } else {
        return
    }
});

btnRef2.addEventListener('click', () => {
    if(wraperHomework2.classList.contains('not_active_homework')) {
        wraperHomework1.classList.add('not_active_homework');
        wraperHomework2.classList.remove('not_active_homework');
        wraperHomework3.classList.add('not_active_homework');
        wraperHomework4.classList.add('not_active_homework');
        btnRef1.classList.remove('active_ref'); 
        btnRef2.classList.add('active_ref');
        btnRef3.classList.remove('active_ref'); 
        btnRef4.classList.remove('active_ref'); 
    } else {
        return
    }
});

btnRef3.addEventListener('click', () => {
    if(wraperHomework3.classList.contains('not_active_homework')) {
        wraperHomework1.classList.add('not_active_homework');
        wraperHomework2.classList.add('not_active_homework');
        wraperHomework3.classList.remove('not_active_homework');
        wraperHomework4.classList.add('not_active_homework');
        btnRef1.classList.remove('active_ref'); 
        btnRef2.classList.remove('active_ref'); 
        btnRef3.classList.add('active_ref');
        btnRef4.classList.remove('active_ref'); 
    } else {
        return
    }
});

btnRef4.addEventListener('click', () => {
    if(wraperHomework4.classList.contains('not_active_homework')) {
        wraperHomework1.classList.add('not_active_homework');
        wraperHomework2.classList.add('not_active_homework');
        wraperHomework3.classList.add('not_active_homework');
        wraperHomework4.classList.remove('not_active_homework');
        btnRef1.classList.remove('active_ref'); 
        btnRef2.classList.remove('active_ref'); 
        btnRef3.classList.remove('active_ref');
        btnRef4.classList.add('active_ref'); 
    } else {
        return
    }
});
                //  HOMEWORK - 1
// 1. Даны кнопки. Привяжите к каждой кнопке событие по клику, 
// которое будет считать количество нажатий по кнопке и выводить его в текст кнопки.
// Количество нажатий для каждой кнопки должно хранится в замыкании
const btnOne = document.querySelector('.btn_one'),
      btnTwo = document.querySelector('.btn_two');

const onBtn = (elem) => {
    let count = 0;
    
    return () => {
        count +=1;
        elem.innerHTML = count;
        return count;
    }
}

const onBtnOne = onBtn(btnOne);
const onBtnTwo = onBtn(btnTwo);

btnOne.addEventListener('click', onBtnOne);
btnTwo.addEventListener('click', onBtnTwo);


// 2. Дан массив цветов. Даны абзацы.
//  По первому нажатию на абзац он должен покраситься в первый цвет из массива, 
//  по второму нажатию - во второй и так далее. Все абзацы работают независимо.
const p1 = document.getElementById('1'),
      p2 = document.getElementById('2'),
      p3 = document.getElementById('3'),
      p4 = document.getElementById('4');

const arrayColor = ['red', 'blue', 'yellow', 'orange', 'green', 'purple', 'pink', 'white'];

const setColor = (elem) => {
    let count = 0;
    
    return () => {
        if (count === 8){
            count = 0;
        }
        elem.style.color = arrayColor[count];
        count++;        
        return count;
    }
};

const colorP1 = setColor(p1);
const colorP2 = setColor(p2);
const colorP3 = setColor(p3);
const colorP4 = setColor(p4);

p1.addEventListener('click', colorP1);
p2.addEventListener('click', colorP2);
p3.addEventListener('click', colorP3);
p4.addEventListener('click', colorP4);

//3. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
// Решите задачу через замыкания - в замыкании должен хранится массив чисел,
// которые уже были сгенерированы функцией.

const pNum = document.getElementById('5');
      

const getRandomNum = () => {
    const usedNums = [];
    let newNum;
    return () => {
        const getRandomNumber = () => {
            newNum = Math.floor(Math.random() * 100 + 1);
        } 

        getRandomNumber();

        for(let i=0; i<usedNums.length;i++){
            if (usedNums[i] === newNum) {
                i = -1;
                getRandomNumber();
            } else if (usedNums.length === 100) {
                alert('No more numbers.');
                return;
            }

        };

        usedNums.push(newNum);
        if(usedNums.length === 100) {
            pNum.innerHTML += `${newNum}. `;
        } else {
            pNum.innerHTML += `${newNum}, `;
        }
        
    }    
}

const randomNum = getRandomNum();

const btnRandom = document.querySelector('.btn_random').addEventListener('click', randomNum);

// 4.  Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
// на доп балл: использовать метод массива reduce.
const btnResultMultiplication = document.querySelector('.multiply'),
      spanResultMultiplication = document.getElementById('6'); 

const arrayNum = [2, 3, 4, 5];

const onMultiplication = () => {    
    // let result = 1;
    // for(let i=0; i<arrayNum.length; i++) {
    //     result = result * arrayNum[i];
    // }

    const result = arrayNum.reduce((sum, curent) => {
        return sum * curent; 
    },1)

    spanResultMultiplication.innerHTML = ` ${result}`;
}

btnResultMultiplication.addEventListener('click', onMultiplication);

//5. Аналогично предыдущей. 
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. 
// Запишите ее в переменную result. На доп балл: использовать метод массива reduce
const btnResultAddition = document.querySelector('.addition'),
      spanResultAddition = document.getElementById('7') 

const arrayNumbers = [1, 2, 3, 4, 5];

const onAddition = () => {    
    // let result = 0;
    // for(let i=0; i<arrayNumbers.length; i++) {
    //     result = result + arrayNumbers[i];
    // }

    const result = arrayNumbers.reduce((sum, curent) => {
        return sum + curent; 
    },0)

    spanResultAddition.innerHTML = ` ${result}`
}

btnResultAddition.addEventListener('click', onAddition);

// 6. Дан массив c числами, например: [10, 20, 30, 50, 235, 3000]. 
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
const spanResult = document.querySelector('.result'),
      btnSearchNumbers = document.querySelector('.search_numbers');

const arrNum = [10, 20, 30, 50, 235, 3000];
const onResultSearch = () => {
    const result = arrNum.filter(num => ['1','2','5'].includes(num.toString()[0]));

    spanResult.innerHTML = result;
}

btnSearchNumbers.addEventListener('click', onResultSearch);

//7. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. 
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
const spanSquareRoot = document.querySelector('.result_square_root'),
      btnSquareRoot = document.querySelector('.square_root')

const arrNumbers = [4, 2, 5, 19, 13, 0, 10];

const onSquareRoot = () => {
    let sum = 0;
    for (let i=0; i<arrNumbers.length; i++) {
        sum = sum + Math.pow(arrNumbers[i], 3);
    }

    const result = Math.sqrt(sum);
    spanSquareRoot.innerHTML = result;
}

btnSquareRoot.addEventListener('click', onSquareRoot);

// 8. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b
const btnDivision = document.getElementById('9'),
      spanDivision = document.getElementById('8');

const onDivision = () => {
    const a = 10,
          b = 3;
    
    const result = a % b;

    spanDivision.innerHTML = result;
}

btnDivision.addEventListener('click', onDivision);

// 9. Даны переменные a и b. Проверьте, что a делится без остатка на b. 
// Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

const btn = document.getElementById('12'),
      p = document.querySelector('.division_result'),
      inputA = document.getElementById('10'),
      inputB = document.getElementById('11');

let a = 0,
    b = 0;

const onClickDivision = () => {        
    const result = a % b;
    if (result === 0) {
        p.innerHTML = `Делится. Результат деления:${result}`; 
    } else {
        p.innerHTML = `Делится с остатком. Результат деления: остаток от деления ${result}.`;
    }
}
inputA.addEventListener('input', () => {a = inputA.value});
inputB.addEventListener('input', () => {b = inputB.value});
btn.addEventListener('click', onClickDivision);