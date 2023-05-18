
const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const addItem = (item) => {
    return {
        type: ADD_ITEM_TO_CART,
        item: item
    }
};


const cartReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = { ...state }; // test with removing ...state
    
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const { id } = action.item;
            return { ...state, [id]: { id, count: 1, }, };

        default:
            return nextState;
    }
}; 


export default cartReducer;