function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

let start = 360.8
let end = 361.8
let value = getRandomInt(1, 50)
let extraItervals = 0

function myAddInterval(){
    extraItervals++
    let newInterval = `<tr  id="interval` + extraItervals+ `">
                    <td><input type="text" id="start" value='`+ start + `'></td>
                    <td><input type="text" id='end' value='` + end + `'></td>
                    <td><input type="text" id="value" value='` + value + `'></td>
                </tr> `
    
    document.querySelector('#table').innerHTML += newInterval

    start++
    end++
    value = getRandomInt(1, 30)
}


function myDelInterval(){
    if(!extraItervals) return

    document.querySelector('#interval' + extraItervals).remove()
    start--
    end--
    extraItervals--
}



let start2 = 0.308
let end2 = 1.308
let value2 = getRandomInt(1, 50)
let extraItervals2 = 0

function myAddInterval2(){
    extraItervals2++
    let newInterval = `<tr  id="interval` + extraItervals2+ `">
                    <td><input type="text" id="start" value='`+ start2 + `'></td>
                    <td><input type="text" id='end' value='` + end2 + `'></td>
                    <td><input type="text" id="value" value='` + value2 + `'></td>
                </tr> `
    
    document.querySelector('#table2').innerHTML += newInterval

    start2++
    end2++
    value2 = getRandomInt(1, 30)
}


function myDelInterval2(){
    if(!extraItervals2) return

    document.querySelector('#interval' + extraItervals2).remove()
    start2--
    end2--
    extraItervals2--
}