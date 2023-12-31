# Vibe Lab

### Стек:

![](https://img.shields.io/badge/pnpm-8.6-green)
![](https://img.shields.io/badge/next-13.4.9-yellowgreen)
![](https://img.shields.io/badge/react-18.2.0-red)
![](https://img.shields.io/badge/node-18-yellowgreen)
![](https://img.shields.io/badge/chakra-2.7.1-green)
![](https://img.shields.io/badge/typescript-4.9.5-green)
![](https://img.shields.io/badge/react--query-4.29.19-green)

### Структура проекта:

- pages - конфигурационные страницы
- public - вся статика
- src - корневая папка проекта
  - **config** - конфиг проекта
    - api - конфиг для HTTP-запросов
    - layout - конфиг каркаса страницы
    - providers - глобальные провайдеры
    - styles - глобальные стили
    - theme - кастомизация Chakra UI
  - **modules** - модули проекта (верхний уровень - уровень страницы)
    - api - хуки React Query для доступа к данным
    - sections - компоненты секций страниц
    - subpages - вложенные (динамические) страницы
      - components - компоненты, принадлежащие только данной секции
    - lib - хэлперы модулей, которые незачем класть в shared
  - **shared** - реиспользуемые сущности
    - components - глобальные компоненты
    - hooks - глобальные хуки
    - types - глобальные типы
    - utils - глобальные хэлперы

### Запуск проекта:

Для начала создайте файл .env из файла-примера
`cp .env.example .env`

Затем установите модули: `pnpm i`

Для запуска дев-версии введите команду `pnpm dev`

Для билда - `pnpm build`

### Nodemailer

В `/pages/api/email.js` содержится код создания почтового сервиса. Чтобы отправить через него письмо, отправляйте POST-запрос по урлу `/api/email` (он описан в `/src/config/api/sendEmail.ts`)

Если работа почтовика вас устраивает и вы не особо разбираетесь в Node.js - не меняйте этот код

### Документация по .env:

> Хорошей практикой будет вынести **.env** в переменные CI/CD в Gitlab

- **NEXT_PUBLIC_STRAPI_IMAGE** - урл для получения картинок (если по какой-то причине не получается прокинуть src в компонент Image)
- **NEXT_PUBLIC_STRAPI_URL** - корневой урл для соединения со Strapi
- **NEXT_PUBLIC_MAIL_HOST** - хост SMTP для соединения с почтовым сервисом
- **NEXT_PUBLIC_MAIL_USERNAME** - логин клиента почтовика
- **NEXT_PUBLIC_MAIL_PASSWORD** - пароль клиента
- **NEXT_PUBLIC_MAIL_ENCRYPTION** - шифрование почтовика
- **NEXT_PUBLIC_MAIL_PORT** - порт почтовика
- **NEXT_PUBLIC_MAIL_TO** - e-mail, куда будут приходить письма

## TODO:

Когда административная панель переедет на новый хостинг, то нужно будет добавить в Next.config следующее:

    ```bash
    images: {
    	remotePatterns: [
    		{
    			protocol: https,
    			hostname: ${NEXT_PUBLIC_CLIENT_API_DOMAIN},
    			pathname: '/uploads/**',
    			port: '',
    		},
    	],
    }
    ```
