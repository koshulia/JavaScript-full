export function finishForm() {
  const form = document.querySelector('input');
  form.setAttribute('name', 'login');
  form.setAttribute('type', 'password');
}

finishForm();
