// let div = document.createElement('div')
// div.className = 'message'
// div.innerHTML = 'hello, world! from js'
// div.style.background = 'white'
// div.style.marginTop = '15px'

// document.body.append(div)


// let divOrange = document.createElement('div')
// divOrange.innerHTML='orange'
// divOrange.style.marginBottom = '15px'
// divOrange.style.border = "5px dotted orange"
// divOrange.style.width = '500px'



// div.insertAdjacentHTML('beforebegin', 'before')
// div.insertAdjacentHTML('afterbegin', 'hello!')
// div.insertAdjacentHTML('beforeend', 'goodbye')
// div.insertAdjacentElement('afterend', divOrange)

// divOrange.remove()

// let list = document.querySelector('.list-num')
// list.before('before') //строка before перед списком
// list.after('after')

// let liFirst = document.createElement('li')
// liFirst.innerHTML = 'prepend'
// list.prepend(liFirst)

// let liLast = document.createElement('li')
// liLast.innerHTML = 'append'
// list.append(liLast)

// let listLi = document.querySelectorAll('li')
// console.log(listLi);

// listLi.forEach(element => {
//     element.innerHTML = 'pizza'
// });

let inputWidth = document.querySelector('.input-width')
let inputHeight = document.querySelector('.input-height')
let inputColor = document.querySelector('.input-color')
let inputStep = document.querySelector('.input-step')
let btnCreate = document.querySelector('.btn-create')
let btnClear = document.querySelector('.btn-clear')

let btnTop = document.querySelector('.btn-top')
let btnRight = document.querySelector('.btn-right')
let btnLeft = document.querySelector('.btn-left')
let btnBottom = document.querySelector('.btn-bottom')
let mLeft = 0
let mTop = 0

btnCreate.addEventListener('click', createDiv)
btnRight.addEventListener('click', moveRight)
btnLeft.addEventListener('click', moveLeft)
btnTop.addEventListener('click', moveTop)
btnBottom.addEventListener('click', moveBottom)
btnClear.addEventListener('click', clearDiv)

let newDiv, iWidth, iHeight, iColor
let existance = 0
function createDiv(){
    iWidth = +inputWidth.value
    iHeight = +inputHeight.value
    iColor = inputColor.value
    iStep = +inputStep.value

    if(iWidth>=50 && iWidth<=500 && iHeight>=50 && iHeight<=500 && existance==0){
        existance = 1

        newDiv = document.createElement('div')
        newDiv.style.background = iColor
        newDiv.style.width = iWidth + 'px'
        newDiv.style.height = iHeight + 'px'

        document.querySelector('.container').prepend(newDiv)
    }
    else {
        alert('you can`t create block or does already exist')
    }
    
}

function clearDiv(){
    newDiv.style.height = 0 + 'px'
    existance = 0
}

function moveRight(){
    iStep = +inputStep.value
    if (mLeft + iWidth < 1000){
        mLeft += iStep
        newDiv.style.marginLeft = mLeft + 'px'
    } else{
        alert('you`re unable to move right')
    }
    
}

function moveLeft(){
    iStep = +inputStep.value
    if (mLeft > 0){
        mLeft -= iStep
        newDiv.style.marginLeft = mLeft + 'px'
    } else{
        alert('you`re unable to move left')
    }
    
}

function moveBottom(){
    if (mTop + iHeight < 1000){
        mTop += iStep
        newDiv.style.marginTop = mTop + 'px'
    } else{
        alert('you`re unable to move down')
    }
    
}

function moveTop(){
    if (mTop > 0){
        mTop -= iStep
        newDiv.style.marginTop = mTop + 'px'
    } else{
        alert('you`re unable to move up')
    }
    
}