// GLOBAL VARIABLES
const studentIdInput = document.getElementById("studentID");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const dateInput = document.getElementById("dob");
const genderSelect = document.getElementById("gender");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const streetInput = document.getElementById("street");
const cityInput = document.getElementById("city");
const provinceInput = document.getElementById("province");
const postalcodeInput = document.getElementById("postalcode");


// GLOBAL SPAN VAR
const stdField = "stdID";
const fnameField = "fnameId"
const lnameField = "lnameId";
const usrnameField = "usrId";
const pwdField = "pwdId";
const dobField = "dobId";
const genderField = "genderId";
const emailField = "emailId";
const phoneField = "phoneId";
const streetField = "streetId";
const cityField = "cityId";
const provinceField = "provinceId";
const postalField = "postalId";

// GLOBAL COUNTER
var errorCounter = 0;
var errorsNotif = [];
var isValid = 0;


const form = document.getElementById('addressForm')
form.addEventListener('submit', (e) => {

    e.preventDefault();
    validateForm();

})



// NOTE: function to show alert box
function showAlertMessage(cssClass) {
    let errorStr = errorsNotif.length > 1 ? "errors" : "error";
    let errorMsg = '';

    let container = document.getElementById("alertMessage");
    let content = `<div class="alert ${cssClass} alert-dismissible fade show pb-0" role="alert">`;
    content += '<p class="mb-0">Error! Sorry, your form is not valid.</p>';
    content += `<p class="mb-0">${errorsNotif.length} ${errorStr} prevented registration form from being submitted. Please correct any errors below and try again!</p>`;
    content += `<ul>`;
    for (let str of errorsNotif.values()){
        errorMsg = str;
        content += `<li>${errorMsg}</li>`;
    }
    content += '</u>';
    content += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
    content += '</div>';
    // DEBUG:
    container.innerHTML = content;
}

// NOTE: function to hide status alert
function hideStatusMsg() {
    $('.alert').hide();
}

// NOTE: add required message
function addReqMsg(inputId, msg) {
    let container = document.getElementById(inputId);
    let content = `<small id="1" class="mb-0 text-danger ">${msg}</small>`;
    container.innerHTML = content;

}

// NOTE: Function to submit the form and validates it
function validateForm() {
    // TODO:
   errorsNotif = [];
   isValid = 0;
   clearErrorMsg('alertMessage');
   validateStdID();
   validateFname();
   validateLname();
   validateUsername();
   validatePwd();
   validateDOB();
   validateGender();
   validateEmail();
   validatePhone();
   validateStreet();
   validateCity();
   validateProvince();
   validatePostal();

   if(isValid == 12){
       showSuccess();
   }
  
}

function validateStdID() {
    var stdId = studentIdInput.value;
    let regex = /^([ ]?[A-Za-z]{3}[ ]?.)*([ ]?[0-9]{3}[ ]?.)*([ ]?[0-9]{1}|[0-9]{2}|[0-9]{3}|[0-9]{4}[ ]?)+$/
    if( stdId.match(regex)){
        resetColor('stdIdLabel');
        resetColor('studentID');
        changeLabelColorToGreen('stdIdLabel');
        changeLabelColorToGreen('studentID');
        clearErrorMsg('stdID');
        isValid++;
        return true;
    }
    else{
        resetColorGreen('stdIdLabel');
        resetColorGreen('studentID');
        changeLabelColorToRed('stdIdLabel');
        changeLabelColorToRed('studentID');
        errorsNotif.push("You must enter a valid student ID");
        addReqMsg(stdField, 'Please enter a valid value');
        return false;
    }
  
}

function validateFname(){
    var firstname = firstNameInput.value;
  
    if(firstname.match(/^[A-Za-z]+$/) && firstname.length <=15 ){
        resetColor('fnameLbl');
        resetColor('firstname');
        changeLabelColorToGreen('fnameLbl');
        changeLabelColorToGreen('firstname');
        clearErrorMsg(fnameField);
        isValid++;
        return true;
    }else {
        resetColorGreen('fnameLbl');
        resetColorGreen('firstname');
        changeLabelColorToRed('fnameLbl');
        changeLabelColorToRed('firstname');
        errorsNotif.push("You must enter a valid first name");
        showAlertMessage('alert-danger')
        addReqMsg(fnameField,  'Please enter a valid value');
        return false;
    }
 

}

