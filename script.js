            // Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны

const numberOne = parseInt(prompt('Введите первое число'));

const numberTwo = parseInt(prompt('Введите второе число'));

function compareNumbers(numberOne, numberTwo){
   
    if (numberOne > numberTwo){
        console.log(1);
    }
    else if (numberOne < numberTwo){
        console.log(-1);
    }
    else {
        console.log(0);
    }
}
compareNumbers(numberOne, numberTwo);


            // Написать функцию, которая вычисляет факториал переданного ей числа

let j, n, b;

function getFactorial(n){
   b = 1;
   for(j = 0; j<n; j++){
       b = b*(j+1);
   }
   console.log(b);
}
getFactorial(6);



            // Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149

let numOne, numTwo, numThree, resultNumber;
function convertNumbers(numOne, numTwo, numThree){
    resultNumber = parseInt(numOne +""+ numTwo +""+ numThree);
    console.log(resultNumber);
}
convertNumbers(1, 4, 9);


            // Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата

function culcSquare(a, b){

    rectSquare1 = a * b; 
        if(b === undefined){
            rectSquare2 = a * a;
    }
    console.log(rectSquare1 || rectSquare2);
}
culcSquare(3, 5);


            //Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей


function perfectNum(p){
    let sum = 0;
    for (let i = 1; i < p; i++){
        if(p % i === 0){
            sum = sum + i;
        }
    }
    if (p === sum){
        console.log(p + "-" + "совершенное число");
    }
    else {
        console.log(p + "-" + "несовершенное число");
    }
}
perfectNum(parseInt(prompt('Введите число')));


            //Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет

function checkNumber (a, b){  
   for (let i = b; b>a; i--){
      b = b - 1;
      console.log(b);

      function perfectNum(p){
         let sum = 0;
         for (let i = 1; i < p; i++){
            if(p % i === 0){
               sum = sum + i;
            }
         }
            if (p === sum){
               console.log(p + "-" + "совершенное число");
            }
         }
         perfectNum(b);
   }
}

checkNumber ((prompt('Введите первое число диапазона', 0)), 
(prompt('Введите второе число диапазона', 0)))



            // Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function layOut_Time (hhh, mmm, sss){
   console.log(hhh + ":" + mmm + ":" + sss);
}

layOut_Time(prompt('Введите часы', 00)), prompt('Введите минуты', 00), prompt('Введите секунды', 00));


        // Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах

function toSeconds (hh, mm, ss){
   let second = hh*3600 + mm*60 + ss;
   console.log(second + " " + "сек.");
}
toSeconds ( parseInt(prompt('Введите часы', 0)), parseInt(prompt('Введите минуты', 0)), parseInt(prompt('Введите секунды', 0)));


         //Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»

function layOutTime (ttt){
   let hours, minits, seconds;

   hours = Math.floor(ttt/3600);

   minits =  Math.floor((ttt % 3600) / 60);

   if ((hours % 60) < 60){
      seconds =  Math.floor(ttt % 3600) % 60;
   }
   console.log(hours + " " + "ч." + " " + minits + " " + "мин." + " " + seconds + " " + "сек.");
}
layOutTime(parseInt(prompt('Введите время в секундах', 0)));


               //Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

   
function toSecond (hh_one, mm_one, ss_one, hh_two, mm_two, ss_two){
   let secondFirstDay = +(hh_one*3600 + mm_one*60 + ss_one);
   console.log(secondFirstDay + " " + "сек.");

   let secondSecondDay = +(hh_two*3600 + mm_two*60 + ss_two);
   console.log(secondSecondDay + " " + "сек.");

   let  differenceSecond = Math.abs(secondFirstDay - secondSecondDay);
   console.log(differenceSecond + " " + "сек.");


   layOutTime(differenceSecond);

function layOutTime (ttt){
   let hours, minits, seconds;

   hours = Math.floor(ttt/3600);

   minits =  Math.floor((ttt % 3600) / 60);

   if ((hours % 60) < 60){
      seconds =  Math.floor(ttt % 3600) % 60;
   }
   console.log(hours + " " + "ч." + " " + minits + " " + "мин." + " " + seconds + " " + "сек.");
}
}
toSecond ( parseInt(prompt('Введите часы первого дня', 0)), parseInt(prompt('Введите минуты первого дня', 0)), parseInt(prompt('Введите секунды первого дня', 0)), parseInt(prompt('Введите часы второго дня', 0)), parseInt(prompt('Введите минуты второго дня', 0)), parseInt(prompt('Введите секунды второго дня', 0)));
