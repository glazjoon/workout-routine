import { UPDATE_EXERCISE, ADD_EXERCISE } from './types';

export default {
    state: {
        exercises: [
            {
                id: 1,
                name: 'Bänkpress',
                reps: 10,
                sets: 3,
                weight: 35,
                increment: 0.5
            },
            {
                id: 2,
                name: 'Benpress',
                reps: 10,
                sets: 3,
                weight: 85,
                increment: 5
            }
        ]
    },
    mutations: {
        [ADD_EXERCISE](state, exercise) {
            state.exercises.push(exercise);
        },
        [UPDATE_EXERCISE](state, exercise) {
            var index = state.exercises.indexOf(x => x.id == exercise.id);
            state.exercises[index] = exercise;
        }
    }
};