# JS-Form-Validation
Academic Project for Internet Programming

# Description
- This project demonstrate our skills in creating a form validation and to showcase our knowledge in Bootstrap 5, regular expression and javascript.

# Learning Objectives
- Learn about the fundamental concepts of Web form validation with JavaScript and regular expressions.
Use jQuery, a JavaScript library that simplifies HTML DOM tree traversal and manipulation.

# Instruction and Requirements
- Your application must show an error message using an alert box (Bootstrap status message). The number of errors must be shown as well as a detailed message for each and every invalid field. In case of an error, the alert box’s background color must be changed to light red. The alert box must be controlled (hide/show) using jQuery
- The background of the invalid fields must be change to pink.
- The validation process must be triggered only and only upon submitting the web
form. Therefore, the type of the submit button must be button and not submit.
- Upon clicking the submit button, a function named validateFrom() must be called. This function does not receive any parameter. It validates the form’s elements one by one using regular expressions. You must also validate the length of the entered data. For example: a password must be 6 to 8 characters long.
- If all the fields are valid, an alert box must be shown. The background color of valid fields must be light green

# Fields Validation
1. Student ID: as provided, must start with three letters followed by a dot, followed by three digits followed by a dot then followed by 1 to four digits.
2. First name: letters only; length: maximum 15 letters.
3. Last name: letters only; length: maximum 25 letters.
4. Username: letters only; length: between 6 and 10 letters.
5. Password: length: minimum 6 and maximum 8 characters. Must consist of digits, letters and special characters such as @, #,$, , etc. A valid password must contain at least 2 digits, at least two lowercase letters, at least one uppercase letter and at least one special character.
6. Gender: must be male or female (other than the default value which is unspecified).
7. Phone number: must start with left parenthesis followed by three digits followed by a right parenthesis followed by three digits followed by a dash and then followed by four digits. Format: (999)999-9999
8. Email address: must be a valid email address (see Email address format).
9. Date of birth: format: mm-dd-yyyy.
10. Postal code: must be a valid Canadian postal code. Have a look at the structure
of the Postal Code.
11. Street: not empty.
12. City: not empty, only letters.
13. Province: not empty, only letters.
    
# Live Demo
[![Netlify Status](https://api.netlify.com/api/v1/badges/f2ac5f7c-d572-4af8-87cd-a5486215f66d/deploy-status)](https://app.netlify.com/sites/student-form-validation/deploys)

[JS-Form-Validation](https://student-form-validation.netlify.app)