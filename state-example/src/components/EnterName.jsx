import { useState } from "react";

function EnterName() {
    let myName = ''; // Kommer nollställas när komponenten laddas om
    const [name, setName] = useState('');
    console.log(myName);

    return (
        <section>
            <input type="text" placeholder="Enter name"
            onChange={ (event) => { setName(event.target.value); myName = event.target.value; }} />
            <p>{ name }</p>
        </section>
    )
}

export default EnterName;