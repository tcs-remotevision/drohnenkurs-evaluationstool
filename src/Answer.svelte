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
</style>

<div class="answers">
    <button on:click={() => progress.postAnswer(answer)}>{answer.answerText}</button>
</div>