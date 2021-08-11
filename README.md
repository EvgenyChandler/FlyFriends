# 🛫 [Fly-Friends](https://fly-friends.herokuapp.com/)🛬
https://fly-friends.herokuapp.com/

## Описание

Single-page приложение на **React**, позволяющее определить оптимальный город, в котором лучше всего встретиться двум друзьям, живущим в разных городах России.
Оптимальность определяется с помощью цен на авиабилеты.

##### Главная страница

+ Панель навигации (Личный кабинет / Вход / Регистрация)
+ Область поиска
+ Отрисовка вариантов поездок
+ Интерактивная карта с метками

##### Личный кабинет

+ Загрузка аватара (**Drag-and-drop**)
+ Список друзей
+ Поиск / Добавление друзей
+ Отображение сохранненых поездок
+ Отображение приглашений в поездку
+ Чат (**Firebase**)

## Функционал

#### Регистрация / Авторизация
+ Проверка (валидация) формы на клиентской части
+ Проверка валидатором введенных данных (Имя, пароль, email) на стороне сервера
+ Регистрация и аутентификация с помощью JWT токенов
+ Активация аккаунта через ссылку на почте (подтверждение актуальности email)
+ Форма восстановления забытого пароля
+ Регистрация / авторизация через соц. сеть Facebook или аккаунт Google

#### Алгоритм поиска

Работа с внешним API. Систематизация полученных данных о каждом вылете из городов указанных в поиске, на конкретную дату. Выборка совпадающих городов и фильтрация их по цене перелета.

#### Карта

Использование Google Maps API для визуального отображения пользователей на карте и меток городов из результатов поиска.

#### Поездки

Создано три типа поездок, с возможность сохранения в Личном кабинете пользователя. Добавлена функция "Пригласить друга в поездку", можно выбрать из списка друзей. А так же пройти по ссылке для покупки билета с заполненной формой (Город / Дата вылета).
Разделение поездок на две версии, те которые создал пользователь и те в которые пригласили (с индикатором новых приглашений).

#### Личный кабинет

В Личном кабинете есть возможность поиска и добавления друзей из числа зарегистрированных пользователей. Реализован функционал добавления аватарки пользователя.

#### Чат

Реализован чат на Firebase. Пользователь может открыть чат поездки и начать переписку с приглашенным в нее другом.

## Стек технологий

React, Redux, ExpressJS, Node.js, MongoDB (Mongoose), Material-UI, API-Aviasales, сторонние библиотеки для добавления необходимого функционала.
