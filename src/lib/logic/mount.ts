import { user } from '$lib/stores/user';
import Cookies from 'js-cookie';

export function onMountApp(): void {
	const token = Cookies.get('token');
	if (token) user.set({ token });
}
