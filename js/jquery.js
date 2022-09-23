$(function(){
    $('.selectInfo #Option').on('change', function(){
        if($(this).val() == 'USA'){
            $('#main2 input[type="radio"]').prop('disabled', false);
            $('#CADToSelect').val('One CA Dollar = 0.79 US Dollar'); //text() cannot work in a input element.
            $('#SelectToCAD').val('One US Dollar = 1.27 CA Dollar');
            $('#ConToOther').val('CA Dollar to US Dollar');
            $('#ConToCad').val('US Dollar to CA Dollar');

            $('#radio1').click(function(){            
                $('#footer #unit').val('CAD');
                $('#footer #unit2').val('US');
                $('#footer input[type="submit"]').prop('disabled', false);
                $('#footer input[type="submit"]').click(function(e){
                    e.preventDefault();
                    $('#footer #result').val($('#footer #setNumber').val() * 0.79);
                })   
            })
            $('#radio2').click(function(){
                $('#footer #unit').val('US');
                $('#footer #unit2').val('CAD');
                $('#footer input[type="submit"]').prop('disabled', false);
                $('#footer input[type="submit"]').click(function(e){
                    e.preventDefault();
                    $('#footer #result').val($('#footer #setNumber').val() * 1.27);
                })
            })
        }        
    })

    $('.selectInfo #Option').on('change', function(){
        if($(this).val() == 'UK'){
            $('#main2 input[type="radio"]').prop('disabled', false);
            $('#CADToSelect').val('One CA Dollar = 0.6 British Pound'); //text() cannot work in a input element.
            $('#SelectToCAD').val('One British Pound = 1.65 CA Dollar');
            $('#ConToOther').val('CA Dollar to Pound');
            $('#ConToCad').val('Pound to CA Dollar');               
            $('#radio1').click(function(){
                $('#footer input[type="submit"]').prop('disabled', false);
                $('#footer #unit').val('CAD');
                $('#footer #unit2').val('Pound');

                $('#footer input[type="submit"]').click(function(e){
                    e.preventDefault();
                    $('#footer #result').val($('#footer #setNumber').val() * 1.5);
                })   
            })
            $('#radio2').click(function(){
                $('#footer input[type="submit"]').prop('disabled', false);
                $('#footer #unit').val('Pound');
                $('#footer #unit2').val('CAD');

                $('#footer input[type="submit"]').click(function(e){
                    e.preventDefault();
                    $('#footer #result').val($('#footer #setNumber').val() * 0.6);
                })
            })
        }
    })

    $('.selectInfo #Option').on('change', function(){
        if($(this).val() == 'France'){
            $('#main2 input[type="radio"]').prop('disabled', false);
            $('#CADToSelect').val('One CA Dollar = 0.67 Euro'); //text() cannot work in a input element.
            $('#SelectToCAD').val('One Euro = 1.5 CA Dollar');
            $('#ConToOther').val('CA Dollar to EUR');
            $('#ConToCad').val('EUR to CA Dollar');

            $('#radio1').click(function(){
                $('#footer input[type="submit"]').prop('disabled', false);
                $('#footer #unit').val('CAD');
                $('#footer #unit2').val('EURO');

                $('#footer input[type="submit"]').click(function(e){
                    e.preventDefault();
                    $('#footer #result').val($('#footer #setNumber').val() * 0.6);
                })   
            })
            $('#radio2').click(function(){
                $('#footer input[type="submit"]').prop('disabled', false);
                $('#footer #unit').val('EURO');
                $('#footer #unit2').val('CAD');

                $('#footer input[type="submit"]').click(function(e){
                    e.preventDefault();
                    $('#footer #result').val($('#footer #setNumber').val() * 1.65);
                })
            })
        }
    })

    $('#footer #reset').click(function(){
        $('#main2 input[type="radio"]').prop('disabled', true);
        $('#footer input[type="submit"]').prop('disabled', true);
    })
})