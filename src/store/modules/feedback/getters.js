export default {
    feedbackList(state, _, _2, rootGetters) {
        const userid = rootGetters.userId;
        return state.feedback.filter(fed => fed.userid === userid);
    },
    hasFeedback(_, getters) {
        return getters.feedbackList.length > 0;
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch;
        if (!lastFetch){
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};