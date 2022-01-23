import { user } from '$lib/stores/user';
import * as Sentry from '@sentry/browser';
import { CaptureConsole as CaptureConsoleIntegration } from '@sentry/integrations';
import { Integrations } from '@sentry/tracing';
import Cookies from 'js-cookie';

export function onMountApp(): void {
	startSentry();
	const token = Cookies.get('token');
	if (token) user.set({ token });
}

export function startSentry(): void {
	Sentry.init({
		dsn: 'https://294d10c394cc496daaaaaa7451b8183a@o1124827.ingest.sentry.io/6163111',
		integrations: [
			new Integrations.BrowserTracing(),
			new CaptureConsoleIntegration({
				levels: ['info', 'warn', 'error', 'debug', 'assert'],
			}),
		],
		tracesSampleRate: 1.0,
	});
}
