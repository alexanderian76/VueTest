
const userModule = {
    state: {
        user: []
    },
    mutations:{
        setUser(state, data) {
            state.user.push(data);
        }
    },
    actions: {
        getUser({ commit }, data) {
            
                    commit('setUser', data);
        }
    }

};

export default userModule;
