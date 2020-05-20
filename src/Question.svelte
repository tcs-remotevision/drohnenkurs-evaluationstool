<script>
import Answer from "./Answer.svelte"
export let question
</script>

<style>
.title {
    font-size: 24px;
}

.explanation {
    font-size: 16px;
    color: #757575;
    margin-top: 16px;
}

.answers {
    display: flex;
    margin-top: 16px;
    flex-direction: column;
}

@media (min-width: 600px) {
  .answers {
      flex-direction: row;
  }
}
</style>

<div>
    <div class="title">{question.questionText}</div>
    <div class="explanation">{question.explanationText}</div>
    <div class="answers">
        {#each question.answers as answer}
            <Answer answer={answer} />
        {/each}
    </div>
</div>