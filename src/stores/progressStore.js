import { writable } from "svelte/store"

function createStore() {
    const {subscribe, update } = writable({
        currentQuestion: 0,
        currentScores: {}
    })

    return {
        subscribe,
        postAnswer(answer) {
            console.log(answer)
            update(state => ({
                ...state,
                currentQuestion: state.currentQuestion + 1
            }))
        }
    }
}

export const progress = createStore()