const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
	// Mudar o tema
	document.body.classList.toggle('light');
});