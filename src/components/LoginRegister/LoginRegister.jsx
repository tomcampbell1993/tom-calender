import { useState } from 'react';


export default function LoginRegister({onLogin}) {

    const [register, setRegister] = useState(true);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    let errors = [];

    //pasword rules: (i know regex is easier but i want to do it this way cos of a test i fked up)
    // 1.minimum 8 characters long
    // 2.must have at lease One special character of either (@, #, $, %, &)
    // 3.must not contain more than 4 of the same character in a row
    // 4.must include one lowercase letter, one uppercase letter, and one number
    function checkPassword() {
        setMessage("");
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
        if (errors.length > 0) {
            return false;
        }
        return true;
    }

    function CreateErrorMessage() {
        let message = "";
        errors.forEach((err) => {
            if(err === 1){
                message += "Password must be at least 8 characters long. ";
            }
            if(err === 2){
                message += "Password must contain at least one special character (@, #, $, %, &). ";
            }
            if(err === 3){
                message += "Password must not contain more than 4 of the same character in a row. ";
            }
            if(err === 4){
                message += "Password must include one lowercase letter, one uppercase letter, and one number. ";
            }
        });
        console.log(message);
        setMessage(message);
    }

    async function HandleSubmit(e) {
        e.preventDefault();

        setMessage("");
        setMessageType("");

        if (register) {
            const isValid = checkPassword();
            if (!isValid) {
                return;
            }
        }

        try {
            const endpoint = register ? "/api/register" : "/api/login";

            const response = await fetch(`http://localhost:3001${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            setMessage(data.message);

            if (response.ok) {
                setMessageType("success");
                if(!register){
                    onLogin(email);
                }
            }
            else {
                setMessageType("error");
            }

        }
        catch (error) {
            setMessage("There has been an error");
            setMessageType("error");
        }
    }

    return (
        <div className="login-register">
            <h1>{register ? "Register" : "Login"}</h1>
            <form onSubmit={HandleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                >
                </input>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => setRegister(!register)}>
                {register ? "Switch to login" : "Switch to register"}
            </button>
            <p>
                {message}
            </p>
        </div>
    )
}
