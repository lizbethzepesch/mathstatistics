var samples = 0

function addSample(){
    samples++
    document.querySelector('.extraSamples').innerHTML = ''
    for (let i = 0; i < samples; i++)
    document.querySelector('.extraSamples').innerHTML += '<br><br> <input type="text" class="sample'+ i +'" value="">'
}

function delSample(){
    if(samples === 0) return
    samples--
    document.querySelector('.extraSamples').innerHTML = ''
    for (let i = 0; i < samples; i++)
    document.querySelector('.extraSamples').innerHTML += '<br><br> <input type="text" class="sample'+ i +'" value="">'
}

function sampleFilter(sample, arr){
   
    for(let i = 0; i < sample.length; i++){
        if(!arr[0].includes(sample[i]))
            arr[0].push(sample[i])
        for(let j = 0; j < sample.length; j++)
            if(arr[0][j] === sample[i])
                if(arr[1][j])    
                    arr[1][j]++   
                else arr[1][j] = 1     
    }
    for(let i = 0; i < arr[0].length; i++)
        arr[0][i] = parseFloat(arr[0][i])

    arr.sort(function(a, b) {
        return a - b
    })
    
}

function task1(sample, name){
    let res = ''
    let headers = ['Sample',	'Frequence', 'Accumulated frequence', 'Relative frequence', 'Cumulative relative frequence']
    let arr = []
    let third = 0
    let fifth = 0
    arr.push([])
    arr.push([])

    sampleFilter(sample, arr)

    res += '<table>'
    res += '<caption>Task 1 for ' + name + '</caption>'
    res += '<tr>'
    for(let header of headers) 
        res += '<th>' + header + '</th>'
    res += '</tr>'
    
    for(let i = 0; i < arr[0].length; i++){
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


function task2(sample, name){
    if (name === 'sampleA')
        document.querySelector('.task2').innerHTML = ''

    //let res = '<caption>Task 2 for ' + name + '</caption>'
    let arr = []
    arr.push([])
    arr.push([])

    sampleFilter(sample, arr)

    document.querySelector('.task2').innerHTML += '<canvas id="chart' + name +'" width="60" height="40">'

    setTimeout(() => {
        new Chart(document.querySelector('#chart' + name).getContext('2d'), {
            type: 'line',
            responsive:false,
            maintainAspectRatio: false,
            data: {
                labels: arr[0],
                datasets: [{
                    label: 'Task 2 for ' + name,
                    backgroundColor: 'rgb(48, 92, 100)',
                    borderColor: 'rgb(48, 92, 100)',
                    data: arr[1]
                }]
            }
        })
    }, 0)


    document.querySelector('.task2').innerHTML += '<br>'

    document.querySelector('.task2').innerHTML += '<canvas id="chartBar' + name +'" width="60" height="40"></canvas>'

    setTimeout(() => {
        new Chart(document.querySelector('#chartBar' + name).getContext('2d'), {
            type: 'bar',
            responsive:false,
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
}



document.querySelector("input.calculate").addEventListener("click", function() {
    let functions = [task1, task2]
    //, task3, task4, task5]
    for(let i = 0; i < functions.length; i++) {
       
        if(i === 1){
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