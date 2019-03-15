<template>
  <RadListView
    for="exercise in exercises"
    itemReorder="true"
    reorderMode="HoldAndDrag"
    swipeActions="true"
    @itemTap="onItemTap"
  >
    <v-template name="header">
      <GridLayout columns="*, 80, 80" row="50" id="header">
        <Label class="first" row="0" col="0" verticalAlignment="middle">Övning</Label>
        <Label row="0" col="1" verticalAlignment="middle">Vikt</Label>
        <Label row="0" col="2" verticalAlignment="middle">Sets</Label>
      </GridLayout>
    </v-template>

    <v-template>
      <GridLayout columns="*, 80, 80" rows="60" class="content">
        <Label id="name" class="first" row="0" col="0" verticalAlignment="middle">{{ exercise.name }}</Label>
        <Label id="weight" row="0" col="1" verticalAlignment="middle">{{ exercise.weight }} kg</Label>
        <Label
          id="sets"
          row="0"
          col="2"
          verticalAlignment="middle"
        >{{ exercise.reps }} x {{ exercise.sets }}</Label>
      </GridLayout>
    </v-template>

    <v-template name="itemswipe">
      <GridLayout columns="auto, *, auto" backgroundColor="White">
        <StackLayout id="mark-view" col="0" class="swipe-item left" orientation="horizontal">
          <Label text="mark" verticalAlignment="center" horizontalAlignment="center"/>
        </StackLayout>
        <StackLayout id="delete-view" col="2" class="swipe-item right" orientation="horizontal">
          <Label text="delete" verticalAlignment="center" horizontalAlignment="center"/>
        </StackLayout>
      </GridLayout>
    </v-template>

    <v-template name="footer">
      <Button>Skapa ny övning</Button>
    </v-template>
  </RadListView>
</template>

<script>
import { mapState } from 'vuex';
import routes from '../routes';

export default {
  name: 'Exercises',
  computed: {
    ...mapState({
      exercises: state => state.exercises
    })
  },
  data() {
    return {};
  },
  methods: {
    onItemTap({ index, object }) {
      this.$navigateTo(routes.editExercise, {
        transition: 'slideRight',
        props: { exercise: this.exercises[index] }
      });
    }
  }
};
</script>

<style scoped>
#header,
.content {
  border-bottom-width: 1;
}

#header {
  border-bottom-color: lightgray;
  background-color: #efefef;
}

#header label {
  font-weight: bold;
  padding: 10px 10px 10px 10px;
}

#header label.first {
  padding-left: 20px;
}

.content {
  border-bottom-color: #efefef;
  background-color: white;
}

.content label {
  font-size: 16px;
  padding: 5px 10px 5px 10px;
}

.content label.first {
  padding-left: 20px;
}
</style>
