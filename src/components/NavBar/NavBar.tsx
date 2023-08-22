/* eslint-disable import/no-unresolved */
import { NavLink } from 'react-router-dom';
export default function NavBar(): JSX.Element {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="counter">Counter</NavLink>
			<NavLink to="universitiesListGer">Universities of Germany</NavLink>
			<NavLink to="universitiesListUk">Universities of Uk</NavLink>
			<NavLink to="universitiesListFra">Universities of France</NavLink>
		</nav>
	);
}
