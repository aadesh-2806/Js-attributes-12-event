const v2 = document.querySelector('#v2');

v2.onclick = function(){
    console.log('you jzndnv');
    console.log('sjzhduhdfzg');
}

v2.onmouseenter = function(){
    console.log('you jzndnvzdshgfgh gifhgiunhiuhef');
    console.log('sjzhduhdfzg yuguy FUgyuA g iYG g uGYUGUYUU uoG fg');
}
//just by hovering

const v3 = document.querySelector('#v3');
v3.addEventListener('mouseup' , function(){
    alert('clicked');
})

function twist(){
    console.log("twist")
}

function shout(){
    console.log("shout")
}

const tasButton = document.querySelector('#tas')

tasButton.onclick = twist;
tasButton.onclick = shout;
//because of last property overwritti   ng so : 

tasButton.addEventListener('click' , twist , {once:true})
//causes one time print and than only shout print twice

tasButton.addEventListener('click' , shout)

const button = document.querySelector('#button');
const h1 = document.querySelector("h1");

function randomColor(){
    const r= Math.floor(Math.random()*255);
    const g= Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    return `rgb(${r} , ${g} , ${b})`;
}

button.addEventListener('click' , function(){
    h1.innerText = randomColor();
    document.querySelector('body').bgColor = randomColor();
    h1.style.color = randomColor();
})

const btn = document.querySelectorAll('#btn');
for(let bt of btn){
    bt.addEventListener('click', function() {
        console.log('clicked');
        bt.style.backgroundColor = randomColor();
    })    
}

const head = document.querySelectorAll('#head');
for(let he of head){
    he.addEventListener('click', cols)    
}
function cols(){
    console.log(this);
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();

}
const inp = document.querySelector('input');
inp.addEventListener('keydown' , function(){
    console.log('keyDown');
})
inp.addEventListener('keyup' , function(X){
    console.log('keyUp');
    console.log(X.key);     //tells char key
    console.log(X.code);    //tells it code
})
window.addEventListener('keyup' , function(x){              //for ind doc
    switch(x.code){
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
    }
})

const tweet = document.querySelector('#tweet')

tweet.addEventListener('submit' , function (e) {
    e.preventDefault();                                 //donot allow to go to next page in this case//////////////////////////////

    // const userInput = document.querySelector("#tweet")[0];
    // const userPass = document.querySelector("#tweet")[1];
    // console.log(userInput.value , userPass.value);
    
    const userInput = tweet.elements.username.value;
    const userPass = tweet.elements.password.value;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(userInput);
    newTweet.append(bTag);
    newTweet.append(`-${userPass}`);
    console.log(newTweet);

    const ul = document.querySelector('ul');
    ul.append(newTweet);
    alert("submitted");             //but allow to go to next page
})
const li = document.querySelector('.tweetCont');

li.addEventListener('click' , function(e){
        e.target.remove();       //l.remove();
})


const input = document.querySelector('.input')
/*
input.addEventListener('change' , function(e){                    //change than it is printed if pr and next same than no
    console.log("bsahfsbhds");
})
*/
input.addEventListener('input' , function(e){                       //print at each key
    console.log("bsahfsbhds");
    h1.innerText = input.value;
})


const container = document.querySelector('.container');
const cont_btn = document.querySelector('.cont_btn');

cont_btn.addEventListener('click',function(e){
    container.style.backgroundColor = randomColor();
    e.stopPropagation();                                    //stop further chances of hiding on clicking it///////////////////////
})
container.addEventListener('click',function(){
    container.classList.toggle('hide');                     //hide the one
})


const nav_btn = document.querySelectorAll('.nav_btn');
// const nav_btn1 = document.querySelector('.nav_btn1');
const next = document.querySelector('.next');
const link = document.querySelectorAll('.link');
for(let n of nav_btn){
    n.addEventListener('click' , function(){
        for(let l of link){
            l.classList.toggle('hide');
        }
        next.classList.toggle('hide')
        for(let r of nav_btn){
            r.classList.toggle('hide');
        }
    })
    
}

// nav_btn1.addEventListener('click' , function(){
//     for(l of link){
//         l.classList.toggle('hide');
//     }
//     next.classList.toggle('hide')
//     nav_btn.classList.toggle('hide')
//     nav_btn1.classList.toggle('hide')
// })