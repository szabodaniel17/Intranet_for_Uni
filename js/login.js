$(document).ready(function (){
    $('#submit').on("click", verifyCredentials);
    $('#reset_password').on("click", sendEmail);
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
    }else {
        swal({
            title: "Incorrect username or password",
            type: "warning",
            showCancelButton: false,
            confirmButtonText: "Try again!",
            closeOnConfirm: false
            });
    }
    
    return false;
}
   
function sendEmail(){
    
    swal({
        title: "Email sent!",
        type: "success",
        showCancelButton: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "OK",
        closeOnConfirm: false
    }, function(){
        location.href = 'login.html';
    });

    return false;
}


