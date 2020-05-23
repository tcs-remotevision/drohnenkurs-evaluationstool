import { readable } from "svelte/store"

export const config = readable({
    loaded: false,
    questions: [],
    results: {},
    courses: {},
    texts: {}
}, set => {
    fetch("config.json")
        .then(resp => resp.json())
        .then(set)

    return () => {}
})