function validateLname(){
    let lastname = lastNameInput.value;
    let regex = /^[A-Za-z]+$/;
    if(lastname.match(regex) && lastname.length <= 25 ){
        clearErrorMsg(lnameField);
        resetColor('lnameLbl');
        resetColor('lastname');
        changeLabelColorToGreen('lnameLbl');
        changeLabelColorToGreen('lastname');
        isValid++;
        return true;
        
    }else {
        resetColorGreen('lnameLbl');
        resetColorGreen('lastname');
        changeLabelColorToRed('lnameLbl');
        changeLabelColorToRed('lastname');
        errorsNotif.push("You must enter a valid last name");
        showAlertMessage('alert-danger');
        addReqMsg(lnameField,  'Please enter a valid value');
        return false;
    }
}

function validateUsername(){
    let username = userNameInput.value;
    let regex = /^[A-Za-z]{6,10}$/;
    if ( username.match(regex)){
        clearErrorMsg(usrnameField);
        resetColor('usrLbl');
        resetColor('username');
        changeLabelColorToGreen('usrLbl');
        changeLabelColorToGreen('username');
        isValid++;
        return true;
    } else {
        resetColorGreen('usrLbl');
        resetColorGreen('username');
        changeLabelColorToRed('usrLbl');
        changeLabelColorToRed('username');
        errorsNotif.push("You must enter a valid user name");
        addReqMsg(usrnameField, 'The valid username is required');
        showAlertMessage('alert-danger');
        return false;
    }
}

function validatePwd(){
    let pwd = passwordInput.value;
    let regex = /^(?=.*[a-z]){2,}(?=.*[A-Z])(?=.*\d){2,}(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,8}$/
    if (pwd.match(regex)){
        resetColor('pwdLbl');
        resetColor('password');
        changeLabelColorToGreen('pwdLbl');
        changeLabelColorToGreen('password');
        clearErrorMsg(pwdField);
        isValid++;
        return true;
    } else {
        resetColorGreen('pwdLbl');
        resetColorGreen('password');
        changeLabelColorToRed('pwdLbl');
        changeLabelColorToRed('password');
        errorsNotif.push("You must enter a valid password");
        addReqMsg(pwdField, 'The valid password is required');
        showAlertMessage('alert-danger');
        return false;
    }
}
function validateDOB(){
    if (dateInput.value === ''){
        errorsNotif.push("You must enter a valid date of birth");
        addReqMsg(dobField, 'The date of birth is required');
        resetColorGreen('dobLbl');
        resetColorGreen('dob');
        changeLabelColorToRed('dobLbl');
        changeLabelColorToRed('dob');
        showAlertMessage('alert-danger');
    
        return false;
    } else {
        resetColor('dobLbl');
        resetColor('dob');
        changeLabelColorToGreen('dobLbl');
        changeLabelColorToGreen('dob');
        clearErrorMsg(dobField);
        isValid++;
        return true;
    }
}

function validateGender(){
    if(genderSelect.value === 'NA'){
        resetColorGreen('genderLbl')
        changeLabelColorToRed('genderLbl');
        return false;
    }else {
        resetColor('genderLbl');
        changeLabelColorToGreen('genderLbl');
        return true;
    }
}

function validateEmail(){
    let email = emailInput.value 
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(regex)){
        clearErrorMsg(emailField);
        resetColor('emailLbl');
        resetColor('email');
        changeLabelColorToGreen('emailLbl');
        changeLabelColorToGreen('email');
        isValid++;
        return true;
    } else {
        resetColorGreen('emailLbl');
        resetColorGreen('email');
        changeLabelColorToRed('emailLbl');
        changeLabelColorToRed('email');
        errorsNotif.push("You must enter a valid email");
        addReqMsg(emailField, 'The email is required');
        showAlertMessage('alert-danger');
        return false;
    }
}

function validatePhone(){
    let phone = phoneInput.value;
    let regex = /\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    if (phone.match(regex)){
        clearErrorMsg(phoneField);
        resetColor('phoneLbl');
        resetColor('phone');
        changeLabelColorToGreen('phoneLbl');
        changeLabelColorToGreen('phone');
        isValid++;
        return true;
    } else {
        resetColorGreen('phoneLbl');
        resetColorGreen('phone');
        changeLabelColorToRed('phoneLbl');
        changeLabelColorToRed('phone');
        errorsNotif.push("You must enter a valid number");
        addReqMsg(phoneField, 'The phone number is required');
        showAlertMessage('alert-danger');
        return false;
    }
}

