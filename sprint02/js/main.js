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

function calcs1(){
    let res = []

    return res
}

function series(){
    let res = []

    return res
}

function task1(){
    let res = ''
    let namesIntervals = []

    res += '<h2>Task 1 - Pirson\'s test</h2>'
    res += '<label>Interval statistical series:</label>'

    res += '<table>'
    res += '<tr>'
    for(let i = 0; i < intervals[0].length; i++){
        res += '<td>[' + intervals[0][i] + ', ' + intervals[1][i] + ')</td>'
        namesIntervals.push('[' + intervals[0][i] + ', ' + intervals[1][i] + ')')
    }
    res += '</tr>'

    res += '<tr>'
    for(let i = 0; i < intervals[0].length; i++)
        res += '<td>' + values[i] + '</td>'
    res += '</tr>'

    res += '<tr>'
    for(let i = 0; i < intervals[0].length; i++)
        res += '<td>' + series()[i] + '</td>'
    res += '</tr>'
    res += '</table>'
    document.querySelector('#task1').innerHTML = res
    res = ''


    document.querySelector('#task1').innerHTML += '<canvas id="chart" width="60" height="40">'

    setTimeout(() => {
        new Chart(document.querySelector('#chart').getContext('2d'), {
            type: 'bar',
            responsive: false,
            maintainAspectRatio: false,
            data: {
                labels: namesIntervals,
                datasets: [{
                    label: '',
                    backgroundColor: 'rgb(48, 92, 100)',
                    borderColor: 'rgb(48, 92, 100)',
                    data:values
                }]
            }
        })
    }, 0)

    res += '<br><label>Hypothesis:</label><br>'
    res += '<label>H0: ' + calcs1()[0] + '</label><br>' 


    res += '<label>Iteration table:</label>'
    res += '<table>'

    res += '<tr>'
    res += '<td>Xi</td>' + '<td>Xi+1</td>' + '<td>ni</td>' + '<td>x1</td>' + '<td>x2</td>'
        + '<td>F(x1)</td>' + '<td>F(x2)</td>' + '<td>pi</td>' + '<td>ni\'</td>' + '<td>Ki\'</td>'
    res += '</tr>'

    
    for(let i = 0; i < intervals[0].length; i++){
    res += '<tr>'
        for(let i = 0; i < 10; i++)
            res += '<td>' + values[i] + '</td>'
    res += '</tr>'
    }
    
    res += '</table>'

    res += '<label>Power of freedom: ' + calcs1()[1] + '</label>'
    res += '<label>Observed value P: ' + calcs1()[2] + '</label>'
    res += '<label>Critical point p: ' + calcs1()[3] + '</label>'

    document.querySelector('#task1').innerHTML += res
}

function calcs2(){
    let res = []

    return res
}

function task2(){
    let res = ''

    res += '<h2>Task 2 - Fisher\'s test</h2>'
    res += '<label>Hypothesis:</label>'
    res += '<label>H0: ' + calcs2()[0] + '</label>'
    res += '<label>Power of freedom 1: ' + calcs2()[1] + '</label>'
    res += '<label>Power of freedom 2: ' + calcs2()[2] + '</label>'
    res += '<label>Variance 1: ' + calcs2()[3] + '</label>'
    res += '<label>Variance 2: ' + calcs2()[4] + '</label>'
    res += '<label>Observed value F: ' + calcs2()[5] + '</label>'
    res += '<label>Critical point f: ' + calcs2()[6] + '</label>'


    document.querySelector('#task2').innerHTML = res
    
}


function calcs3(){
    let res = []

    return res
}

function task3(){
    let res = ''

    res += '<h2>Task 3 - Student\'s test</h2>'
    res += '<label>Hypothesis:</label>'
    res += '<label>H0 (Z-test): ' + calcs3()[0] + '</label>'
    res += '<label>H0 (T-test): ' + calcs3()[1] + '</label>'
    res += '<label>Observed value |Z|: ' + calcs3()[2] + '</label>'
    res += '<label>Observed value |T|: ' + calcs3()[3] + '</label>'
    res += '<label>Critical point z: ' + calcs3()[4] + '</label>'
    res += '<label>Critical point t: ' + calcs3()[6] + '</label>'


    document.querySelector('#task3').innerHTML = res
}

function parseInput(){
    intervals.push([])
    intervals.push([])

    for(let i = 0; i < 8 + extraItervals; i++){
        intervals[0].push(parseFloat(document.querySelectorAll('#start')[i].value))
        intervals[1].push(parseFloat(document.querySelectorAll('#end')[i].value))
        values.push(parseFloat(document.querySelectorAll('#value')[i].value))
    }

    intervals2.push([])
    intervals2.push([])

    for(let i = 0; i < 8 + extraItervals2; i++){
        intervals2[0].push(parseFloat(document.querySelectorAll('#start2')[i].value))
        intervals2[1].push(parseFloat(document.querySelectorAll('#end2')[i].value))
        values2.push(parseFloat(document.querySelectorAll('#value2')[i].value))
    }
}

function calc(){
    parseInput()
    task1()
    task2()
    task3()
}

calc()