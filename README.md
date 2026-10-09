![SvelteKit Logo](https://st.timeweb.com/cloud-static/apps-logo/svelte.svg)

# SvelteKit SSR

Пример приложения [SvelteKit](https://svelte.dev/docs/kit) с серверным рендерингом (SSR), которое можно развернуть в **Timeweb Cloud Apps** без настройки.

:tada: [Демо]

:rocket: [Создать свой Apps](https://timeweb.cloud/my/apps/create)

:books: [Документация Timeweb Cloud Apps](https://timeweb.cloud/docs/apps)

## Параметры деплоя

При создании приложения включите поддержку SSR — оно развернётся как backend на Node.js.

| Параметр        | Значение               |
| --------------- | ---------------------- |
| Фреймворк       | SvelteKit, SSR включён |
| Команда сборки  | `npm run build`        |
| Команда запуска | `node build`           |

Сервер собирается адаптером [`@sveltejs/adapter-node`](https://svelte.dev/docs/kit/adapter-node) и слушает `0.0.0.0`. Порт по умолчанию — `3000`, его можно изменить переменной окружения `PORT`.

Если добавите формы с [form actions](https://svelte.dev/docs/kit/form-actions), задайте переменную окружения `ORIGIN` с адресом приложения (например, `https://example.twc1.net`) — иначе SvelteKit отклонит POST-запросы, пришедшие через прокси.

Статическая версия — [app-example-sveltekit](https://github.com/timeweb-cloud-apps/app-example-sveltekit).

## Что показывает пример

- `/` — страница рендерится на сервере при каждом запросе: время рендера, версия Node.js и `User-Agent` приходят из `load` в `+page.server.ts` и уже подставлены в HTML.
- `/about` — вторая страница приложения.
- `/api/hello` — API-эндпоинт (`+server.ts`), отдаёт JSON.

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
npm install

# запуск в дев режиме с отслеживанием изменений
npm run dev

# сборка для продакшн
npm run build

# запуск собранного приложения
npm run start
```

Для работы нужен Node.js 22.17 или новее.
