import React from 'react';
import { connect } from "react-redux";

import { toggleFamilyCheckbox } from "../actions";

const mapStateToProps = (state) => {
    console.info("FamilyCheckbox mapStateToProps state:", state)
    return {
        active: state.toggleFamilyCheckbox.familyCheckbox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ontoggleFamilyCheckbox: (event) => {
            // console.info("ontoggleFamilyCheckbox props" ,props)
            dispatch(toggleFamilyCheckbox(event.target.value))
        }
    }
}

const FamilyCheckbox = (props) => {

    const { ontoggleFamilyCheckbox, active }  = props;

    return (
        <div className="pa3">
            <button
                href="#"
                onClick={ontoggleFamilyCheckbox}
                value={Boolean.prototype.toString(active)}
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray"
            >family members only?</button>
        </div>  
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyCheckbox);