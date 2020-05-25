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
}

.explanation {
    font-size: 16px;
    color: #757575;
    margin: 8px;
}

.answer {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    background-color: rgba(255, 235, 3, 0.5);
    margin-right: 8px;
}

@media (min-width: 600px) {
  .answer--has-explanation {
      flex-direction: row;
  }
}
</style>

<div class="answer" class:answer--has-explanation={answer.explanationText}>
    <button on:click={() => progress.postAnswer(answer)}>{answer.answerText}</button>
    {#if answer.explanationText}
        <div class="explanation">{answer.explanationText}</div>
    {/if}
</div>