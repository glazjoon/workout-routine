<template>
  <RadListView
    for="exercise in exercises"
    itemReorder="true"
    reorderMode="HoldAndDrag"
    swipeActions="true"
    @itemSwipeProgressStarted="onSwipeStarted"
  >
    <v-template name="header">
      <GridLayout columns="*, 80, 80" row="50" id="header">
        <Label class="first" row="0" col="0" verticalAlignment="middle">Exercise</Label>
        <Label row="0" col="1" verticalAlignment="middle">Weight</Label>
        <Label row="0" col="2" verticalAlignment="middle">Sets</Label>
      </GridLayout>
    </v-template>

    <v-template>
      <GridLayout columns="*, 80, 80" rows="60" class="content">
        <Label
          id="name"
          class="first"
          row="0"
          col="0"
          verticalAlignment="middle"
        >{{ exercise.name }}</Label>
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
      <GridLayout columns="*, auto, auto" backgroundColor="White">
        <StackLayout
          id="increment-btn"
          col="1"
          class="swipe-item right"
          orientation="horizontal"
          @tap="onIncrementExercise"
        >
          <Label text="Inc" verticalAlignment="center" horizontalAlignment="center"/>
        </StackLayout>
        <StackLayout
          id="edit-btn"
          col="2"
          class="swipe-item right"
          orientation="horizontal"
          @tap="onEditExercise"
        >
          <Label text="Edit" verticalAlignment="center" horizontalAlignment="center"/>
        </StackLayout>
      </GridLayout>
    </v-template>

    <v-template name="footer">
      <Button>Skapa ny övning</Button>
    </v-template>
  </RadListView>
</template>

<script>
import { INCREMENT_EXERCISE } from '../types';
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
    onEditExercise({ object }) {
      this.$navigateTo(routes.editExercise, {
        transition: 'slideRight',
        props: {
          exercise: this.exercises[
            this.exercises.indexOf(object.bindingContext)
          ]
        }
      });
    },
    onIncrementExercise({ object }) {
      console.log(object);
      console.log(object.bindingContext);
      this.$store.commit(INCREMENT_EXERCISE, object.bindingContext);
    },
    onSwipeStarted({ data, object }) {
      const swipeLimits = data.swipeLimits;
      const swipeView = object;

      const incrementButton = swipeView.getViewById('increment-btn');
      const editButton = swipeView.getViewById('edit-btn');

      const totalMeasuredWidth =
        incrementButton.getMeasuredWidth() + editButton.getMeasuredWidth();

      swipeLimits.right = totalMeasuredWidth;
      swipeLimits.threshold = totalMeasuredWidth;
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

.swipe-item {
  width: 65px;
  border-bottom-width: 1px;
  border-bottom-color: #efefef;
  background-color: #efefef;
}
</style>
