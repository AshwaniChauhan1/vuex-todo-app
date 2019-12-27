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
              <v-time-picker width="220" v-model="form.time"></v-time-picker>
            </div>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-card-text class="red--text"></v-card-text>
          <v-btn color="blue darken-1" text @click="clearForm()">Close</v-btn>
          <v-btn color="blue darken-1" text >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: "taskForm",
  data: () => {
    return {};
  },
  methods: {
    ...mapMutations({
      setDialogValue: 'formData/setDialogValue',
      clearForm:'formData/clearForm'
    }),
    ...mapActions({
      closeFunction: 'formData/close', // map `this.add()` to `this.$store.dispatch('increment')`
      clearForm: 'formData/clearForm'
    }),
  },
  computed: {
    form() {
      return this.$store.state.formData.form;
    },
    dialogBox: {
      get () {
        return this.$store.state.formData.dialog
      },
      set (val) {
        return this.setDialogValue(val)
      }
    }
  }
};
</script>
<style scoped>
</style>