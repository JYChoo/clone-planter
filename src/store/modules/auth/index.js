import mutations from './mutations.js';
import actions from './action.js';
import getters from './getters.js';


export default {
    state() {
        return {
            token: null,
            userId: null,
            didLogout: false
        }
    },
    mutations,
    actions,
    getters
}