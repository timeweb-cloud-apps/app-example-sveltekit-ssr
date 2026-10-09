import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	return json({
		message: 'Привет с API SvelteKit (выполняется на сервере)',
		at: new Date().toISOString()
	});
};
