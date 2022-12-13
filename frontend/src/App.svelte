<script>

	let operand1 = 3
	let operand2 = 4
	let selectedOperation = '+'

  let alloperations =[
    {operation: '+'},
    {operation: '-'},
    {operation: '*'},
    {operation: '/'}
  ]

  let result = null
	
	async function doPost () {
		const res = await fetch('http://localhost:5000/calculate', {
			method: 'POST',
			body: JSON.stringify({
				operand1,
				operand2,
        selectedOperation
			})
		})
		
		const json = await res.json()
		result = json.calcResponse
    }
</script>


<input bind:value={operand1} />
<input bind:value={operand2} />

<select bind:value={selectedOperation}>
  {#each alloperations as operation}
    <option value={operation.operation}>
      {operation.operation}
    </option>
  {/each}
</select>

<button type="button" on:click={doPost}>
	Calculate
</button>
<p>
	Result:
</p>
<pre>
{result}
</pre>