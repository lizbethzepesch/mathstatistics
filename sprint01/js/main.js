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

function task1(sample, name){
    let res = ''
    let headers = ['Sample',	'Frequence', 'Accumulated frequence', 'Relative frequence', 'Cumulative relative frequence']
    let arr = []
    let third = 0
    let fifth = 0
    arr.push([])
    arr.push([])

    for(let i = 0; i < sample.length; i++){
        if(!arr[0].includes(sample[i]))
            arr[0].push(sample[i])
        for(let j = 0; j < sample.length; j++)
            if(arr[0][j] === sample[i])
                if(arr[1][j])    
                    arr[1][j]++   
                else arr[1][j] = 1     
    }

    res += '<table>'
    res += '<caption>Task1 for ' + name + '</caption>'
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
        res += '<td>' + (arr[1][i] / sample.length) + '</td>'

        fifth += (arr[1][i] / sample.length)

        res += '<td>' + fifth + '</td>'
        res += '</tr>'
    }

    res += '</table>'
    res += '<br>'
    return res
  
}

document.querySelector("input.calculate").addEventListener("click", function() {
    //let functions = [task1, task2, task3, task4, task5]
    let res = ''
    res += task1(document.querySelector('.A').value.split(' '), 'sample A')
    res += task1(document.querySelector('.B').value.split(' '), 'sample B')

    for (let i = 0; i < samples; i++)
        res += task1(document.querySelector('.sample' + i,).value.split(' '), 'extra sample ' + (i + 1))
    document.querySelector('.task1').innerHTML = res
})