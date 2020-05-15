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
    color: #aaaaaa;
}

.answers {
    display: flex;
}
</style>

<div>
    {#if !question}
        <div>Laden...</div>
    {:else}
        <div class="title">{question.questionText}</div>
        <div class="explanation">{question.explanationText}</div>
        <div class="answers">
            {#each question.answers as answer}
                <Answer answer={answer} />
            {/each}
        </div>
    {/if}
</div>