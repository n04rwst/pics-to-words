# Pics to Words

**Pics to Words** — это игра для изучения иностранных слов.

## Описание

Игроку предлагается поле с карточками: половина содержит изображения, другая половина — слова. Нужно правильно соединить слово с соответствующей картинкой. Если пара выбрана правильно, карточки исчезают. Если ошибка — они подсвечиваются красным.

## Возможности 

- **Поддержка нескольких языков:** Игра поддерживает несколько языков, что позволяет учить новые слова на разных языках.

- **Навигация с помощью React Router DOM**: Реализована навигация между страницами игры с использованием React Router DOM для улучшения взаимодействия с пользователем.

## Структура проекта

````
src/
  ├── components/      # UI-компоненты
  ├── hooks/           # Кастомные хуки
  ├── styles/          # CSS-стили
  ├── utils/           # Вспомогательные функции 
  ├── App.jsx          # Главный компонент
  ├── main.jsx         # Точка входа
  
public/
  ├── icons/           # Иконки
  ├── images/          # Изображения
  ├── data.json        # Файл с игровыми данными
````

## Технологии

- **React + Vite**
- **React Router DOM**
- **JavaScript**
- **CSS**