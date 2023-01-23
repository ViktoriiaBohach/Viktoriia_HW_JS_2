
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

    let productMinPrice = 1000;
    let productMaxPrice = 1900;
    
    if (productMinPrice >= 1000 && productMaxPrice <= 1900){ 
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
   let price = 1000;
    
    if (price < 1000 || price > 1900 ){ 
        console.log('true')
    } 
    else {
        console.log('false')
    }

    // 2nd case
    let price2 = 1100;
    
    if (!(price2 < 1000 || price2 > 1900) ){ 
        console.log('false')
    } 
    else {
        console.log('true')
    }
/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

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

    let a = 20;
    let b = 60;
    let c = 30;
    let average;

    if(a>b){
        if (a>c){ // a max
           if (b>c)
           console.log(avg = b)
           else
           console.log(avg = c)
        }
        if (a<c){ // c max
            if (b<a)
            console.log(avg = a)
            else
            console.log(avg = b)
         }
        }
    else if(a<b) {
            if (a>c) // b max
               console.log(avg = a)
               else
               console.log(avg = c)
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

    
    let x = 1000;

    if (x===1){
    console.log(x + ' метр' + ' це ' + x/1000 + ' кілометр');
    };
    if (x>=2 && x<=4){
            console.log(x + ' метри' + ' це ' + x/1000 + ' кілометра');
            }
    if (x>=5 && x<=100){
                    console.log(x + ' метрів' + ' це ' + x/1000 + ' кілометрів');
                 }
    else if (x===1000||2000||3000||4000||5000||6000||7000||8000||9000){
                console.log(x + ' метрів' + ' це ' + x/1000 + ' кілометр');      
                }
            

