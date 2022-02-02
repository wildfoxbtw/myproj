// let tf = +prompt('Fahrenheit t = ')
// let tc = (tf-32)*5/9
// console.log('Celcium = ' + tc.toFixed(2))

// let a1 = +prompt('A1 = ')
// let b1 = +prompt('B1 = ')
// let c1 = +prompt('C1 = ')
// let a2 = +prompt('A2 = ')
// let b2 = +prompt('B2 = ')
// let c2 = +prompt('C2 = ')

// let y = (c2*a1 - c1*a2)/(b2*a1 - b1*a2)
// let x = (c1 - b1*y)/a1

// alert(`The result is: x = ${x.toFixed(2)}; y = ${y.toFixed(2)}.`)

// let x = +prompt('Enter x:')
// let y = 13*(x**3)-2*(x**4)+(10/x)-5

// if (x == 0 || isNaN(x)){
//     alert('FATAL ERROR')
// } else {
//     alert(`y = ${y.toFixed(2)}.`)
// }

// let x1 = +prompt('x1 = ')
// let y1 = +prompt('y1 = ')
// let x2 = +prompt('x2 = ')
// let y2 = +prompt('y2 = ')

// if (Math.abs(x1-x2)==2 && Math.abs(y1-y2)==1 || Math.abs(x1-x2)==1 && Math.abs(y1-y2)==2){
//     alert('Can')
// } else {
//     alert('Cannot')
// }

// let sum = 0
// let count = 0
// let num = +prompt('Enter the number:')
// while(num >=1){
//     sum += num%10
//     num = Math.trunc(num/10)
//     count = count + 1
// }

// alert(`Sum = ${sum}; Count = ${count}`)

// let d = 10000
// let n = 0
// while (d <= 99999){
//     if (d%5 == 0){
//         n = n + 1
//     }
//     d = d + 1
// }
// alert(`Result is ${n}`)

// let n1 = +prompt('Enter number = ')
// let n2 = 0
// while (n2 < n1){
//     n2++
    
// }

// let cars = ['bmw', 'mers', 'lada', 'tesla', 'ford', 'toyota']
// // alert(cars)
// // alert(cars[2])
// // cars[2]='nisan'
// // alert(cars)
// // console.log(cars.length)
// // cars.pop()
// // alert(cars)
// // cars.push('subaru')
// // alert(cars)
// // cars.shift()
// // alert(cars)
// // cars.unshift('audi')
// // alert(cars)
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

// let styles = ['jazz', 'blouse']
// alert(styles)

// styles.push('rock-`n`-roll')
// alert(styles)

// let l = styles.length
// styles[Math.trunc(l/2)] = 'classics'
// alert(styles)

// styles.shift()
// alert(styles)

// styles.unshift('raggae')
// styles.unshift('rap')
// alert(styles)

let num = []
while(1 == 1){
    let a = +prompt('Enter smthing')
    if(a === '' || isNaN(a) || a === null){break}
    num.push(+a)
}
let sum = 0
for(number of num){
    sum += number
}
console.log(sum)