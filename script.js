const showCatBtn = document.getElementById('showCat');
const statusCodeInput = document.getElementById('statusCode');
const catImage = document.getElementById('catImage');
const errorMsg = document.getElementById('errorMsg');

showCatBtn.addEventListener('click', () => {
  const code = statusCodeInput.value.trim();

  if (!code || code < 100 || code > 599) {
    errorMsg.textContent = "Please enter a valid HTTP status code (100-599).";
    catImage.style.display = "none";
    return;
  }

  const imageUrl = `https://http.cat/${code}.jpg`;

  // Use image load/error handlers instead of fetch (avoids CORS for images)
  errorMsg.textContent = "";
  catImage.style.display = "none";
  showCatBtn.disabled = true;
  const prevText = showCatBtn.textContent;
  showCatBtn.textContent = 'Loading...';

  catImage.onload = () => {
    catImage.style.display = 'block';
    errorMsg.textContent = '';
    showCatBtn.disabled = false;
    showCatBtn.textContent = prevText;
  };

  catImage.onerror = () => {
    errorMsg.textContent = 'Cat image not found for this code.';
    catImage.style.display = 'none';
    showCatBtn.disabled = false;
    showCatBtn.textContent = prevText;
    catImage.src = '';
  };

  // Trigger image load
  catImage.src = imageUrl;
});
