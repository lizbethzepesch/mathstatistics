var samples = 0

function addSample() {
    samples++
    document.querySelector('.extraSamples').innerHTML = ''
    for (let i = 0; i < samples; i++)
        document.querySelector('.extraSamples').innerHTML += '<br><br> <input type="text" class="sample' + i + '" value="">'
}

function delSample() {
    if (samples === 0) return
    samples--
    document.querySelector('.extraSamples').innerHTML = ''
    for (let i = 0; i < samples; i++)
        document.querySelector('.extraSamples').innerHTML += '<br><br> <input type="text" class="sample' + i + '" value="">'
}

function sampleFilter(sample, arr) {
    sample.sort(function (a, b) {
        return a - b
    })
    for (let i = 0; i < sample.length; i++) {
        if (!arr[0].includes(sample[i]))
            arr[0].push(sample[i])
        for (let j = 0; j < sample.length; j++)
            if (arr[0][j] === sample[i])
                if (arr[1][j])
                    arr[1][j]++
                else arr[1][j] = 1
    }
    for (let i = 0; i < arr[0].length; i++)
        arr[0][i] = parseFloat(arr[0][i])

}

function task1(sample, name) {
    let res = ''
    let headers = ['Sample', 'Frequence', 'Accumulated frequence', 'Relative frequence', 'Cumulative relative frequence']
    let arr = []
    let third = 0
    let fifth = 0
    arr.push([])
    arr.push([])

    sampleFilter(sample, arr)

    res += '<table>'
    res += '<caption>Task 1 for ' + name + '</caption>'
    res += '<tr>'
    for (let header of headers)
        res += '<th>' + header + '</th>'
    res += '</tr>'

    for (let i = 0; i < arr[0].length; i++) {
        res += '<tr>'
        res += '<td>' + arr[0][i] + '</td>'
        res += '<td>' + arr[1][i] + '</td>'

        third += arr[1][i]

        res += '<td>' + third + '</td>'
        res += '<td>' + (arr[1][i] / sample.length).toFixed(5) + '</td>'

        fifth += (arr[1][i] / sample.length)

        res += '<td>' + fifth.toFixed(5) + '</td>'
        res += '</tr>'
    }

    res += '</table>'
    res += '<br>'
    return res

}

function task2(sample, name) {
    if (name === 'sampleA')
        document.querySelector('.task2').innerHTML = ''

    let res = '<caption>Task 2 for ' + name + '</caption>'
    let arr = []
    arr.push([])
    arr.push([])

    sampleFilter(sample, arr)

    document.querySelector('.task2').innerHTML += res + '<canvas id="chart' + name + '" width="60" height="40">'

    setTimeout(() => {
        new Chart(document.querySelector('#chart' + name).getContext('2d'), {
            type: 'line',
            responsive: false,
            maintainAspectRatio: false,
            data: {
                labels: arr[0],
                datasets: [{
                    label: name,
                    backgroundColor: 'rgb(48, 92, 100)',
                    borderColor: 'rgb(48, 92, 100)',
                    data: arr[1]
                }]
            }
        })
    }, 0)


    document.querySelector('.task2').innerHTML += '<br>'

    document.querySelector('.task2').innerHTML += '<canvas id="chartBar' + name + '" width="60" height="40">'

    setTimeout(() => {
        new Chart(document.querySelector('#chartBar' + name).getContext('2d'), {
            type: 'bar',
            responsive: false,
            maintainAspectRatio: false,
            data: {
                labels: arr[0],
                datasets: [{
                    label: name,
                    backgroundColor: 'rgb(48, 92, 100)',
                    borderColor: 'rgb(48, 92, 100)',
                    data: arr[1]
                }]
            }
        })
    }, 0)

    document.querySelector('.task2').innerHTML += '<div class="emp" id="empirical' + name + '"></div>'

    let emp = []
    let val = parseFloat((arr[1][0] / sample.length).toFixed(5))
    emp.push([])
    emp.push([])

    emp[0][0] = val
    emp[1][0] = 'x ≤ ' + arr[0][0]

    for (let i = 0; i < arr[0].length; i++) {

        val += parseFloat((arr[1][i + 1] / sample.length).toFixed(5))

        emp[0].push(val)
        emp[1].push(arr[0][i] + ' < x ≤ ' + arr[0][i + 1])
    }
    emp[0][emp[0].length - 1] = 1.00000
    emp[1][emp[0].length - 1] = 'x > ' + arr[0][arr[0].length - 1]

    let outemp = '<label>F*(x) =</label>'

    outemp += '<table>'
    for (let i = 0; i < emp[0].length; i++)
        outemp += '<tr>' + '<td>' + emp[0][i] + '</td>' + '<td>' + emp[1][i] + '</td>' + '</tr>'

    outemp += '</table>'

    document.querySelector('#empirical' + name).innerHTML = outemp
    document.querySelector('.task2').innerHTML += '<br>'
}

function calcsForTask3(sample){
    let res = []
    let temp = 0
    let temp1 = 0
    let temp2 = 0
    let temp3 = 0

    for (let i of sample) 
        temp += (i - math.mean(sample)) ** 2
    temp /= sample.length 
    temp1 = temp
    res.push(temp.toFixed(5))

    res.push(Math.sqrt(Math.abs(temp)).toFixed(5))

    res.push((Math.sqrt(temp) / math.mean(sample)).toFixed(5))

    temp = 0
    for (let i of sample) 
        temp += (i - math.mean(sample)) ** 3
    temp /= sample.length - 1
    temp3 = temp
    res.push(temp.toFixed(5))

    temp = 0
    for (let i of sample) 
        temp += (i - math.mean(sample)) ** 4
    temp /= sample.length - 1
    temp2 = temp
    res.push(temp.toFixed(5))
    
    temp = temp3 / (Math.sqrt(temp1) ** 3)
    res.push(temp.toFixed(5))
    
    res.push(((temp2 / (temp1 * temp1)) - 3).toFixed(5))

    temp = 0
    for (let i = 0; i < sample.length; i++) { 
        temp += (sample[i] - math.mean(sample)) ** 2
    }
    temp /= sample.length - 1
    res.push(temp.toFixed(5))

    res.push(Math.sqrt(temp).toFixed(5))

    return res
}

