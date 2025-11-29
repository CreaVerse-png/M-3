// // alert('hi');
// // console.log('code');
// // var a = 2;
// // console.log(a);

// // var a = 3;
// // console.log(a);
// let a = 10;
// console.log(a);
// a = 11;
// console.log(a);

// let a = 10;
// let b = 11;
// let a_a= 5;
// let $ = 10;
// let myName = 3;
// let MyName = 7;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// let a = 1+2+3;
// alert (a);

// let a = 10;
// let b = 2;
// let c = a-b;
// alert (c);

// let a = 8;
// let b = 3; 
// let c = a + b;
// let d = c-d;
// let result = c-d;
// alert (result);
// let name = 'Rafo';
// let surname = 'Ohanov';
// alert (name + ' ' + surname);

// let str = '!!!';
// alert (str);
// let text = 'java';
// let text1 = 'script';
// alert (text + text1);

// console.log('A' > 'a');
// console.log('a' > 'z');

let divClick = document.getElementById('divClick');
let count = 0;
divClick.onclick = function () {
    count++;

    if (count % 2) {
        divClick.style.backgroundColor = 'blue';
        divClick.style.border = '1px solid green'
    } else if (count == 2) {
        divClick.style.backgroundColor = 'orange';
        divClick.style.border = 'none';
        divClick.style.backgroundPositionX = '986px';

    } else {
        divClick.style.opacity = '0.5';
        divClick.style.backgroundPositionY = '432px';
    }
}


