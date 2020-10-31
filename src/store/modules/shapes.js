import storageSpaceAvailable from '@/utils/storageSpaceAvailable.js';
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
        addShape(state, data)
        {
            let date = new Date;
            let key = data.component + '-' + date.getTime();
            data = {...data, key};
            let created = {...state.created};
            created[key] = data;
            state.created = created;
        },
        updateShapePosition(state, data)
        {
            let shape = state.created[data.key];
            shape.top = data.top;
            shape.left = data.left;
            state.created[data.key] = shape;
        },
        deleteShape(state, key)
        {
            let created = {...state.created}
            delete created[key];
            state.created = created;
        },
        resetState (state) {
            Object.assign(state, getDefaultState())
        },
        /**
         * mutation(state, data) {
         *  state.element = data;
         * },
         */
    },
    actions: {
        addShape({commit, dispatch}, data)
        {
            //determine if space is available in local storage
            if (!storageSpaceAvailable(data))
            {
                dispatch('alert/showSnackAlert', {type: "error", heading: "Storage Full", messages: ["You can no longer add any more items. Please delete items to reduce storage consumption."]}, {root: true});
                return;
            }
            //if space is available then add else throw error
            commit('addShape', data)
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

export default shapes;