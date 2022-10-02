
window.addEventListener('DOMContentLoaded', () => {
  
  const input = document.querySelector('.input');
  
  function generateCodeOTP() {
    let digit = '0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += digit[Math.floor(Math.random() * digit.length)];
    }
    input.value = result;
  }
  
  generateCodeOTP();
  
  // generate
  const generateButton = document.querySelector('.generate');
  generateButton.addEventListener('click', generateCodeOTP);
  
  // copy 
  const copyButton = document.querySelector('.copy');
  copyButton.addEventListener('click', () => {
    input.select();
    document.execCommand("copy");
    alert('code berhasil disalin');
    alert('code otp yang anda salin : ' + input.value);
  });
  
});