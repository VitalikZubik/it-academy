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
