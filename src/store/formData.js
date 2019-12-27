const state = {
    dialog: false,
    form:{task:"",date:"",time:""}
}

const  mutations = {
    setDialogValue (state, value) {
        state.dialog = value
        
    },
    clearForm(state){
        state.form={task:"",date:"",time:""};
        //eslint-disable-next-line
        console.log( state.form.task);
    }
}

const actions = {    
    close({commit}, payload){
        commit('setDialogValue', payload)
    },
    clear({commit},payload){
        commit('clearform',payload)
    }

}

export default ({
    namespaced: true,
    state,actions,mutations
})