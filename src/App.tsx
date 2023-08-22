/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UniversitiesListGer from './features/universities/universitiesGer/UniversitiesListGer';
import UniversitiesListFra from './features/universities/universitiesFra/UniversitiesListFra';
import UniversitiesListUk from './features/universities/universitiesUk/UniversitiesListUk';
import Layout from './components/Layout/Layout';
import Home from './features/universities/home/Home';
import FavoriteList from './features/universities/favorites/FavoriteList';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="universitiesListGer" element={<UniversitiesListGer />} />
				<Route path="universitiesListFra" element={<UniversitiesListFra />} />
				<Route path="universitiesListUk" element={<UniversitiesListUk />} />
				<Route path="favoriteList" element={<FavoriteList />} />
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
