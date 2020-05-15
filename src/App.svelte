<script>
import { question } from "./stores/questionStore"
import { result } from "./stores/resultStore"
import Question from "./Question.svelte"
</script>

<style>
</style>

<h1>Hello!</h1>
<div>
{#if $question}
	<Question question={$question} />
{/if}
<div>{JSON.stringify($result)}</div>
</div>