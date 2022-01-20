export default {
    registerFeedback(state, payload){
        state.feedback.unshift(payload);
    },
    setFeedback(state, payload){
        state.feedback = payload
    },
    setFetchTimeStamp(state){
        state.lastFetch = new Date().getTime();
    }
};