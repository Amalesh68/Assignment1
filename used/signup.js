




function validate(){
let email = document.getElementById("email").value;
let pass1 = document.getElementById("pass1").value;
let pass2 = document.getElementById("pass2").value;
let mobno = document.getElementById("mobno").value;
let name1 = document.getElementById("name1").value;
let error1 = document.getElementById("error1").value;
let error2 = document.getElementById("error2").value;
let error3 = document.getElementById("error3").value;
let error4 = document.getElementById("error4").value;
let error5 = document.getElementById("error5").value;




      if(email==""||pass1==""||pass2==""||mobno==""||name1==""){
            alert("fields cannot be empty");
            return false;
      }else{
          return true;
      }



    let regexp = /^*([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error1.innerHTML = "valid";
        error1.style.color="green";
        return true;
    }
    else{
        error1.innerHTML ="Invalid";
        error1.style.color = "red";
        return false;
    }
}