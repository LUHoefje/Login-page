const toggleButton = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

toggleButton.addEventListener('click', () => {
	const isPassword = passwordInput.type === 'password';
	passwordInput.type = isPassword ? 'text' : 'password';
	toggleButton.textContent = isPassword ? 'HIDE' : 'SHOW';
	toggleButton.setAttribute('aria-label', `${isPassword ? 'Hide' : 'Show'} password`);
});
