## Задание:

Нужно написать корректный `webpack.config.js`, который собирает код и складывает его в dist.

Нельзя вносить изменения в metajson-loader, кроме отмеченной комментарием ??? строки.

## Подсказки:

- Нужно написать лоадеры для `json5` и `txt` файлов. При этом для `json5` файлов нужно зачейнить `metajson` лоадер, внимательно изучите как он работает!
- Также нужно чтобы при запуске `npm run watch` и внесений изменений в `./loaders/meta-settings.json` происходила автоматическая пересборка. Для этого нужно добавить некий вызов в `loaders/metajson-loader.js`.
- Не забудьте добавить `json5` в зависимости для парсинга

## Проверка:

`npm run build`
Собранный бандл в dist закоммичен в git, поэтому после сборки должен быть нулевой git diff.

## Перед тем как начать

- установите зависимости в корне проекта `npm i`
- для запуска сборки перейдите в терминале в папку 7 и там `npm run build` или `npm run watch`
