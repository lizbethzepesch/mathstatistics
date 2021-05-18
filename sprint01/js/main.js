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
    arr.push([])
    arr.push([])

    for(let i = 0; i < sample.length; i++){
        if(!arr.includes(sample[i]))
            arr[].push(sample[i])
        for(let j = 0; j < sample.length; j++){
        
    }

    res += '<table>'
    
    res += '<caption>Task1 for ' + name + '</caption>'
    res += '<tr>'
    for(let header of headers) 
        res += '<th>' + header + '</th>'
    res += '</tr>'


    for(let i = 0; i < sample.length; i++){
        res += '<tr>'
        res += '<td>' + sample[i] + '</td>'
        res += '<td>' + sample[i] + '</td>'
        res += '<td>' + sample[i] + '</td>'
        res += '<td>' + sample[i] + '</td>'
        res += '<td>' + sample[i] + '</td>'
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