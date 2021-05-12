"use strict";

console.log('arr' + " - object");

console.log(4 + " - object");

let incr = 10,
    decr = 10;

//++incr; ПРЕФИКСНАЯ ЗАПИСТЬ - оператор инкримента увеличение на единицу
//--decr; наоборот 

console.log(incr++); // ПОСТФИКСНАЯ ЗАПИСЬ incr++  возвратит те же 10
console.log(decr--); 

console.log(++incr); //  префиксная возвращает 11 и 9
console.log(--decr); 

// ОСТАТОК ОТ ДЕЛЕНИЯ ДВУХ ЧИСЕЛ

console.log(5%2);

// СТРОГОЕ И НЕСТРОГОЕ РАВЕНСТВО

console.log(2*4 == 8);  // НЕстрогое равенство
console.log(2*4 == '8'); // все равно вернет труе

console.log(2*4 === '8'); // СТРОГОЕ - по типу данных также сравнение идет - вернет фалсе

//  && И когда 2 или больше -правдивы
//    || или - только хотя бы 1 правдив

const isChecked = true,
        isClose = false;
    
console.log(isChecked && isClose); // вернет фалсе - потому что оба операторы должны быть правдивы
console.log(isChecked || isClose); // вернет труе 

// Оператор ОТРИЦАНИЯ

console.log(isChecked || !isClose); //! поменял значение фалсе на противоположное

console.log(2 + 2 * 2 != '8'); // не равен восьми






