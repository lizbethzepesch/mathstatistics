var fA = 0
var fB = 0

var samples = []

function myddA(){
    let b = fB + 1
    let a = fA + 3

    fB++
    let res = ''
    res += `<tr id='b`+ (b + 2)+`'>  <td id="fb` + (b) + `">B` + (b + 1) + `</td>`
    
    for(let i = 0; i < fA + 3; i++)
        res += `<td id='` + 'tdB' + (b + 2) +'A' + i + `'><input type='text' name='sample' value=""> </td>`
    res += `</tr>`
   
    
    document.querySelector('#table').innerHTML += res   
}

function mydelA(){
    if(fB === 0) return
    let b = fB + 2
    document.querySelector('#b' + (b)).remove()
    fB--
}

function myaddB(){
    let a = fA + 4
    fA++

    document.querySelector('#factorsA').innerHTML += '<td id="fa' + a + '">A' + (a) + '</td>'

    for(let i = 0; i < fB + 2; i++){
        let td = document.createElement("td")
        td.id = 'tdB' + (i + 1) +'A' + a
        document.querySelector('#b' + (i + 1)).appendChild(td)
        document.querySelector('#tdB' + (i + 1) +'A' + a).appendChild(document.createElement("input"))
    }
      
    
}

function mydelB(){
    if(fA === 0) return
    
    fA--
    let a = fA + 3
    document.querySelector('#fa' + (a )).remove()
    
    for(let i = 0; i < fB + 2; i++)
        document.querySelector('#tdB' + (i + 1) +'A' + a).remove()
    
}



function task1(){
    parseInput()
    let res =  `<table> <tr><td rowspan="3" colspan="2">Factor B</td> <td colspan="` + (3 + fA + 3 + fA) + `">Factor A</td> `
    let table = document.querySelector('#input') 


    
    res += '<td rowspan="3">Rows mean</td>'
    res += '<td rowspan="3">General mean</td>'
    res += '</tr>'

    res += `<tr id='factorsA'><td colspan="2">A1</td>
    <td colspan="2">A2</td>
    <td colspan="2">A3</td>
`

    for(let i = 0; i < fA; i ++)
        res += ` <td colspan="2">A` + (i+4) + `</td>`
 

    res += '</tr>'

    res += '<tr>'
    for(let i = 0; i < fA + 3; i ++){
        res += ` <td>Block ` + (i+1) + `</td>`
        res += ` <td>Block<br> mean</td>`
    }
    res += '</tr>'

  
    let j = 0
    for(let i = 0; i < fB + 2; i ++){
        res += '<tr>'
        res += '<td>B' + (i+1) + '</td>'
        res += '<td>Block ' + (i+1)+ '</td>'
        
            for(; j < fA + 3 * (i + 1); j++){
                res += '<td>' + samples[j ].join(' ')+ '</td>'
                res += '<td>'  + math.mean(samples[j]).toFixed(1)+ '</td>'
            }
            
        res += '</tr>' 
    }
    j = 0
   

   
    res += '<tr>'
    res += '<td colspan="2">Columns<br>mean</td>'
    for(let i = 0; i < fA + 3; i ++){
        res += '<td>colspan="2"' + math.mean(samples[i], samples[i + 3]) + '</td>'

       
    }

    res += '</tr>'


    res += '</table>'


    document.querySelector('#task1').innerHTML = res

}

function parseInput(){
    for(let i = 0; document.getElementsByTagName('input')[i]; i ++)
        if(document.getElementsByTagName('input')[i].value)
            samples.push(document.getElementsByTagName('input')[i].value.split(' ').map(value => +value).filter(value => !isNaN(value)))
    
    samples = samples.filter(arr => arr.length)
}

function calc(){
    task1()
}