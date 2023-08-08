import throttle from 'lodash.throttle';

// const formFeedback = document.querySelector('.feedback-form')
// // console.dir(formFeedback);

// formFeedback.addEventListener('input', onInput)
// formFeedback.addEventListener('submit', onSubmit)

// const LOCALSTORAGE_KEY = "feedback-form-state";

// function onInput(evt) {
// localStorage.getItem(LOCALSTORAGE_KEY)
// }

// function onSubmit(evt) {
//     evt.preventDefault();
//     const { email, message } = evt.currentTarget.elements;
//     if (email.value === '' || message.value === '') {
//         return alert('Please fill in all the fields!');
//     } 
//     const object = {
//             email: email.value,
//             password: message.value,
//         }
//     console.log(object);
    
//     // localStorage.removeItem(LOCALSTORAGE_KEY)
//     evt.currentTarget.reset();
// }


