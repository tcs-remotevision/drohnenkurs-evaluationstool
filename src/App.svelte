<script>
import { question } from "./stores/questionStore"
import Question from "./Question.svelte"
import Result from "./Result.svelte"
</script>

<style>
.app {
	padding: 16px;
	max-width: 640px;
}
</style>

<div class="app">
{#if $question}
	<Question question={$question} />
{:else}
	<Result />
{/if}
</div>