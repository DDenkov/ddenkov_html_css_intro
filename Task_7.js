/**
 * Да се направи HTML страница съдържаща форма за въвеждане на данни за
 * потребител (first name, last name, EGN , age, address, password,
 * confirm password) и да се извършат следните JavaScript (client side) валидации:
 * 
 * first name - от 1 до 15 символа
 * lastname - от 1 до 15 символа
 * EGN- точно 10 цифри
 * аge- от 18 до 118
 * address- от 1 до 100 символа
 * password- от 6 до 18 символа и съдържа само латински букви и цифри.
 */

let Expr = /^([a-zA-Z0-9]+)$/, e;
var  fName, lName, egn, age, address, password, isNotValid, confirmPassword;
     
    const formValidation = () => {
        
        fName = document.forms["register"]["fName"].value;
            e = fName.length;
            //Check whether First name is between 1 or 15 characters
            if (e < 1 || e > 15) {
                alert('First name must contains at least 1 and not more then' +
                 ' 15 characters!');
            }
            
        lName = document.forms["register"]["lName"].value;
            e = 0;
            e = lName.length;
            //Check whether Last name is between 1 or 15 characters
            if (e < 1 || e > 15) {
                alert('Last name must contains at least 1 and not more then' +
                ' 15 characters!');
            }

        egn = document.forms["register"]["egn"].value;
            e = 0;
            e = egn.length;
            //Check whether EGN is exactly 10 digits
            if (e != 10) {
                alert('EGN field must contains 10 digits!');
            }

        age = document.forms["register"]["age"].value;
            e = 0;
            e = age;
            //Check whether the age is between 18 or 118 years
            if (e < 18 || e > 118) {
                alert('For registration you must be at least 18 years old or not' +
                ' older than 118 years!')
            }

        address = document.forms["register"]["address"].value;
            e = 0;
            e = address.length;
            //Check whether address field is more then 100 simbols 
            if (e < 1 || e > 100) {
                alert('Address must contains at least 1 and not more then 100 characters!');
            }

        password = document.forms["register"]["password"].value;
            e = 0;
            e = password.length;
            //Check whether password field contains only digits and letters 
            isNotValid = !(Expr.test(password));
            //Check whether password field is between 6 or 18 simbols 
            if (e < 6 || e > 18 || isNotValid) {
                alert('Password must contains at least 6, not more then 18 character' +
                ' and only digits and letters!')
            }

        confirmPassword = document.forms["register"]["confirmPassword"].value;
            //Check whether password field and confirm password field is equal
            if (password !== confirmPassword) {
                alert('Password and Confirm Password must match!')
            }
     
    }
