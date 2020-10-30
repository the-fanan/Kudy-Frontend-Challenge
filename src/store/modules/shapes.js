const getDefaultState = () => {
    return {
        created: {},
    }
}

const shapes = {
    namespaced: true,
    state: getDefaultState(),
    getters: {
        /**
         * getter: (state) => {
         *  return "A rework" + state.element
         * }
         */
    },
    mutations: {
        /**
         * mutation(state, data) {
         *  state.element = data;
         * },
         */
    },
    actions: {
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

export default shapes;