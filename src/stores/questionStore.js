import { derived } from "svelte/store"
import { config } from "./configStore"
import { progress } from "./progressStore"

export const question = derived([config, progress], ([$config, $progress]) => {
    return $config.loaded && $config.questions[$progress.currentQuestion]
})
