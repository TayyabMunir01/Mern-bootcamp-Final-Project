import { createStore } from "redux"
import { combineReducers } from "redux"


let initialStudentInfo = {name:null,department:null,section:null,semester:1}
function storeStudentInfo(state=initialStudentInfo, action){
    switch(action.type){
        case 'addStudent': return action.payload
        default: return initialStudentInfo
    }
}

let initialTeacherInfo = {name:null,email:null}
function storeTeacherInfo(state=initialTeacherInfo,action){
    switch(action.type){
        case 'addTeacher': return action.payload
        default: return initialTeacherInfo
    }
}

let rootReducer = combineReducers({storeStudentInfo,storeTeacherInfo})

const store = createStore(rootReducer)

export default store