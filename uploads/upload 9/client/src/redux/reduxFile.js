import { createStore } from "redux"
import { combineReducers } from "redux"


let initialStudentInfo = {name:null,department:null,section:null,semester:1}
function storeStudentInfo(state=initialStudentInfo, action){
    switch(action.type){
        case 'addStudent': return action.payload
        default: return state
    }
}

let initialTeacherInfo = {name:null,email:null}
function storeTeacherInfo(state=initialTeacherInfo,action){
    switch(action.type){
        case 'addTeacher': return action.payload
        default: return state
    }
}

let initialTeacherCourses = []
function storeTeacherCourses(state=initialTeacherCourses,action){
    switch(action.type){
        case 'addTeacherCourses': return action.payload
        default: return state
    }
}

// let selectedCourseTeacher = ''
// function storeSelectedCourseTeacher(state=selectedCourseTeacher,action){
//     switch(action.type){
//         case 'selectCourseTeacher': return action.payload
//         default: return state
//     }
// }

let rootReducer = combineReducers({storeStudentInfo,storeTeacherInfo,storeTeacherCourses})

const store = createStore(rootReducer)

export default store