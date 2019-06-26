<?php
// Включить вывод ошибок для отладки
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);

require_once 'libmail.php';


header('Content-Type: application/json');

echo json_encode(SendMail::send_mail(
    'Robot;robot@site.ru', // От кого
    'osmanov.asan@gmail.com', // Кому
    'Сообщение с сайта', // Тема письма
    $keys = array( // Поля которые надо отправить + дает им челорвеческие имена в письме (остальные не будут отправлены - для хоть какойто безопасности)
        'phone' => 'Номер телефона',
        'email' => 'Email',
        'message' => 'Сообщение',
        'name' => 'ФИО',
        'photo' => 'Фото',
    ),
    array( // Валидация (проверяет на не пустое поле)
        'phone||email', // тут проверит что есть хотябы одно из нескольких (может быть сколько угодно)
    )
));
