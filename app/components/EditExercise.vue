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
import { EDIT_EXERCISE } from '../types';

export default {
  name: 'EditExercise',
  components: {
    ExerciseForm
  },
  props: {
    exercise: Object
  },
  methods: {
    onExerciseSaved() {
      this.$store.commit(EDIT_EXERCISE, this.exercise);
      this.$navigateBack();
    }
  },
  computed: {
    title() {
      return `Redigera ${this.exercise.name}`;
    }
  }
};
</script>

<style scoped>
</style>