function validateStreet(){
    if (streetInput.value === ''){
        errorsNotif.push("You must enter a valid street");
        addReqMsg(streetField, 'The street is required');
        resetColorGreen('streetLbl');
        resetColorGreen('street');
        changeLabelColorToRed('streetLbl');
        changeLabelColorToRed('street');
        showAlertMessage('alert-danger');
       
        return false;
    } else {
        clearErrorMsg(streetField);
        resetColor('streetLbl');
        resetColor('street');
        changeLabelColorToGreen('streetLbl');
        changeLabelColorToGreen('street');
        isValid++;
        return true;
    }
}
function validateCity(){
    let regex = /^[A-Za-z]+$/;
    let city = cityInput.value;
    if (city.match(regex)){
        resetColor('cityLbl');
        resetColor('city');
        changeLabelColorToGreen('cityLbl');
        changeLabelColorToGreen('city');
        clearErrorMsg(cityField);
        isValid++;
        return true;
    } else {
        resetColorGreen('cityLbl');
        resetColorGreen('city');
        changeLabelColorToRed('cityLbl');
        changeLabelColorToRed('city');
        errorsNotif.push("You must enter a valid city");
        addReqMsg(cityField, 'The street is required');
        showAlertMessage('alert-danger');
        return false;
    }
}

function validateProvince(){
    let regex = /^[A-Za-z]+$/;
    let province = provinceInput.value;
    if (province.match(regex)){
        clearErrorMsg(provinceField);
        resetColor('provinceLbl');
        resetColor('province');
        changeLabelColorToGreen('provinceLbl');
        changeLabelColorToGreen('province');
        isValid++;
        return true;
    } else {
        errorsNotif.push("You must enter a valid province");
        addReqMsg(provinceField, 'The valid province is required');
        resetColorGreen('provinceLbl');
        resetColorGreen('province');
        changeLabelColorToRed('provinceLbl');
        changeLabelColorToRed('province');
        showAlertMessage('alert-danger');
        return false;
    }
}

function validatePostal(){
    let regex = /^[A-Y]\d[A-Z]( )?\d[A-Z]\d$/i;
    let postal = postalcodeInput.value;
    if (postal.match(regex)){
        clearErrorMsg(postalField);
        resetColor('postalcode');
        resetColor('postalLabel');
        changeLabelColorToGreen('postalcode');
        changeLabelColorToGreen('postalLabel');
        isValid++;
        return true;
    } else {
        resetColorGreen('postalcode');
        resetColorGreen('postalLabel');
        changeLabelColorToRed('postalcode');
        changeLabelColorToRed('postalLabel');
        errorsNotif.push("You must enter a valid postal");
        addReqMsg(postalField, 'The valid postal code is required');
        showAlertMessage('alert-danger');
        return false;
    }
}

// NOTE: clear previous error message
function clearErrorMsg(id){
    document.getElementById(id).innerHTML = "";
}

// NOTE: function receives a field's label id and changes its text color to red
function changeLabelColorToRed(fieldId) {
    // TODO:
    document.getElementById(fieldId).classList.add("error")
}
function changeLabelColorToGreen(fieldId) {
    // TODO:
    document.getElementById(fieldId).classList.add("success")
}

// NOTE: function receives a field's label id as parameter and changes its color back to black
function resetColor(fieldId) {
    // NOTE:
    document.getElementById(fieldId).classList.remove('error');
}

function resetColorGreen(fieldId){
    document.getElementById(fieldId).classList.remove('success');
}

document.getElementById('resetBtn').addEventListener("click", restForm)

function restForm() {
 location.reload();
}

// NOTE: function receives error message to be displayed
function showErrors(msg) {
    // NOTE: I have this function as showAlertMessage();
    //
}

// NOTE: function to display success alert box
function showSuccess() {
    let container = document.getElementById("alertMessage");
    let content = `<div class="alert alert-success alert-dismissible fade show pb-0" role="alert">`;
    content += '<p class="mb-0">SUCCESS! Your form is valid!.</p>';
    content += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'
    content += '</div>';
    container.innerHTML = content;
}


console.count(errorsNotif.length);
