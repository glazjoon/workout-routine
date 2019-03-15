<template>
  <Page>
    <ActionBar :title="title">
      <NavigationButton text="Avbryt" android.systemIcon="ic_menu_back" @tap="$navigateBack()"/>
    </ActionBar>
    <ExerciseForm :exercise="exercise" @saved="onExerciseSaved"/>
  </Page>
</template>

<script>
import ExerciseForm from './shared/ExerciseForm.vue';
import { mapState } from 'vuex';
import { CREATE_EXERCISE } from '../types';

export default {
  name: 'CreateExercise',
  components: {
    ExerciseForm
  },
  data() {
    return {
      title: `Skapa ny övning`,
      exercise: {
        name: '',
        reps: 10,
        sets: 3,
        weight: 0,
        increment: 0
      }
    };
  },
  methods: {
    onExerciseSaved() {
      this.$store.commit(CREATE_EXERCISE, this.exercise);
      this.$navigateBack();
    }
  }
};
</script>

<style scoped>
</style>
