import React, { useState } from 'React';

    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    
        
    return(
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label> 
                <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label htmlFor="cPassword">Confirm Password: </label>
                <input type="text" name="cPassword" onChange={ (e) => setCPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
