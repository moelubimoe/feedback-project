document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const feedbackBtn = document.getElementById('feedbackBtn');
    const modal = document.getElementById('feedbackModal');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.getElementById('cancelBtn');
    const feedbackForm = document.getElementById('feedbackForm');
    
    // Открытие модального окна
    feedbackBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запрет прокрутки фона
    });
    
    // Закрытие модального окна
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Возврат прокрутки
    }
    
    // Обработчики закрытия
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // Закрытие при клике вне модального окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Обработка отправки формы
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Здесь можно добавить отправку данных на сервер
        // Для демонстрации просто выводим в консоль
        console.log('Форма отправлена:', { email, subject, message });
        
        // Показываем сообщение об успехе
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        
        // Очищаем форму и закрываем модальное окно
        feedbackForm.reset();
        closeModal();
    });
    // Анимация при загрузке
    const content = document.querySelector('.content');
    content.style.opacity = 0;
    content.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        content.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    }, 300);
});