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

function series(){
    let temp = 0
    let res = []
    for(let i = 0; i < values.length; i++)
        temp += values[i]
    
    for(let i = 0; i < values.length; i++)
        res.push(values[i] / temp)
    
    return res
}

function method_parabol(func ,a, b, n) {
    let h=(b-a)/n;
    let k=0.0;
    let x=a + h
    for (let i = 1; i < n/2 + 1; i++) {
      k += 4*func(x);
      x += 2*h;
    }

    x = a + 2*h;
    for(let i = 1; i < n/2; i++) {
        k += 2*func(x)
        x += 2*h
    }
    return (h/3)*(func(a)+func(b)+k)
}

function func (z) {
    return Math.E ** (-1 * z ** 2 / 2);
}

function laplase(x) {
    return (1 / Math.sqrt(2 * Math.PI)) * method_parabol(func, 0.0, x, 500) 
}

function table1(){
    let res = []
    res.push([])
    res.push([])
    let size = 0
    let tempArr = []
    let temp = 0
    for(let i = 0; i < 10; i++)
        res[0].push([])
    for(let i = 0; i <values.length; i++){
        res[0][i][0] = intervals[0][i]
        res[0][i][1] = intervals[1][i]
        res[0][i][2] = values[i]
    }

    for(let i = 0; i <values.length; i++)
        tempArr.push(intervals[1][i] - (intervals[1][i]-intervals[0][i]) / 2)

    for(let i = 0; i <values.length; i++)
        size += values[i]

    let temp1 = 0;

    for(let i = 0; i <values.length; i++)
        temp1 += tempArr[i] * values[i]
    
    let average = temp1 / size

    let standartDeviation = 0
    let selectiveVariance = 0

    for (let i = 0; i < tempArr.length; i++) 
        temp += values[i] * (tempArr[i] - average) ** 2
    selectiveVariance = temp / size
    standartDeviation = Math.sqrt(selectiveVariance)


    let theorFreqs = []
    let hitChances = []

    for (let i = 0; i < tempArr.length; i++) {
        let f0 = laplase((intervals[0][i] - average) / standartDeviation)
        let f1 = laplase((intervals[1][i] - average) / standartDeviation)

        theorFreqs.push(math.abs(f0 - f1) * size)
        hitChances.push(math.abs(f0 - f1))

    }
    
    
    let array = calcs1(size, average, standartDeviation)
    console.log(array)

    for(let i = 0, j = 0; i <values.length; i++, j += 7){
        res[0][i][3] = array['res'][j]
        res[0][i][4] = array['res'][j + 1]
        res[0][i][5] = array['res'][j + 2]
        res[0][i][6] = array['res'][j + 3]
        res[0][i][7] = array['res'][j + 4]
        res[0][i][8] = array['res'][j + 5]
        res[0][i][9] = array['res'][j + 6]
    }


    res[1].push(array['h0'])
    res[1].push(array['numbers']['degreeOfFreedom'])
    res[1].push(array['numbers']['observedValue'])
    res[1].push(array['numbers']['criticalPoint'])
    
    return res
}

function PirsonPoint (k) {
    let criticalPointValue = 0

    switch (k) {
        case 1: criticalPointValue = 3.84; break
        case 2: criticalPointValue = 5.99; break
        case 3: criticalPointValue = 7.82; break
        case 4: criticalPointValue = 9.49; break
        case 5: criticalPointValue = 11.07; break
        case 6: criticalPointValue = 12.59; break
        case 7: criticalPointValue = 14.07; break
        case 8: criticalPointValue = 15.510; break
        case 9: criticalPointValue = 16.92; break
        case 10: criticalPointValue = 18.310; break
    }

    return criticalPointValue
}
function calcs1(size, average, standartDeviation){
    let res = []
    let observedValue = 0
    
    for (let i = 0; i < values.length; i++) {
        let xi = intervals[0][i]
        let xiNext = intervals[1][i]
        let ni = values[i]

        let x1 = (xi - average) / standartDeviation
        let x2 = (xiNext - average) / standartDeviation

        let x1Sign = false
        let x2Sign = false

        if(x1 < 0){
            x1 = -x1
            x1Sign = true
        }

        if(x2 < 0){
            x2 = -x2
            x2Sign = true
        }

        let f1 = laplase(x1)
        let f2 = laplase(x2)

        if(x1Sign) f1 = -f1
        if(x2Sign) f2 = -f2

        let pi = f2 - f1
        let niS = size * pi
        let ki = ((ni - niS) ** 2) / niS

        res.push(x1, x2, f1, f2, pi, niS, ki)
        observedValue += ki
    }
    let k = values.length - 3
    let criticalPoint = PirsonPoint(k)


    return {
        h0: observedValue < criticalPoint, 
        res,
        numbers: {
            observedValue,
            criticalPoint,
            degreeOfFreedom: k
        }
    
    }
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
    res += '<label>H0: ' + table1()[1][0] + '</label><br>' 


    res += '<label>Iteration table:</label>'
    res += '<table>'

    res += '<tr>'
    res += '<td>Xi</td>' + '<td>Xi+1</td>' + '<td>ni</td>' + '<td>x1</td>' + '<td>x2</td>'
        + '<td>F(x1)</td>' + '<td>F(x2)</td>' + '<td>pi</td>' + '<td>ni\'</td>' + '<td>Ki\'</td>'
    res += '</tr>'

    
    for(let i = 0; i < intervals[0].length; i++){
    res += '<tr>'
        for(let j = 0; j < 10; j++)
            res += '<td>' + table1()[0][i][j] + '</td>'
    res += '</tr>'
    }
    
    res += '</table>'

    res += '<label>Power of freedom: ' + table1()[1][1] + '</label>'
    res += '<label>Observed value P: ' + table1()[1][2] + '</label>'
    res += '<label>Critical point p: ' + table1()[1][3] + '</label>'

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