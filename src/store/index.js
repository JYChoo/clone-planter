import { createStore } from 'vuex';

import feedbackModule from './modules/feedback/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        feedback: feedbackModule,
        auth: authModule
    },
})

export default store;