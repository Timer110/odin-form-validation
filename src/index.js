import './style.css';

const $signupForm = document.querySelector('[data-js="signup-form"]');
const $inputEmail = $signupForm.querySelector('[data-js="input-signup-email"]');
const $inputPassword = $signupForm.querySelector('[data-js="input-signup-password"]');
const $inputPasswordConfirm = $signupForm.querySelector('[data-js="input-signup-password-confirm"]');
const $inputPostalcode = $signupForm.querySelector('[data-js="input-signup-postalcode"]');
const $inputCountry = $signupForm.querySelector('[data-js="input-signup-country"]');
const $buttonSubmit = $signupForm.querySelector('[data-js="signup-submit"]');
const inputs = [$inputEmail, $inputPassword, $inputPasswordConfirm, , $inputPostalcode, $inputCountry];

//Form-validation functions

function validateField (field) {
    if (field.validity.typeMismatch) {
        field.setCustomValidity('Falsch!')
    } else {
        field.setCustomValidity('');
    };

    if (field.validity.valueMissing) {
        field.setCustomValidity('Bitte alle Felder ausfüllen!');
    } else {
        field.setCustomValidity('');
    };

    if (field.validity.patternMismatch) {
        field.setCustomValidity('Postleitzahl falsch!')
    } else {
        field.setCustomValidity('');
    }
}; 

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        input.dataset.touched = true;
        validateField(input);
    });
})

//Special for equal Passwords

$inputPasswordConfirm.addEventListener('blur', (e) => {
    if ($inputPassword.value !== $inputPasswordConfirm.value) {
        $inputPasswordConfirm.setCustomValidity('Passwörter stimmen nicht überein!');
    } else {
        $inputPasswordConfirm.setCustomValidity('');
    }
});
