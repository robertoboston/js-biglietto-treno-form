const button_get=document.getElementById("button-genera");

button_get.addEventListener('click', function(){
    let input_tag=document.getElementById('km').value;
    console.log(input_tag)
    let input_sex=document.getElementById('sex').value;
    console.log(input_sex)
})

if(input_sex == 'Maggiorenne'){
    let cost=input_tag * 0.21
    console.log(cost)

    
}

