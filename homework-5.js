// Сделать сайт, Кнопки: сделать текст большим, сделать текст зачеркнутым, сделать текст наклонённым, 
// поле ввода для текста. Когда пользователь вводит текст, текст должен появится внизу 
// поля ввода после нажатия на одну из кнопок с применённым стилем. Стили могут применяться 
// друг за другом. Повторное нажатие на кнопку, отменяет стиль. Добавить два поля ввода: 
// копировать с и копировать по. И кнопку копировать. По нажатию на кнопку происходит 
// копирование части текста, указанной в диапазоне. Текст копируется с применёнными стилями и отображается рядом.
// Добавить валидацию на диапазон копирования, добавить валидацию на поле ввода текста

const btn1 = document.querySelector('.homework_btn_1'),
      btn2 = document.querySelector('.homework_btn_2'),
      btn3 = document.querySelector('.homework_btn_3'),
      btn4 = document.querySelector('.homework_btn_4'),
      input1 = document.querySelector('.value_1'),
      input2 = document.querySelector('.value_2'),
      input3 = document.querySelector('.value_3'),
      resultValue = document.querySelector('.result_value_1'),
      resultValueCopy = document.querySelector('.result_copy_value');

let value_1, value_2, value_3, valueCopy;

input1.addEventListener('input', () => value_1 = input1.value);
input2.addEventListener('input', () => value_2 = input2.value);
input3.addEventListener('input', () => value_3 = input3.value);

      
const onClickBigText = () => {
    if (value_1 && !resultValue.classList.contains('big')) {
        value_1 = value_1.toUpperCase();
        resultValue.classList.add('big');
        resultValueCopy.classList.add('big');

        if (valueCopy) {
            valueCopy = valueCopy.toUpperCase();
            resultValueCopy.innerHTML = valueCopy;
        }

        resultValue.innerHTML = value_1;

    } else if (value_1 && resultValue.classList.contains('big')) {
        value_1 = value_1.toLowerCase();
        resultValue.classList.remove('big');
        resultValueCopy.classList.remove('big');

        if (valueCopy) {
            valueCopy = valueCopy.toLowerCase();
            resultValueCopy.innerHTML = valueCopy;
        }

        resultValue.innerHTML = value_1;
    }
}

const onClickStrikethroughText = () => {
    if (value_1 && !resultValue.classList.contains('crossedOut')) {
        resultValue.classList.add('crossedOut');
        resultValueCopy.classList.add('crossedOut');
        resultValue.innerHTML = value_1;

    } else if (value_1 && resultValue.classList.contains('crossedOut')) {
        resultValue.classList.remove('crossedOut');
        resultValueCopy.classList.remove('crossedOut');
        resultValue.innerHTML = value_1;
    }
}

const onClickItalicText = () => {
    if (value_1 && !resultValue.classList.contains('italic')) {
        resultValue.classList.add('italic');
        resultValueCopy.classList.add('italic');
        resultValue.innerHTML = value_1;

    } else if (value_1 && resultValue.classList.contains('italic')) {
        resultValue.classList.remove('italic');
        resultValueCopy.classList.remove('italic');
        resultValue.innerHTML = value_1;
    }
}

const onClickCopyText = () => {
    if (value_2 <= value_1.length && value_3 <= value_1.length && value_2 >= 0 && value_3 >= 0) {
        if (value_2 = 1) {
            value_2 = 0;
        }
        valueCopy = value_1.split('').slice(value_2, value_3).join('');
        resultValueCopy.innerHTML = valueCopy;
    }

}

btn1.addEventListener('click', onClickBigText);
btn2.addEventListener('click', onClickStrikethroughText);
btn3.addEventListener('click', onClickItalicText);
btn4.addEventListener('click', onClickCopyText);