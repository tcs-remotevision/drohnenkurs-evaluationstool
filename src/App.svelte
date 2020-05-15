<script>
import { onMount } from "svelte"

let allData = {}

onMount(() => {
	fetch("data.json").then(resp => resp.json()).then(data => {
		allData = {
			...data
		}
		console.log(allData)
	})
})
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello!</h1>