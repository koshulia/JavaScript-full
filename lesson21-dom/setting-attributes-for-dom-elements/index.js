export function finishForm() {
  const form = document.querySelector('input');
  if (!form) return;
  form.setAttribute('name', 'login');
  form.setAttribute('type', 'password');
}

finishForm();
