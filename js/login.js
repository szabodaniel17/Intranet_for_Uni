$(document).ready(function (){

    $('#submit').on("click", verifyCredentials);
})

function verifyCredentials(){

    let username = $('#username');
    let password = $('#password');

    if(username.val() == 'denisaurcan@student.utcluj.ro' && password.val() == 'pass1234'){
        // dashboard student
    }else if(username.val() == 'cheresioana@professor.utcluj.ro' && password.val() == 'pass1234'){
        //dashboard profesor
        window.location.href = "index_prof.html";
    }else if(username.val() == 'cheresioana@worker.utcluj.ro' && password.val() == 'pass1234'){
        //dashboard personal administrativ
    }
    
    return false;
}
