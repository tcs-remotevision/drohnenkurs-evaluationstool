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
    padding: 8px 16px;
    border: none;
    margin-right: 8px;
}

.explanation {
    font-size: 16px;
    color: #757575;
}

.answer {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}
</style>

<div class="answer">
    <button on:click={() => progress.postAnswer(answer)}>{answer.answerText}</button>
    <div class="explanation">{answer.explanationText}</div>
</div>