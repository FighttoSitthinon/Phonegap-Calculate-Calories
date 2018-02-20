var CalCalories = function(){
    var weight = $("#weight").val();
    var sex = $("#sex").val();
    var age = $("#age").val();
    var x,y;
    var out;
    if(sex == "female"){
        if(age == "3-9"){x=22.5; y=499;}
        else if(age == "10-17"){x=12.2; y=746;}
        else if(age == "18-29"){x=14.7; y=496;}
        else if(age == "30-60"){x=8.7; y=829;}
        else if(age == "60+"){x=10.5; y=596;}
    }
    else if(sex == "male"){
        if(age == "3-9"){x=22.7; y=495;}
        else if(age == "10-17"){x=17.5; y=651;}
        else if(age == "18-29"){x=15.3; y=679;}
        else if(age == "30-60"){x=11.6; y=879;}
        else if(age == "60+"){x=13.5; y=487;}
    }
    
    if(weight<=0){
        ons.notification.alert("Please check your weight, Maybe it wrong!!");//only String
    }else{
        out= x*weight+y;
        ons.notification.alert(out + "");//only String
    }

    return false;
}