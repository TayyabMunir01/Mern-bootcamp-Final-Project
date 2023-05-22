import { createStore } from "redux"
import { combineReducers } from "redux"


let initialStudentInfo = {name:null,department:null,section:null,semester:1}

function storeStudentInfo(state=initialStudentInfo, action){
    switch(action.type){
        case 'add': return action.payload
        default: return initialStudentInfo
    }
}

let rootReducer = combineReducers({storeStudentInfo})

const store = createStore(rootReducer)

export default store