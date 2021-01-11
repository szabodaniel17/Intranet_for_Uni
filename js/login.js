$(document).ready(function (){


    $('#submit').on("click", verifyCredentials);
})

function verifyCredentials(){

    let username = $('#username');
    let password = $('#password');

    if(username.val() == 'toaderclaudiu@student.utcluj.ro' && password.val() == 'pass1234'){
        // dashboard student
        window.location.href = "index_student.html"
    }else if(username.val() == 'cheresioana@professor.utcluj.ro' && password.val() == 'pass1234'){
        //dashboard profesor
        window.location.href = "index_prof.html";
    }else if(username.val() == 'szabodaniel@worker.utcluj.ro' && password.val() == 'pass1234'){
        //dashboard personal administrativ
        window.location.href = "index_administrativ.html";
    }
    
    return false;
}
   


