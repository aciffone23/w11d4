import produceData from '../mockData/produce.json'

const POPULATE = "produce/POPULATE"; 

export const populateProduce = () => {
    return {
        type: POPULATE, 
        produce: produceData
    }
}

const produceReducer = (state = {}, action) => {
    Object.freeze(state);

    const nextState = {...state}
    
    switch (action.type) {
        case POPULATE:
            //  nextState[action.produce.id] = action.proudce; //why does this work 
            action.produce.forEach(produce => {
                nextState[produce.id] = produce;
            });
             return nextState;
        default:
            return nextState;
    }
}; 

export default produceReducer;