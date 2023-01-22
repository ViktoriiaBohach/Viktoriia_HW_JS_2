
//Домашка:

/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
    */

//1st case
let hamburgers = 4;
let fries = 1;

if((hamburgers >= 4 && fries >= 1)){ // всім вистачає гамбургерів і картоплі
    console.log("Ми поїли")
}

let hamburgers1 = 3;
let fries1 = 1;

if((hamburgers1 <= 4 && fries >= 1)){ // вcім не вистачає гамбургерів, але вистачає картоплі
    console.log("Ми йдемо в інше кафе")
}  

let hamburgers2 = 4;
let fries2 = 0;

if((hamburgers >= 4 && fries2 <= 1)){// вcім вистачає гамбургерів, але не вистачає картоплі
    console.log("Ми йдемо в інше кафе")
} 

let hamburgers3 = 3;
let fries3 = 0;

if((hamburgers3 <= 4 && fries3 <= 1)){ // вcім не вистачає ні гамбургерів, ні картоплі
    console.log("Ми йдемо в інше кафе")
} 

// 2nd case
let hamburgers4 = 4;
let fries4 = 1;

if (hamburgers4 >= 4 && fries4 >= 1){ 
    console.log('Ми поїли')
} 
else {
    console.log('Ми йдемо в інше кафе')
}

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
    */

    let productMinPrice = 1500;
    let productMaxPrice = 1900;
    
    if (productMinPrice >= 1500 && productMaxPrice <= 1900){ 
        console.log('true')
    } 
    else {
        console.log('false')
    }
    
/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    // 1st case
   let productMinPrice1 = 900;
    let productMaxPrice1 = 2000;
    
    if (productMinPrice1 < 1000 && productMinPrice1 != 1000 && productMaxPrice1 > 1900 && productMaxPrice1 != 1900 ){ 
        console.log('true')
    } 
    else {
        console.log('false')
    }

    // 2nd case
    let productMinPrice2 = 800;
    let productMaxPrice2 = 2100;
    
    if (productMinPrice2 <= 1000 && productMaxPrice2 >= 1900){ 
        console.log('true')
    } 
    else {
        console.log('false')
    }
/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

// 1st case

let numericSeason = 4;

if(numericSeason == 1){
    console.log('winter');
}
 else if (numericSeason == 2){
    console.log('spring');
}
else if (numericSeason == 3){
    console.log('summer');
}
else {
    console.log('autumn');
}
 

// 2nd case
    let numberSeason = '1';

    switch(numberSeason){
        case '1':
            console.log('winter')
            break;
        case '2': 
            console.log('spring')
            break;
        case '3':
            console.log('summer')
            break;
        case '4':
                console.log('autumn')
                break;
        default: 
            console.log('no season present')
            break; 
    }

    /*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

    let a = 5;
    let b = 2;
    let c = 1;

    if(a<b){
        console.log('the least value');
    }
     else if (b<c){
        console.log('the greatest value');
    }
    else {
        console.log('the middle value');
    }
     
    /*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/
    let numberWeek = '7';

    switch(numberWeek){
        case '1':
            console.log('Monday')
            break;
        case '2': 
            console.log('Tuesday')
            break;
        case '3':
            console.log('Wednesday')
            break;
        case '4':
                console.log('Thursday')
                break;
         case '5':
                console.log('Friday')
                break;
        case '6':
                console.log('Saturday')
                    break;
        default: 
            console.log('Sunday')
            break; 
    }

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

    let mathOperation = '/';
    let d = 6;
    let e = 3;

    switch(mathOperation){
        case '+':
            console.log(d+e)
            break;
        case '-': 
            console.log(d-e)
            break;
        case '*':
            console.log(d*e)
            break;
        case '/':
            console.log(d/e)
            break;
        default: 
            console.log('This is not a math operation')
            break; 
    }

/*8.  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

const text = 'How are you, Ivan!';
let find = (/(a|u|y|i|e|o|A|O|U|Y|I|E)/g);
let result = text.replace( find , '' );
console.log(result);

/*9. Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)*/

    let x = 1;
    let y = 2;
    let z = 5;
    let f = 'метр';
    let g = 'метри';
    let h = 'метрів';
    let i = 'кілометр';
    let j = 'кілометри';
    let k = 'кілометрів';
    let result2 = x/1000;
    let result3 = y/1000;
    let result4 = z/1000;

    if ('x + " " f'){
    console.log(x + ' ' + f + ' це ' + result2 + ' ' + i)
    };
    if ('y + " " g'){
        console.log(y + ' ' + g + ' це ' + result3 + ' ' + j);
        }
    if ('z + " " h'){
            console.log(z + ' ' + h + ' це ' + result4 + ' ' + k);
            }
            else {
                console.log('no operation result is present');
            }

