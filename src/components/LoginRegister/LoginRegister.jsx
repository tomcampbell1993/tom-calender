import { useState } from 'react';


export default function LoginRegister() {

    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    let errors = [];

    //pasword rules: (i know regex is easier but i want to do it this way cos of a test i fked up)
    // 1.minimum 8 characters long
    // 2.must have at lease One special character of either (@, #, $, %, &)
    // 3.must not contain more than 4 of the same character in a row
    // 4.must include one lowercase letter, one uppercase letter, and one number
    function checkPassword(e) {
        e.preventDefault();
        setErrorMessage("");
        errors = [];

        if (password.length < 8) {
            errors.push(1);
        }
        let foundSpecial = false;
        for (const char of password) {
            if (char === '@' || char === '#' || char === '$' || char === '%' || char === '&') {
                foundSpecial = true;
            }
        }
        if (foundSpecial === false) {
            errors.push(2);
        }
        const letters = password.split('');
        let counter = 0;
        for (let i = 0; i < letters.length - 1; i++) {
            if (letters[i] === letters[i + 1]) {
                counter++;
            }
            else {
                counter = 0;
            }
            if (counter >= 4) {
                errors.push(3);
                break;
            }
        }
        let foundLowercase = false;
        let foundUppercase = false;
        let foundNumber = false;
        for (const char of password) {
            if ("0123456789".includes(char)) {
                foundNumber = true;
                continue;
            }
            if (char === '@' || char === '#' || char === '$' || char === '%' || char === '&') {
                continue;
            }
            if (char === char.toLowerCase() && char !== char.toUpperCase()) {
                foundLowercase = true;
            }
            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                foundUppercase = true;
            }
        }
        if (foundLowercase === false || foundUppercase === false || foundNumber === false) {
            errors.push(4);
        }
        CreateErrorMessage();
    }

    function CreateErrorMessage() {
        let message = "";
        errors.forEach((err) => {
            message += err;
        });
        console.log(message);
        setErrorMessage(message);
    }

    return (
        <div className="login-register">
            <h1>Login/Register</h1>
            <form onSubmit={checkPassword}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <p>
                {errorMessage}
            </p>
        </div>
    )
}
