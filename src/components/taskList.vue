<template>
  <div>
    <v-card class="mx-8">
      <v-card-title class="blue-grey lighten-1 white--text">Task To Do :</v-card-title>
      <div class="d-flex flex-wrap">
        <div class="py-5" v-for="(task,index) in tasks" :key="index">
          <v-card class="my-5 mx-5">
            <v-list-item class="d-flex justify-space-between font-weight-bold title">
              <p class="red--text" v-if="task.check">
                <del>{{ task.task }}</del>
              </p>
              <p v-if="!task.check">{{ task.task }}</p>
              <v-checkbox class="mt-2 ml-3" v-model="task.check"></v-checkbox>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>Date : {{task.date}}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>Time : {{task.time}}</v-list-item-content>
            </v-list-item>
            <v-list-item class="d-flex justify-space-between">
              <div>
                <a class="float-left" @click="editFunction(index)">Edit</a>
              </div>
              <div>
                <a class="float-left" @click="deleteFunction(index)">Delete</a>
              </div>
            </v-list-item>
          </v-card>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "taskList",
  methods: {
    ...mapMutations({
      delete: "formData/deleteTask",
      addData: "formData/addData",
      editClk: "formData/editClk"
    }),
    ...mapActions({
      deleteFunction: "formData/delete",
      editFunction: "formData/editClick"
    })
  },
  computed: {
    form() {
      return this.$store.state.formData.form;
    },
    tasks() {
      return this.$store.state.formData.tasks;
    }
  }
};
</script>