var fA = 0
var fB = 0

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
    let a = fA + 3
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