const password = document.getElementById("exampleInputPassword1");
const newPassword = document.getElementById("exampleInputPassword2")
const form = document.getElementById("form")

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})

  const submitForm =()=>{
      form.innerHTML="<div class='submitdiv'><h4 >Password Changed</h4> <p>Your password has been updated! Now get back in the driver seat,racers are waiting for you</p> <button>JOIN A RACE</button> </div>"
  }
const validate = ()=>{
    const passwordVal =password.value;
    const newPasswordVal =newPassword.value.trim();
    var regex = /^[a-zA-Z]*$/;
    console.log(regex, 'passwordVal')
    if(passwordVal===""){
        setErrorMsg(password,"Password can not be blank")
    } else if(passwordVal.length<8){
        setErrorMsg(password,"Password must have atleast 8 characters")
    }
    else if(!regex.test(passwordVal)){
        setErrorMsg(password,"Password must have only characters")
    }
    else if(newPasswordVal!==passwordVal){
        setErrorMsg(newPassword,"Password does not match")
    }
    else{
        submitForm();
    }
    
}


function setErrorMsg(input,errorMsg){
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    formGroup.className ='form-group error'
    small.innerText = errorMsg
}