<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';
	import '../app.css';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
	<header class="header">
		<nav class="nav">
			<a href="/" class="logo">SvelteKit SSR</a>
			<a href="/about" class:active={page.url.pathname === '/about'}>О проекте</a>
		</nav>
	</header>
	<main class="main">
		{@render children()}
	</main>
</div>
