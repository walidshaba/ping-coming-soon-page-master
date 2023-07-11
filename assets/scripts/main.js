const email = document.getElementById('email');
const form = document.getElementById('form2');
const message = document.querySelector('.message p.invalid');
const submit = document.querySelector("#form2 input[type='submit'");
form.addEventListener('submit', (e) => {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    message.classList.add('display');
    e.preventDefault();
    submit.style.marginTop = '25px';
  } else {
    alert('Email Sent');
  }
});
