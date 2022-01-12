import React, { useState } from react

const PersonCard = (props) => {
    const [ initialAge, setInitialAge ] = useState(props.initialAge);
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Colour: {props.hairColor}</p>
            <button onClick = {(event) => setInitialAge(initialAge + 1)}>Happy Birthday, {props.firstName}!</button>
        </div>
    )
}
export default PersonCard;