<script>
import { question } from "./stores/questionStore"
import { result } from "./stores/resultStore"
import { progress } from "./stores/progressStore"
import Question from "./Question.svelte"
</script>

<style>
</style>

<h1>Drohnenkurs-Evaluationstool</h1>
<div>
{#if $question}
	<Question question={$question} />
{/if}
<div>{JSON.stringify($result)}</div>
<div>{JSON.stringify($progress.currentScores)}</div>
<button on:click={progress.reset}>reset</button>
</div>