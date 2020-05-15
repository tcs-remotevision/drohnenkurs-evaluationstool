import { writable } from "svelte/store"
import { mapValues } from "lodash-es"

function getInitialValue() {
    return {
        currentQuestion: 0,
        currentScores: {}
    }
}

function createStore() {
    const {subscribe, update, set } = writable(getInitialValue())

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
        },
        reset() {
            set(getInitialValue())
        }
    }
}

export const progress = createStore()