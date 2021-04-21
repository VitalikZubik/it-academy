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

const btnResultTable = document.querySelector('.btn_table'),
      divTable = document.querySelector('.table');

const arrayList = [
    {name: 'Alex', surname: 'Ivanov', phone: 375291234567},
    {name: 'Oleg', surname: 'Ivanov', phone: 375291235467},
    {name: 'Yana', surname: 'Ivanova', phone: 375292134567},
    {name: 'Artem', surname: 'Ivanov', phone: 375291324567},
    {name: 'Ivan', surname: 'Ivanov', phone: 375291234576},
    {name: 'Vitalik', surname: 'Ivanov', phone: 375291234657},
    {name: 'Olya', surname: 'Ivanova', phone: 375291234765},
    {name: 'Anna', surname: 'Ivanova', phone: 375291235467},
    {name: 'Alisa', surname: 'Ivanova', phone: 375292234567},
    {name: 'Petr', surname: 'Ivanov', phone: 375293234567}
];

arrayList.forEach((elem, index) => {
    elem.id = index + 1;
    elem.date = Date();
    return elem;
});

const table = document.createElement('table');

table.insertAdjacentHTML('beforeend', `
                            <thead>
                                <tr>
                                    <td>N</td>
                                    <td>Имя</td>
                                    <td>Фамилия</td>
                                    <td>Телефон</td>
                                    <td>Дата</td>
                                </tr>
                            </thead>
                            `);

arrayList.map(({name, surname, phone, id, date}) => {
    table.insertAdjacentHTML('beforeend', `
                            <tbody>
                                <tr>
                                    <td>${id}</td>
                                    <td>${name}</td>
                                    <td>${surname}</td>
                                    <td>${phone}</td>
                                    <td>${date}</td>
                                </tr>
                            </tbody>
                            `)
});

btnResultTable.addEventListener('click', () => {
    divTable.append(table);
});
