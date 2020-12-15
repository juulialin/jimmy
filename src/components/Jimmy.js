import React, { useState } from "react";

function Jimmy () {
    const [count, setCount] = useState(0);
    const [itemName, setItemName] = useState ("");
    
    return (
    <div>
           <input
    name="item"
    type="text"
    value={itemName}
    onChange={e => setItemName(e.target.value)}
    />
    <p>
        {itemName}
    </p>
    {itemName ? itemName === "Jimmy" ? <p>Voce esta certo</p> : <p>Voce errou</p> : <p></p>}
    </div>
    );
}

export default Jimmy;

