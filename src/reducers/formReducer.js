import {
    ENTER_EMAIL,
    ENTER_PHONE_NUMBER,
    SELECT_ACHIEVEMENT,
    REMOVE_ACHIEVEMENT,
    CHOOSE_APPLICATION,
    ENTER_FIRST_NAME,
    ENTER_PATRONYMIC,
    ENTER_SECOND_NAME,
    DESCRIBE_EMOTIONS
} from "/src/const/types";

const initialState = {
    firstName: '',
    secondName: '',
    patronymic: '',
    achievements: [],
    phoneNumber: '',
    email: '',
    applications: [],
    emotions: ''
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_FIRST_NAME:
            return {...state, firstName: action.payload}
        case ENTER_SECOND_NAME:
            return {...state, secondName: action.payload}
        case ENTER_PATRONYMIC:
            return {...state, patronymic: action.payload}
        case ENTER_PHONE_NUMBER:
            return {...state, phoneNumber: action.payload}
        case ENTER_EMAIL:
            return {...state, email: action.payload}
        case DESCRIBE_EMOTIONS:
            return {...state, emotions: action.payload}
        case SELECT_ACHIEVEMENT:
            return {...state, achievements: [...state.achievements, action.payload]}
        case REMOVE_ACHIEVEMENT:
            return {...state, achievements: [...state.achievements].filter((achievement) => achievement.name !== action.payload)}
        case CHOOSE_APPLICATION:
            return {...state, applications: [...state.applications, action.payload]}
        default:
            return state
    }
}