<script>
import { question } from "./stores/questionStore"
import Question from "./Question.svelte"
</script>

<style>
</style>

<h1>Hello!</h1>
<div>
	<Question question={$question} />
</div>