import React from 'react';
import { useState } from 'react';

function Policy() {
    const [agree, setAgree] = useState(false);

    return (
        <div>
            <p>Policy</p>
            <input 
                type="checkbox"
                checked={agree}
                onChange={function() {
                    setAgree(!agree);
                }}
            ></input>
            {
                agree && <button>시작</button>
            }
        </div>
    );
}

export default Policy;