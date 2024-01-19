## Задание:

Нужно написать корректный `webpack.config.js` с использованием DLLPlugin. Сборка основнога бандла - dist, dll - vendor.

Для запуска сборки vendor - `npx webpack --config webpack.vendor.config.js`.

## Подсказки

- Сначала добейтесь работоспособности основной сборки
- Используйте babel (он уже есть в зависимостях) с пресетами env и react
- Для сборки стилей style-loader + css-loader
- В vendor надо положить все dependencies
- Не забудьте про HtmlWebpackPlugin

Документация DllPlugin - https://webpack.js.org/plugins/dll-plugin/
В репозитории webpack есть примеры - https://github.com/webpack/webpack/tree/main/examples#table-of-contents

## Проверка:

Собранная папки dist и vendor закоммичены в git, поэтому после сборки должен быть нулевой git diff.

Также при запуске devServer должна корректно открываться и загружаться страница https://localhost:8080.

## Перед тем как начать

- установите зависимости в корне проекта `npm i`
- для запуска сборки перейдите в терминале в папку 11 и там `npx webpack`
