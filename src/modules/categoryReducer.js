//action
const CATEGORY = ['movie', 'tv', 'search'];

// action create
export const findCategory = () => {
    return {
        type : CATEGORY
    }
}

// reducer
const categoryReducer = (state = CATEGORY, action) => {
    switch(action.type) {
        case CATEGORY :
            return [...state];
        default :
            return state;
    }
}

export default categoryReducer;