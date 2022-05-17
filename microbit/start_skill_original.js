Promise.race([
	fetch('http://{ip.address}/api/skills/start', {
		method: 'POST',
		body: '{ "skill":null,"method":null }'
	}),
	new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 10000))
])
.then(response => response.json())
.then(jsonData => console.log(jsonData))