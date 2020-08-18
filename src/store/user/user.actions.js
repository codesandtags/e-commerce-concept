// Action Types
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// Action creators
export const setCurrentUser = (user) => {
    return  {
        type: SET_CURRENT_USER,
        payload: user
    };
};