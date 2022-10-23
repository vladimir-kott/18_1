import { taskDeleted } from "./actionTypes";
import { taskUpdated } from "./actionTypes";

export function taskReducer(state = [], action) {
    switch (action.type) {
        case taskUpdated: {
            const newArray = [...state];
            const elementIndex = newArray.findIndex(
                (el) => el.id === action.payload.id
            );
            newArray[elementIndex] = {
                ...newArray[elementIndex],
                ...action.payload,
            };
            return newArray;
        }
        case taskDeleted: {
            const incomingArray = [...state]
            const elementDeletedIndex = incomingArray.findIndex(
                (el) => el.id === action.payload.id
            );
            incomingArray.splice(elementDeletedIndex,1)
            return incomingArray;
        }
        default:{
            /*console.log('pressed')*/
            return state;
        }
    }
}
