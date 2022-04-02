import React from 'react';
import {connect} from "react-redux";
import {enterFirstName, enterSecondName, enterPatronymic} from "/src/actions/formActions/formActions";



const PersonalDataForm = (props) => {

    // const inputChangeHandler = (actionCreater, event) =>{ //TODO объеденить в одну функцию ChangeHandlers
    //     actionCreater(event.target.value)
    // }

    const enterFirstNameHandler = (event) => {
        props.enterFirstName(event.target.value)
    }

    const enterSecondNameHandler = (event) => {
        props.enterSecondName(event.target.value)
    }

    const enterPatronymicHandler = (event) => {
        props.enterPatronymic(event.target.value)
    }
    return (
        <>
            <label htmlFor="secondName">ФАМИЛИЯ:</label>
            <input
                type="text"
                id="secondName"
                value={props.secondName}
                onChange={enterSecondNameHandler}
            />
            <label htmlFor="firstName">ИМЯ:</label>
            <input
                type="text"
                id="firstName"
                value={props.firstName}
                onChange={enterFirstNameHandler}
            />
            <label htmlFor="patronymic">ОТЧЕСТВО:</label>
            <input
                type="text"
                id="patronymic"
                value={props.patronymic}
                onChange={enterPatronymicHandler}
            />
        </>
    );
};

const mapDispatchToProps = {
    enterFirstName,
    enterSecondName,
    enterPatronymic
}

function mapStateToProps(state) {
    return {
        firstName: state.form.firstName,
        secondName: state.form.secondName,
        patronymic: state.form.patronymic,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDataForm);
