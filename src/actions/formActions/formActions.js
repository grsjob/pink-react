import {
    ENTER_EMAIL,
    ENTER_PHONE_NUMBER,
    SELECT_ACHIEVEMENT,
    REMOVE_ACHIEVEMENT,
    CHOOSE_APPLICATION,
    ENTER_FIRST_NAME,
    ENTER_PATRONYMIC,
    ENTER_SECOND_NAME,
    DESCRIBE_EMOTIONS,
} from "/src/const/types";

export function chooseApplication(application){
    return {
        type: CHOOSE_APPLICATION,
        payload: application
    }
}

export function selectAchievement(achievement){
    return {
        type:SELECT_ACHIEVEMENT,
        payload: achievement
    }
}

export function removeAchievement(achievement){
    return {
        type:REMOVE_ACHIEVEMENT,
        payload: achievement
    }
}

export function enterEmail(email) {
    return {
        type: ENTER_EMAIL,
        payload: email
    }
}

export function enterPhoneNumber(phone) {
    return {
        type: ENTER_PHONE_NUMBER,
        payload: phone
    }
}

export function enterFirstName(firstName) {
    return {
        type: ENTER_FIRST_NAME,
        payload: firstName
    }
}

export function enterPatronymic(patronymic) {
    return {
        type: ENTER_PATRONYMIC,
        payload: patronymic
    }
}

export function enterSecondName(secondName) {
    return {
        type: ENTER_SECOND_NAME,
        payload: secondName
    }
}

export function describeEmotions(emotions) {
    return {
        type: DESCRIBE_EMOTIONS,
        payload: emotions
    }
}


