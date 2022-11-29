const button_get=document.getElementById("button-genera");

const euro= '€';

button_get.addEventListener('click', function(){
    let input_name=document.getElementById('nome-cognome').value;
    document.getElementById('name').innerHTML=input_name;
    let input_tag=document.getElementById('km').value;
    let input_age=document.getElementById('age').value;
    if(input_age == 'Maggiorenne'){
        let cost = (input_tag * 0.21).toFixed(2) + euro;
        document.getElementById('costo').innerHTML=cost
    }
    else if(input_age == 'Over-65'){
        let cost_65 = (input_tag * 0.21 * 0.6).toFixed(2) + euro;
        document.getElementById('costo').innerHTML=cost_65
    }
    else{
        let cost_under_18 = (input_tag * 0.21 * 0.8).toFixed(2) + euro;
        document.getElementById('costo').innerHTML=cost_under_18
    }
})



