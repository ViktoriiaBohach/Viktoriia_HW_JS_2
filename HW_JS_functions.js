
//Домашка:

/*
1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
    */
   
    function checkMenu(hamburg, fri) {
        if (hamburg >= 4 && fri >= 1) {
            console.log('Ми поїли');
        }
        else {
            console.log('Ми йдемо в інше кафе');
          return; 
        }
      }
    checkMenu(3,0);
   
/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
    */
    function checkPrice(minPrice, maxPrice) {
        if (minPrice>= 1000 && maxPrice <= 1900) {
            console.log('true');
        }
        else {
            console.log('false');
          return; 
        }
      }
      checkPrice(1000,1900);

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

    // 1st case

    function checkPrice1(minPrice1, maxPrice1) {
        if (minPrice1 < 1000 && minPrice1 != 1000 && maxPrice1 > 1900 && maxPrice1 != 1900 ) {
            console.log('true');
        }
        else {
            console.log('false');
          return; 
        }
      }
      checkPrice1(900,2000);


    // 2nd case
    function checkPrice2(minPrice2, maxPrice2) {
        if (minPrice2 <= 1000  && maxPrice2 >= 1900 ) {
            console.log('true');
        }
        else {
            console.log('false');
          return; 
        }
      }
      checkPrice2(800,2100);

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

function getSeasons(s){
    switch(s){
        case 0: console.log('winter');
        break;
        case 1: console.log('spring');
        break;
        case 2: console.log('summer');
        break;
        case 3: console.log('autumn');
        break;
             }
           }
getSeasons(1);

    /*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел середнє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

    function middleValue(minValue, middleValue, maxValue){
        if(middleValue < minValue && minValue< maxValue || maxValue < minValue && minValue < middleValue){
            console.log('the least value');
        }
         else if (minValue<maxValue && maxValue>middleValue || middleValue<maxValue && maxValue>minValue){
            console.log('the greatest value');
        }
        else { //if(minValue < middleValue && middle< maxValue || maxValue < middleValue && middleValue < minValue)
            console.log('the middle value');
            return;
        }
    }
          middleValue(8,6,4);
     
    /*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

    function checkWeekNumber(weeknum){
        switch(weeknum){
            case 1:
                console.log('Monday');
                break;
            case 2: 
                console.log('Tuesday');
                break;
            case 3:
                console.log('Wednesday');
                break;
            case 4:
                    console.log('Thursday');
                    break;
             case 5:
                    console.log('Friday');
                    break;
            case 6:
                    console.log('Saturday');
                        break;
            case 7:
                    console.log('Sunday');
                        break;
                 }
               }
               checkWeekNumber(7);

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

    function checkMathOperation (d, e){
        switch(checkMathOperation){
            case d+e:
                console.log(d+e)
                break;
            case d-e: 
                console.log(d-e)
                break;
            case d*e:
                console.log(d*e)
                break;
            case d/e:
                console.log(d/e)
                break;
             }
             return (d/e);
           }
        console.log(checkMathOperation(9,3));

               
/*8.  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/

function replaceAll(string, search, replaceWith) {
    return string.split(search).join(replaceWith);
  }
  console.log(replaceAll('How are you, Ivan!',/a|u|y|i|e|o|A|O|U|Y|I|E/g, ''));  

/*9. Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)*/

    let f = 'метр';
    let g = 'метри';
    let h = 'метрів';
    let i = 'кілометр';
    let j = 'кілометри';
    let k = 'кілометрів';    
          function ConverseMeterKilometer (x){
            if(x === 1){
                console.log(x + ' ' + f + ' це ' + x/1000 + ' ' + i);  
          }
          else if (x>=2 && x<=4){
            console.log(x + ' ' + g + ' це ' + x/1000 + ' ' + j);  
      }
      else {
        console.log(x + ' ' + h + ' це ' + x/1000 + ' ' + k);  
  }
}
    ConverseMeterKilometer (4);
