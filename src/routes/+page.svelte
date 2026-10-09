<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>SvelteKit SSR</title>
</svelte:head>

<h1>Главная</h1>
<p class="lead">Эта страница рендерится на сервере (SSR) при каждом запросе.</p>

<dl class="info">
	<dt>Время рендера</dt>
	<dd><code>{data.renderedAt}</code></dd>
	<dt>Node.js</dt>
	<dd><code>{data.nodeVersion}</code></dd>
	<dt>User-Agent</dt>
	<dd><code>{data.userAgent}</code></dd>
</dl>

<p>
	Обновите страницу — время рендера изменится. Пример API-эндпоинта:
	<a href="/api/hello">/api/hello</a>.
</p>
