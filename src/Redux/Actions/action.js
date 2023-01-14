import { ADD_TASK, CHANGE_DONE, CHANGE_SAVETEXT } from "../Constants/action-types";

export const addTask= (payload) => {
    return {
        type:ADD_TASK,
        payload:payload,
    }

}

export const changeDone= (payload) => {
    //console.log("actt", payload);
    return {
        type:CHANGE_DONE,
        payload:payload,
    };

};

export const changeSaveTask= (payload) => {
    console.log("actt", payload);
    return {
        type:CHANGE_SAVETEXT,
        payload:payload,
    };

}