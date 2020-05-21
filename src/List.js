import React, {useState} from 'react';
import './List.css';
import ListItem from "./ListItem";

function List() {
    const [items, setItems] = useState([
        "Eat Lunch",
        "Drink Water",
    ]); 
    function onChange(event){
        const value = event.target.value;
        if (event.key==="Enter"){
            console.log("saving",value);
            const newList = items.concat([value]);
            setItems(newList);
            event.target.value="";
        }
    }
    function removeItem(index) {
        const newList = items.filter((_, i) =>i !== index);
        setItems(newList);
    }
        
    return (
        <div className="List">
            <input 
                className="List-input"
                type="text"
                placeholder="Add to do item"
                onKeyDown={onChange}
                />
                {items.map((item, index) => <ListItem text={item} key={index} onClick={()=> removeItem(index)} />)}

        </div>
    );
}

export default List;
