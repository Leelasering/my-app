import {authAPI,profileAPI} from "../API/api";
import {setUserProfile} from "./Profile_reducer";
import {stopSubmit} from "redux-form";
import {getAuthMeThunkCreator} from "./Auth_reduser";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,


}
const appReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized : true,

            }
        }

        default:
        {
            return {
                ...state,
            };
        }
    }

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
let promise = dispatch(getAuthMeThunkCreator());

promise.then(()=>{
    dispatch(initializedSuccess())
})



}

export default appReducer;