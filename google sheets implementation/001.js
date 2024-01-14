const scriptURL = 'https://script.google.com/macros/s/AKfycbzGytLBrMluS4-SC2jthZ_Od2elK9Zgtxm8BljxoempwmS1_45T3sviT5S1GzGzh2IM/exec'

const form = document.forms['contact form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})