const getDefaultState = () => {
    return {
        snackAlert: {
            show: false,
            type: "",
            heading: "",
            messages: [],
        },
    }
}

const alert = {
    state: getDefaultState(),
    getters: {
        /**
         * getter: (state) => {
         *  return "A rework" + state.element
         * }
         */
    },
    mutations: {
        resetState (state) {
            Object.assign(state, getDefaultState())
        },
        updateSnackAlert (state, data) {
            state.snackAlert.show = true
            state.snackAlert.type = data.type
            state.snackAlert.messages = data.messages
            state.snackAlert.heading = data.heading
        },
        resetSnackAlert (state) {
            state.snackAlert.show = false
            state.snackAlert.type = ""
            state.snackAlert.heading = ""
            state.snackAlert.messages = []
        },
        /**
         * mutation(state, data) {
         *  state.element = data;
         * },
         */
    },
    actions: {
        showSnackAlert ({commit}, data) {
            commit('updateSnackAlert', data);
            setTimeout(() => {
                commit('resetSnackAlert')
            }, 5000);
        }
        /**
         * action({state, commit, dispatch, rootState}, payload) {
         *      commit('mutation/in/other/module', data, { root: true } )
         *      commit('mutation',data)
         *      let localVar = state.element
         *      let localVar = rootState.otherModule.element
         *      dispatch('action/in/other/module', data, { root: true } )
         *      dispatch('action', data)
         * }
         */
    }
}

export default alert;