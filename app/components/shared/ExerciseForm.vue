<template>
  <StackLayout orientation="vertical">
    <GridLayout columns="*" rows="auto">
      <Label class="data-label" row="0" col="0">Namn</Label>
      <TextField class="data-field" row="1" col="0" v-model="exercise.name" hint="Övningens namn" />
    </GridLayout>

    <GridLayout columns="*, *" rows="auto">
      <Label row="0" col="0">Vikt (kg)</Label>
      <Label row="0" col="1">Ökning (kg)</Label>
      <TextField row="1" col="0" v-model="exercise.weight" keyboardType="number"></TextField>
      <TextField row="1" col="1" v-model="exercise.increment" keyboardType="number"></TextField>
    </GridLayout>

    <GridLayout columns="*, *" rows="auto">
      <Label row="0" col="0">Sets</Label>
      <Label row="0" col="1">Reps</Label>
      <TextField row="1" col="0" hint="3" v-model="exercise.sets" keyboardType="number" ></TextField>
      <TextField row="1" col="1" hint="10" v-model="exercise.reps" keyboardType="number"></TextField>
    </GridLayout>
    <Button @tap="onTapSave()">Spara</Button>
  </StackLayout>
</template>

<script>
export default {
  name: 'ExerciseForm',
  props: {
    exercise: Object
  },
  methods: {
    onTapSave() {
      this.$emit('saved');
    }
  }
};
</script>

<style scoped>
StackLayout {
  margin-top: 15px;
}

GridLayout {
  margin: 0 15px 0 15px;
}

label {
  padding-left: 5px;
}

TextField {
  margin-top: 10px;
  margin-bottom: 10px;
}

button {
  margin: 15px 15px 15px 15px;
}
</style>
