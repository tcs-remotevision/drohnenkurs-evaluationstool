import { derived } from "svelte/store"
import { config } from "./configStore"
import { progress } from "./progressStore"
import { mapValues, filter, map, flatten, uniq } from "lodash-es"

export const result = derived([config, progress], ([$config, $progress]) => {
    const courses = mapValues($config.results, (criteria, domain) => {
        const possibleResults = filter(criteria, criterion => {
            return criterion.minPoints <= $progress.currentScores[domain] && criterion.maxPoints >= $progress.currentScores[domain]
        })
        return uniq(flatten(map(possibleResults, "courseIdRecommendations")))
    })
    return $config.loaded && courses
})
