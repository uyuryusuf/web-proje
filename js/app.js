document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (name === "" && phone === "" && email === "") {
      alert("Lütfen tüm alanları doldurun.");
  } else {
      alert("Mesaj başarıyla gönderildi.");
      
      document.getElementById('contact-form').reset();
  }
});


