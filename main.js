
function handleSubmit(e){
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Obrigado! Em breve entraremos em contato pelo WhatsApp.';
  return false;
}
document.getElementById('year').textContent = new Date().getFullYear();
