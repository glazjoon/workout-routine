import { UPDATE_EXERCISE, CREATE_EXERCISE, INCREMENT_EXERCISE } from './types';

export default {
    state: {
        exercises: [
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
                weight: 85,
                increment: 2.5
            }
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