import React from 'react';

const FamilyCheckbox = ({ checkboxChange }) => {
    return (
        <div className="pa3">
            <button
                href="#"
                onClick={checkboxChange}
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray"
            >family members only?</button>
        </div>  
    );
}

export default FamilyCheckbox;