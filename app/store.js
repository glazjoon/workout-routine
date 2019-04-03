import { UPDATE_EXERCISE, CREATE_EXERCISE, INCREMENT_EXERCISE } from './types';

export default {
    state: {
        exercises: [
            {
                id: 0,
                name: 'Chins',
                reps: 10,
                sets: 3,
                weight: -45,
                increment: 5
            },
            {
                id: 1,
                name: 'Bänkpress',
                reps: 10,
                sets: 3,
                weight: 35,
                increment: 5
            },
            {
                id: 2,
                name: 'Benpress',
                reps: 10,
                sets: 3,
                weight: 120,
                increment: 5
            },
            {
                id: 3,
                name: 'Framsida lår',
                reps: 10,
                sets: 3,
                weight: 55,
                increment: 2.5
            },
            {
                id: 4,
                name: 'Baksida lår',
                reps: 10,
                sets: 3,
                weight: 60,
                increment: 2.5
            },
            {
                id: 5,
                name: 'Bicepscurl',
                reps: 10,
                sets: 3,
                weight: 10,
                increment: 2
            },
        ]
    },
    mutations: {
        [CREATE_EXERCISE](state, exercise) {
            state.exercises.push(exercise);
        },
        [UPDATE_EXERCISE](state, exercise) {
            var index = state.exercises.indexOf(x => x.id == exercise.id);
            state.exercises[index] = exercise;
        },
        [INCREMENT_EXERCISE](state, exercise) {
            var index = state.exercises.indexOf(exercise);
            var exercise = state.exercises[index];

            if (exercise.reps == 8) {
                exercise.reps = 10;
            }
            else {
                exercise.reps = 8;
                exercise.weight += exercise.increment;
            }
        }
    }
};