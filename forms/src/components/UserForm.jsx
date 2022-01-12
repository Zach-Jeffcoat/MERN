import React, { useState } from 'React';

    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [nameError, setNameError] = useState("");

    
    const titleValidation = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setNameError("Please use at least two (2) letters");
        } else{
            setNameError("");
        }
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setNameError("Please use at least two (2) letters");
        } else{
            setNameError("");
        }
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setNameError("Please use at least five (5) characters")
        } else{
            setNameError("");
        }
        setPassword(e.target.value);
        if(e.target.value.password != e.target.value.cPassword) {
            setNameError("Passwords must be identical");
        } else if(e.target.value.length < 8) {
            setNameError("Passwords must be eight (8) characters in length")
        } else{
            setNameError("");
        }
    }
        
    return(
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" name="firstName" onChange={ titleValidation } />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label> 
                <input type="text" name="lastName" onChange={ titleValidation } />
            </div>
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input type="text" name="email" onChange={ titleValidation } />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={ titleValidation } />
            </div>
            <div>
                <label htmlFor="cPassword">Confirm Password: </label>
                <input type="text" name="cPassword" onChange={ titleValidation } />
            </div>
            {
                nameError?
                <input type="submit" value="Create User" disabled />
                : <input type="submit" value="Create User" />
            }
        </form>
    );
};
    
export default UserForm;
