import type { PageServerLoad } from './$types';

/* load из +page.server.ts выполняется только на сервере, в браузер уходит его результат */
export const load: PageServerLoad = ({ request }) => {
	return {
		renderedAt: new Date().toISOString(),
		nodeVersion: process.version,
		userAgent: request.headers.get('user-agent') ?? '—'
	};
};
