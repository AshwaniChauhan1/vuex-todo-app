<template>
  <v-app>
    <v-content>
      <taskForm />
      <taskList />
    </v-content>
  </v-app>
</template>

<script>
import taskForm from "@/components/taskForm";
import taskList from "@/components/taskList";
export default {
  name: "App",

  components: {
    taskForm,
    taskList
  },
  data: () => ({
    //
  }),
};
</script>
