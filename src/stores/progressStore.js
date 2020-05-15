import { writable } from "svelte/store"
import { mapValues } from "lodash-es"

function createStore() {
    const {subscribe, update } = writable({
        currentQuestion: 0,
        currentScores: {}
    })

    return {
        subscribe,
        postAnswer(answer) {
            update(state => {
                const scores = mapValues(answer.scores, (score, domain) => {
                    return (state.currentScores[domain] || 0) + score
                })
                return {
                    currentScores: scores,
                    currentQuestion: state.currentQuestion + 1
                }
            })
        }
    }
}

export const progress = createStore()