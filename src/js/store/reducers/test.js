import {
    TestActionConstant
} from 'store/actionConstants/index.js';

import {
    handleActions
} from 'redux-actions';

const defaultState = {
    counter: 0
};

export default handleActions({
    [TestActionConstant.INCREMENT](state, {
        payload
    }) {
        return {
            ...state,
            counter: state.counter + payload.delta
        };
    },
    [TestActionConstant.DECREMENT](state, action) {
        return {
            ...state,
            counter: state.counter - payload.delta
        };
    }
}, defaultState);
