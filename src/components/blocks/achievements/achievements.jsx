import React from 'react';
import {useSelector, useDispatch, connect} from "react-redux";
import {selectAchievement, removeAchievement} from "/src/actions/formActions/formActions";


const Achievements = (props) => {
    const dispatch = useDispatch()

    const checkboxChangeHandler = (event) => {
        const target = event.target
        console.log(target)
        if (target.checked) {
            const newAchievement = {
                name: target.name
            }
            dispatch(selectAchievement(newAchievement))
            return
        }
        return dispatch(removeAchievement(target.name))
    }

    return (
        <fieldset>
            <p>Ваши безбашенные
                достижения в путешествии</p>
            <label>
                <input type='checkbox' name='selfieShark' onChange={checkboxChangeHandler}/>Сделал селфи с акулой
            </label>
            <label>
                <input type='checkbox' name='tanned' onChange={checkboxChangeHandler}/>Обгорел на пляже
            </label>
            <label>
                <input type='checkbox' name='sawChackNoris' onChange={checkboxChangeHandler}/>Видел Чака Норриса
            </label>
            <label>
                <input type='checkbox' name='boughtSouvenirs' onChange={checkboxChangeHandler}/>Накупил сувениров
            </label>
            <label>
                <input type='checkbox' name='HeldTheTower' onChange={checkboxChangeHandler}/>Удержал башню
            </label>
            <label>
                <input type='checkbox' name='smashedTheHotel' onChange={checkboxChangeHandler}/>Разгромил отель
            </label>
        </fieldset>
    );
};

export default Achievements;
