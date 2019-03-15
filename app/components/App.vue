<template>
  <Page>
    <ActionBar title="Träningsschema">
      <ActionItem android.systemIcon="ic_menu_add" text="Skapa" @tap="onTapCreate()"/>
    </ActionBar>
    <Exercises></Exercises>
  </Page>
</template>

<script>
import routes from '@/routes';
import Exercises from './Exercises.vue';
import CreateExercise from './CreateExercise.vue';

export default {
  name: 'App',
  components: {
    Exercises,
    CreateExercise
  },
  methods: {
    onTapCreate(){
      this.$navigateTo(CreateExercise);
    }
  }
};
</script>

<style scoped>
</style>
