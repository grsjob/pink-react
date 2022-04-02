import React from 'react';
import PropTypes from 'prop-types';
import PersonalDataForm from "../../blocks/personal-data-form/personal-data-form";
import Achievements from "../../blocks/achievements/achievements";

const Form = (props) => {
    return (
        <form>
            <PersonalDataForm/>
            <Achievements/>
        </form>
    );
};

Form.propTypes = {};

export default Form;
