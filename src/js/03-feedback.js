// Імпорт функції throttle з бібліотеки 'lodash.throttle'
import throttle from 'lodash.throttle';

// Вибір форми для надсилання відгуків з DOM структури документа
const formFeedback = document.querySelector('.feedback-form')
// console.dir(formFeedback);

// Додавання слухача події 'input' до форми з обмеженням частоти викликів функції за допомогою throttle
formFeedback.addEventListener('input', throttle(onInput, 500));
// Додавання слухача події 'submit' до форми
formFeedback.addEventListener('submit', onSubmit);

// Ключ для зберігання даних форми в Local Storage
const LOCALSTORAGE_KEY = "feedback-form-state";

// Отримання з Local Storage збережених даних форми або ініціалізація пустого об'єкту
let feedbackFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
console.log(feedbackFormData);

// Деструктуризація елементів форми
const { email, message } = formFeedback.elements;
console.log(formFeedback.elements);

// Відновлення стану форми зі збережених даних
reload();

// Функція, яка викликається при введенні даних у поля форми
function onInput(evt) {
    // Оновлення об'єкта даних форми з введеними даними
    feedbackFormData = { email: email.value, message: message.value };
    // Збереження оновлених даних форми в Local Storage
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormData));
}

// Функція, яка викликається при надсиланні форми
function onSubmit(evt) {
    evt.preventDefault();
    // Перевірка на наявність заповнених полів
    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
    } 
    // Створення об'єкта для виведення даних у консоль
    const object = {
            email: email.value,
            password: message.value,
        }
    console.log(object);
    
    // Видалення збережених даних форми з Local Storage
    localStorage.removeItem(LOCALSTORAGE_KEY)
    // Очищення полів форми
    evt.currentTarget.reset();
}

// Функція для відновлення даних у формі зі збережених значень
function reload() {
    if (feedbackFormData) {
    // Встановлення значень полів форми зі збережених даних
    email.value = feedbackFormData.email || '';
    message.value = feedbackFormData.message || '';
  }
}
