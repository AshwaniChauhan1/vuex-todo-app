const state = {
    dialog: false,
    form:{task:"",date:"",time:"",check:false},
    val:{},
    error:'',
    editIndex:false,
    tasks:[],
    indexval:''
}

const  mutations = {
    setDialogValue (state, value) {
        state.dialog = value;
    },
    clearForm(state){
        state.form={task:"",date:"",time:"",check:false};
    },
    addData(state){
        state.val = {
            task: state.form.task,
            date: state.form.date,
            time: state.form.time,
            check: state.form.check
          };
         state.tasks.push(state.val);
    },
    deleteTask(state,index){
        state.tasks.splice(index, 1);
    },
    editClk(state,index){
      state.dialog = true;
      state.form.task = state.tasks[index].task;
      state.form.date = state.tasks[index].date;
      state.form.time = state.tasks[index].time;
      state.form.check = state.tasks[index].check;
      state.editIndex = true;
      state.indexval = index;
    },
    editData(state){
            state.val = {
              task: state.form.task,
              date: state.form.date,
              time: state.form.time,
              check: state.form.check
            };
            state.tasks.splice(state.indexval, 1, state.val);
            state.editIndex = false;
        }      
    }

const actions = {    
    close({commit}){
        commit('setDialogValue');
        commit('clearForm');
    },
    save({commit}){
        if (state.form.task == "") {
            state.error = "* Task Required";
          } else if (state.form.date == "") {
            state.error = "* Date Required";
          } else if (state.form.time == "") {
            state.error = "* Time Required";
          } else {
              if (state.editIndex == true) {
                commit('editData');
                state.editIndex = false;
              }else{
                commit('addData');
              }
              commit('clearForm');
              commit('setDialogValue',false);
    }
    },
    delete({commit},payload){
        commit('deleteTask',payload);
    },
    editClick({commit},payload){
        commit('editClk',payload);
    }

}

export default ({
    namespaced: true,
    state,actions,mutations
})