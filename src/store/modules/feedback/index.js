import mutations from './mutations.js';
import actions from './action.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            lastFech: null,
            feedback: [
                {
                    id: '001',
                    userid: 'user1',
                    date: '2/1/2021, 4.35 pm',
                    rating: 5,
                    comment: 'Testing'
                },
                {
                    id: '002',
                    userid: 'user2',
                    date: '21/1/2021, 10.35 pm',
                    rating: 2,
                    comment: ''
                },
            ]
        }
    },
    mutations,
    actions,
    getters
}