function task3(sample, name) {
    let res = ''
    let temp = calcsForTask3(sample)

    res += '<table>'
    res += '<caption>Task 3 for ' + name + '</caption>'
    
    res += '<tr><td>Mean:</td><td>' + math.mean(sample).toFixed(5) + '</td></tr>'
    res += '<tr><td>Median:</td><td>' + math.median(sample) + '</td></tr>'
    res += '<tr><td>Mode:</td><td>' + math.mode(sample) + '</td></tr>'
    res += '<tr><td>Sample Standart Variance:</td><td>' + temp[0] + '</td></tr>'
    res += '<tr><td>Sample Standart Deviation:</td><td>' + temp[1] + '</td></tr>'
    res += '<tr><td>Coefficient of variation:</td><td>' + temp[2] + '</td></tr>'
    res += '<tr><td>Central Moment 3:</td><td>' + temp[3] + '</td></tr>'
    res += '<tr><td>Central Moment 4:</td><td>' + temp[4] + '</td></tr>'
    res += '<tr><td>Asymmetry:</td><td>' + temp[5] + '</td></tr>'
    res += '<tr><td>Excess:</td><td>' + temp[6] + '</td></tr>'
    res += '<tr><td>Sample Corrected Variance:</td><td>' + temp[7] + '</td></tr>'
    res += '<tr><td>Sample Corrected Deviation:</td><td>' + temp[8] + '</td></tr>'

    res += '</table>'
    res += '<br>'
    return res

}

function calcsForTask4(sample_){
    let res = []
    let temp = 0
    let temp1 = 0
    let temp2 = 0
    let data = []
    data.push([])
    data.push([])

    sampleFilter(sample_, data)

    

    res.push(temp.toFixed(5))
    res.push(temp1.toFixed(5))
    res.push(Math.sqrt(temp1).toFixed(5))
    res.push((temp + temp * 0.0001).toFixed(5))
    res.push((temp1 + temp1 * 0.0001).toFixed(5))
    res.push(Math.sqrt((temp1 + temp1 * 0.0001)).toFixed(5))


    return res
}

function task4(sample, name) {
    let res = ''
    let temp = calcsForTask4(sample)

    res += '<table>'
    res += '<caption>Task 4 for ' + name + '</caption>'
    
    res += '<tr><td>Expected Value (Moment\'s method):</td><td>' + temp[0] + '</td></tr>'
    res += '<tr><td>Variance Value (Moment\'s method):</td><td>' + temp[1] + '</td></tr>'
    res += '<tr><td>Deviation Value (Moment\'s method):</td><td>' + temp[2] + '</td></tr>'
    res += '<tr><td>Expected Value (Likelihood\'s method):</td><td>' + temp[3] + '</td></tr>'
    res += '<tr><td>Variance Value (Likelihood\'s method):</td><td>' + temp[4] + '</td></tr>'
    res += '<tr><td>Deviation Value (Likelihood\'s method):</td><td>' + temp[5] + '</td></tr>'

    res += '</table>'
    res += '<br>'
    return res

}

function calcsForTask5(sample){
    let res = []
    let temp = 0

    res.push(temp.toFixed(5))
    res.push(temp.toFixed(5))
    res.push(temp.toFixed(5))
    res.push(temp.toFixed(5))
    res.push(temp.toFixed(5))
    res.push(temp.toFixed(5))


    return res 
}

function task5(sample, name) {
    let res = ''
    let temp = calcsForTask5(sample)

    res += '<table>'
    res += '<caption>Task 5 for ' + name + '</caption>'
    
    res += '<tr><td>Expected Value (Central interval):</td><td>' + temp[0] + '</td></tr>'
    res += '<tr><td>Expected Value (Lower interval):</td><td>' + temp[1] + '</td></tr>'
    res += '<tr><td>Expected Value (Upper interval):</td><td>' + temp[2] + '</td></tr>'
    res += '<tr><td>Deviation Value (Central interval):</td><td>' + temp[3] + '</td></tr>'
    res += '<tr><td>Deviation Value (Lower interval):</td><td>' + temp[4] + '</td></tr>'
    res += '<tr><td>Deviation Value (Upper interval):</td><td>' + temp[5] + '</td></tr>'

    res += '</table>'
    res += '<br>'
    return res

}

document.querySelector("input.calculate").addEventListener("click", function () {
    // let functions = [task1, task2, task3, task4, task5]
    let functions = [task4, task5]
    for (let i = 0; i < functions.length; i++) {

        if (i === 1) {
            functions[i](document.querySelector('.A').value.split(' '), 'sampleA')
            functions[i](document.querySelector('.B').value.split(' '), 'sampleB')

            for (let j = 0; j < samples; j++)
                functions[i](document.querySelector('.sample' + j).value.split(' '), 'extraSample' + (j + 1))
            continue
        }
        let res = ''
        res += functions[i](document.querySelector('.A').value.split(' '), 'sampleA')
        res += functions[i](document.querySelector('.B').value.split(' '), 'sampleB')

        for (let j = 0; j < samples; j++)
            res += functions[i](document.querySelector('.sample' + j).value.split(' '), 'extraSample' + (j + 1))
        document.querySelector('div.task' + (i + 1)).innerHTML = res
    }
})