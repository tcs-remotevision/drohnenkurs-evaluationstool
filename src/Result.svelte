<script>
import { result } from "./stores/resultStore"
import { map } from "lodash-es"
import Course from "./Course.svelte"

$: domains = map($result, (domainResult, domainName) => ({
    courses: domainResult,
    name: domainName
}))
</script>

<style>
</style>

<div class="result">
    <h1>Kurs-Empfehlungen</h1>
    {#each domains as domain}
        {#if domain.courses.length}
            <h3>{domain.name}</h3>
        {/if}
        {#each domain.courses as course}
            <Course courseid={course} />
        {/each}
    {/each}
</div>