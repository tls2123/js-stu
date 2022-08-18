let a = 2;
// setTimeout(() => {
//     a = 5;
//     console.log(a);
// }, 0);

//promise로 변경하는 방법 
//promise가 아닌 값을 프로미스로 바꾸는 것을 많이 연습해야한다. 
//프로미스란 실행은 바로 하는데 결과 값은 내가 원할 때 사용할 수 있는 것

const p = new Promise((resolve, reject) => {
    console.log('제일 먼저'); //여긴 동기
    setTimeout(() => {
        a = 5;
        console.log(a);
        resolve(a) //resolve에서 return 값 결과값을 담은다.
    }, 0);
});

//다른 코드를 사용하고
console.log('다양한 다른 코드들__________________') 

p.then((result) => {
    console.log('result', result);
});