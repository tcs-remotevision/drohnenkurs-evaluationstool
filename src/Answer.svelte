<script>
import { progress } from "./stores/progressStore"
export let answer
</script>

<style>
button {
    color: white;
    background-color: #003d8b;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    padding: 5px;
    border: none;
    margin: 5px;
}

.explanation {
    font-size: 16px;
    color: #757575;
}
</style>

<div class="answers">
    <button on:click={() => progress.postAnswer(answer)}>{answer.answerText}</button>
    <div class="explanation">{answer.explanationText}</div>
</div>