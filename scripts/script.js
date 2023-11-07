$(document).ready(function(){
  $('.signUp').hide();
 // $('.tooltip').hide();

  $('#signUpBTN').click(function(){
    $('.homePage').hide();
    $('.signUp').show(); 
  });

  document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault()
  });

  $('#submitBtn').click(function(){
    let userEmail = document.getElementById("newEmail").value;
    let userPassword = document.getElementById("newPwd").value;
    let teamName = document.getElementById("team").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let number = document.getElementById("phoneNumber").value;
    let teamNum = document.getElementById("num").value;

    teams.push({userEmail, userPassword, teamName, fname, lname, number, teamNum});

    if (userEmail == "" || userPassword == "" || teamName == "" || fname == "" || lname == "" || number == "" || teamNum == "") {
      //$('.tooltip').show();
      //$('.tooltip').addClass('show-tooltip');
    } else {
      $('.signUp').hide();
      $('.homePage').show(); 
    }
  });
    
  $("#login").click(function(){
    // when they press login check email & password    
    // If login is valid dispay a welcome with the team name
    let email = document.getElementById("oldEmail").value;
    let password = document.getElementById("oldPwd").value;

    if (email == "" || password == ""){

    } else {
      if(teams.length > 0){
        for (let i = 0; i < teams.length; i++) {
          if(email == teams[i].userEmail && password == teams[i].userPassword) {
            welcomePage(i);
          } else {
            goSignUp();
          }
        }
      } else {
        goSignUp();
      }
    }
  })

});

function welcomePage(num) {
  let home = document.getElementsByClassName("homePage");
  home[0].innerHTML = `
    <h2>Team Name: ` + teams[num].teamName + `</h2>
    <h3>Captain: ` + teams[num].fname + ' ' + teams[num].lname + `</h3>
    <h4>Number of Team Members: ` + teams[num].teamNum + `<h4>
  `;
};

function goSignUp() {
  let home = document.getElementsByClassName("homePage");
  home[0].innerHTML = `
    <h1>There is no team matching this login information. Please sign up your team before trying to login.</h1>
  `;
}
  
$(function() {
  
  //click the eye icon w/class reveal 
  $(".reveal").on('click',function() {
    let $pwd = $("#oldPwd");
    
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
        $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
    } else {
        $pwd.attr('type', 'password');
      $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
    }
  });
    
});
  