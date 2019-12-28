<template>
  <div>
    <div class="pa-8 blue-grey darken-2 white--text">
      <h1 class="text-center">TODO - APP</h1>
    </div>
    <v-dialog v-model="dialogBox" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-8" color="primary" dark v-on="on">
          <p class="mb-0">Add Task</p>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-text-field label="Enter Task Here..." v-model="form.task"></v-text-field>
            <div class="d-flex justify-space-between">
              <v-date-picker width="220" v-model="form.date"></v-date-picker>
              <v-time-picker width="220" v-model="form.time" v-if="dialogBox"></v-time-picker>
            </div>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-card-text class="red--text">{{error}}</v-card-text>
          <v-btn color="blue darken-1" text @click="closeFunction(false)">Close</v-btn>
          <v-btn color="blue darken-1" text @click="saveFunction">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "taskForm",
  data: () => {
    return {};
  },
  methods: {
    ...mapMutations({
      setDialogValue: "formData/setDialogValue",
      clearForm: "formData/clearForm",
      saveForm: "formData/saveForm"
    }),
    ...mapActions({
      closeFunction: "formData/close",
      clearFunction: "formData/clear",
      saveFunction: "formData/save"
    })
  },
  computed: {
    form() {
      return this.$store.state.formData.form;
    },
    dialogBox: {
      get() {
        return this.$store.state.formData.dialog;
      },
      set(val) {
        return this.setDialogValue(val);
      }
    },
    error() {
      return this.$store.state.formData.error;
    }
  }
};
</script>
<style scoped>
</style>