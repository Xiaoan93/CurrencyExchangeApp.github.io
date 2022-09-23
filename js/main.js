document.addEventListener('DOMContentLoaded', ()=>{

    var myOption = document.getElementById('Option');   
    mySelect1  = document.getElementById('1');
    var changeToCad = document.getElementById('CADToSelect');
    var changeToOther = document.getElementById('SelectToCAD');
    var convertToOther = document.getElementById('ConToOther');
    var convertToCad = document.getElementById('ConToCad');
    var rad1 = document.getElementById('radio1');
    var rad2 = document.getElementById('radio2');
    var myUnit = document.getElementById('unit');
    var myUnit2 = document.getElementById('unit2');
    var myConvert = document.getElementById('convert');
    var firstNumber = document.querySelector('#setNumber');
    var secondNumber = document.querySelector('#result');
    
    myOption.addEventListener('click', (e)=>{
        e.preventDefault();
        if(myOption.value == 'USA'){
            changeToCad.value = 'One CA Dollar = 0.79 US Dollar';
            changeToOther.value = 'One US Dollar = 1.27 CA Dollar';
            convertToOther.value = 'CA Dollar to US Dollar';
            convertToCad.value = 'US Dollar to CA Dollar';
            rad1.addEventListener('click', ()=>{
                
                if(rad1.checked){
                    myUnit.value = 'CAD';
                    myUnit2.value = 'USD';
                    myConvert.removeAttribute('disabled');
                }
                myConvert.addEventListener('click', (e)=>{
                    e.preventDefault();
                    secondNumber.value = (firstNumber.value * 0.79).toFixed(2);
                })
                
            })
            
            rad2.addEventListener('click', ()=>{
                
                if(rad2.checked){
                    myUnit.value = 'USD';
                    myUnit2.value = 'CAD';
                    
                }
                myConvert.addEventListener('click', (e)=>{
                    e.preventDefault();
                    secondNumber.value = (firstNumber.value * 1.27).toFixed(2);
                }) 
                myConvert.removeAttribute('disabled');
                
            }) 
                          
        }
        else if(myOption.value == 'UK'){
            changeToCad.value = 'One CA Dollar = 0.6 British Pound';
            changeToOther.value = 'One British Pound = 1.65 CA Dollar';
            convertToOther.value = 'CA Dollar to Pound';
            convertToCad.value = 'Pound to CA Dollar';
            rad1.addEventListener('click', (e)=>{
                e.preventDefault();
                if(rad1.checked){
                    myUnit.value = 'CAD';
                    myUnit2.value = 'Pound';
                    myConvert.removeAttribute('disabled');
                }
                myConvert.addEventListener('click', (e)=>{
                    e.preventDefault();
                    secondNumber.value = (firstNumber.value * 1.5).toFixed(2);
                })
            })
            rad2.addEventListener('click', (e)=>{
                e.preventDefault();
                if(rad2.checked){
                    myUnit.value = 'Pound';
                    myUnit2.value = 'CAD';
                    myConvert.removeAttribute('disabled');
                }
                myConvert.addEventListener('click', (e)=>{
                    e.preventDefault();
                    secondNumber.value = (firstNumber.value * 0.6).toFixed(2);
                })
            })
        }
        else if(myOption.value == 'France'){
            changeToCad.value = 'One CA Dollar = 0.67 Euro';
            changeToOther.value = 'One Euro = 1.5 CA Dollar';
            convertToOther.value = 'CA Dollar to EUR';
            convertToCad.value = 'EUR to CA Dollar';
            rad1.addEventListener('click', (e)=>{
                e.preventDefault();
                if(rad1.checked){
                    myUnit.value = 'CAD';
                    myUnit2.value = 'EUR';
                    myConvert.removeAttribute('disabled');
                }
                myConvert.addEventListener('click', (e)=>{
                    e.preventDefault();
                    secondNumber.value = (firstNumber.value * 0.6).toFixed(2);
                })
            })
            rad2.addEventListener('click', (e)=>{
                e.preventDefault();
                if(rad2.checked){
                    myUnit.value = 'EUR';
                    myUnit2.value = 'CAD';
                    myConvert.removeAttribute('disabled');
                }
                myConvert.addEventListener('click', (e)=>{
                    e.preventDefault();
                    secondNumber.value = (firstNumber.value * 1.65).toFixed(2);
                })
            })
        }
    })
})