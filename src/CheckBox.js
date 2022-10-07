import { useState, useEffect } from 'react';
import './App.css';


function CheckBox(){

    const [text, setText]=useState("");
    const [color, setColor]=useState("#000000");
     
    const submit =(e) =>{
        e.preventDeafault();
        alert(`${text}, ${color}`);
        console.log(`${text}, ${color}`);
    }

    return(
        <div>
            <hr></hr>
            <p>This is another component</p>
            <form onSubmit={submit}>
                <input 
                    type="text"
                    value={text}
                    onChange={
                        (event) =>
                        setText(event.target.value)
                    }
                    placeholder="Enter the color"
                />
                <input 
                    type="color"
                    value={color}
                    onChange={
                        (event) =>
                        setColor(event.target.value)
                    }
                />
                <button>Add</button>
            </form>
        </div>

    );
}

export default CheckBox;