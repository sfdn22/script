// Function to generate a random captcha code
function generateCaptchaCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaCode = '';
    for (let i = 0; i < 6; i++) {
        captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captchaCode;
}

// Function to render the captcha
function renderCaptcha() {
    const captchaContainer = document.getElementById('captchaContainer');
    const captchaCode = generateCaptchaCode();
    captchaContainer.innerHTML = `<label for="captcha">Captcha:</label>
                                  <input type="text" id="captcha" name="captcha" required>
                                  <p>Captcha: ${captchaCode}</p>`;
}

// Function to validate the captcha
function validateCaptcha() {
    const userInput = document.getElementById('captcha').value;
    const captchaCode = document.querySelector('#captchaContainer p').textContent.split(':')[1].trim();

    if (userInput === captchaCode) {
        alert('Captcha validation successful. Login successful!');
    } else {
        alert('Captcha validation failed. Please try again.');
        renderCaptcha(); // Refresh captcha on validation failure
    }
}

// Initial captcha rendering on page load
renderCaptcha();
