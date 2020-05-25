<script>
import Answer from "./Answer.svelte"
import { some } from "lodash-es"
export let question

$: answerHasExplanationText = some(question.answers, answer => answer.explanationText)
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
    flex-wrap: wrap;
}

@media (min-width: 600px) {
  .answers {
      flex-direction: row;
  }

  .answers--column {
    flex-direction: column;
  }
}
</style>

<div>
    <div class="title">{question.questionText}</div>
    <div class="explanation">{question.explanationText}</div>
    <div class="answers" class:answers--column={answerHasExplanationText}>
        {#each question.answers as answer}
            <Answer answer={answer} />
        {/each}
    </div>
</div>