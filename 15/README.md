## Задание:

Внутри packages находятся два проекта app1 и app2.
app1 - хост, который импортирует внутрь себя app2.
Нужно настроить ModuleFederationPlugin и workspace чтобы все корректно работало.

## Подсказки

- в dist лежит код от devServer, поэтому достаточно запускать только его (npm run start в корне после настройки воркспейсов)
- для импорта плагина `const { ModuleFederationPlugin } = require('webpack').container`

## Проверка:

Собранные папки dist закоммичены в git, поэтому после сборки должен быть нулевой git diff.

Для проверки нужно запустить devServer и открыть в браузере localhost:3000 - в консоли не должно быть ошибок.

## Перед тем как начать

- установите зависимости в папке 15 `npm i`
- слинкуйте библиотеки
