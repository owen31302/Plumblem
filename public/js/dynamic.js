/**
 * Created by owen on 4/3/17.
 */

$(document).ready(function(){
    $.get("/api/works/", function(data, status){
        var j;
        for(j = 0; j < data.length; j++){
            $.each(data[j],function(key,value){
                if(key == 'work'){
                    $('#selectscr').append($("<option></option>").attr("value",value).text(value));
                }
            });
        }
    })

    $("#submit").click(function(){
        var query = "/api/work/" + $("#selectscr").val()+'/'+$("#zipcode").val();
        $.get( query , function( data , status){
            console.log('get success');
        })
    });
});



