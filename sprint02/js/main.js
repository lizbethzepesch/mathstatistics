function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

var start = 360.8
var end = 361.8
var value = getRandomInt(1, 50)
var extraItervals = 0

var start2 = 0.308
var end2 = 1.308
var value2 = getRandomInt(1, 50)
var extraItervals2 = 0

var intervals = []
var values = []

var intervals2 = []
var values2 = []

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

function task1(){
    let res = ''

    res = '<label>Interval statistical series:</label>'

    res += '<table>'
        for(let i = 0; i < intervals; i++)
    res += '</table>'
}

function parseInput(){
    intervals.push([])
    intervals.push([])

    for(let i = 0; i < intervals; i++){
        intervals[0].push(document.getElementsByClassName('start')[i])
        intervals[1].push(document.getElementsByClassName('end')[i])
        values.push(document.getElementsByClassName('value')[i])
    }
    console.log(values)
}parseInput()