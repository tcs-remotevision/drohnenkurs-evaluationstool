import { writable } from "svelte/store"
import { mapValues } from "lodash-es"

function getInitialValue() {
    return {
        currentQuestion: 0,
        currentScores: {},
        customCourseIdRecommendations: []
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

                const currentQuestion = answer.customCourseIdRecommendations.length ? -1 : state.currentQuestion + 1
                
                return {
                    currentScores: scores,
                    currentQuestion,
                    customCourseIdRecommendations: answer.customCourseIdRecommendations
                }
            })
        },
        reset() {
            set(getInitialValue())
        }
    }
}

export const progress = createStore()