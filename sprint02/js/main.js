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