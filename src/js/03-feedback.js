import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form')
// console.dir(formFeedback);

formFeedback.addEventListener('input', throttle(onInput, 500));
formFeedback.addEventListener('submit', onSubmit);

const LOCALSTORAGE_KEY = "feedback-form-state";

let feedbackFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
console.log(feedbackFormData);
const { email, message } = formFeedback.elements;
console.log(formFeedback.elements);

reload();

function onInput(evt) {
    feedbackFormData = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormData));
}

function onSubmit(evt) {
    evt.preventDefault();
   
    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    } 
    const object = {
            email: email.value,
            password: message.value,
        }
    console.log(object);
    
    localStorage.removeItem(LOCALSTORAGE_KEY)
    evt.currentTarget.reset();
}


function reload() {
if (feedbackFormData) {
    email.value = feedbackFormData.email || '';
    message.value = feedbackFormData.message || '';
  }
}

