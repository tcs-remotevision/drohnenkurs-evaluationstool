<script>
import { config } from "./stores/configStore"
export let courseid

$: course = $config.courses[courseid]
</script>

<style>
.course {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
}

.course > div {
    padding: 8px 0;
}

a {
    color: white;
    background-color: #003d8b;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    padding: 8px;
    border: none;
    margin-right: 8px;
}

.explanation {
    font-size: 16px;
    color: #757575;
}
</style>

<div class="course">
    <div>
        <div>{course.text}</div>
        <div class="explanation">{course.explanationText}</div>
    </div>
    {#if course.link}
        <a href={course.link} target="_parent">{$config.texts.result_button_text}</a>
    {/if}
</div>