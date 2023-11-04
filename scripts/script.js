const teams = [];

$(document).ready(function(){
  $('.signUp').hide();  
    
  $('#signUpBTN').click(function(){
    $('.loginPage').hide();
    $('.signUp').show(); 
  });

  document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault()
  });

  $('#submitBtn').click(function(){
    let userEmail = document.getElementById("newEmail").value;
    let password = document.getElementById("newPwd").value;
    let teamName = document.getElementById("team").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let number = document.getElementById("phoneNumber").value;
    let teamNum = document.getElementById("num").value;

    teams.push({userEmail, password, teamName, fname, lname, number, teamNum});

    $('.signUp').hide();
    $('.loginPage').show(); 
  });
    
  $("#login").click(function(){
    // when they press login check username & password
    // If login is valid dispay a welcome with the team name
  })

});
  
$(function() {
  
  //click the eye icon w/class reveal 
  $(".reveal").on('click',function() {
    let $pwd = $("#oldpwd");
    
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
        $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
    } else {
        $pwd.attr('type', 'password');
      $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    }
  });
    
});
  