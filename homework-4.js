// 1 написать функцию sum(1)(2)(3)...(n)

const divSum = document.querySelector('.sum_result');

const sum = (a) => {
    let currentNum = a;

    const fn = (b) => {
        currentNum += b;
        return fn;
    }

    // fn.valueOf = () => currentNum;
    fn.toString = () => currentNum;

    return fn;
}


const resultSum = sum(1)(2)(3)(4)(5);

divSum.append(resultSum);

// 2 Написать свой bind()

const obj = {
    name: 'Vitalik'
}

const test = function (phone, email) {
    console.log(`Name: ${this.name}, tel: ${phone}, email: ${email}`);
}

// const bind = (fn, context, ...rest) => {
//     return function (...args) {
//         return fn.call(context, ...rest, ...args);
//     }
// }

const bind = function (fn, context, ...rest) {
    return function (...args) {
        const uniqueId = Date.now().toString();

        context[uniqueId] = fn;

        const result = context[uniqueId](...rest, ...args);

        delete context[uniqueId];

        return result;
    }
    

}

bind(test, obj)(123123, 'g@mail.ru');
bind(test, obj, 123123)('g@mail.ru');
bind(test, obj, 123123, 'g@mail.ru')();

// 3 есть объект:
// {
//     name,
//     surname,
//     phone,
// }
//     сделать массив из 10 подобных объектов, потом добавить к каждому элементу массива id и дату.
//     Сделать таблицу, в которой будут колонки N, Имя, Фамилия, Телефон, Дата.
//     Таблицу динамически создать

