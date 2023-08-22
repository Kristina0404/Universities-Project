/* eslint-disable import/no-unresolved */
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
	return (
		<>
			<Outlet />
		</>
	);
}
