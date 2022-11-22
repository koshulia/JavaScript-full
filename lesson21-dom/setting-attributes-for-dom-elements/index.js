export function finishForm() {
  const form = document.querySelector('.login-form');
  const password = document.querySelector('input');
  const input = document.createElement('input');
  if (!form) return;
  input.setAttribute('name', 'login');
  password.setAttribute('type', 'password');
  form.prepend(input);
}

finishForm();
