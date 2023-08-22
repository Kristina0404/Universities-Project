/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { FormEvent, useState } from 'react';
import { loadUniversitiesGer } from '../universitiesGer/universitiesSliceGer';
import { loadUniversitiesUk } from '../universitiesUk/universitiesSliceUk';
import { loadUniversitiesFra } from '../universitiesFra/universitiesSliceFra';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
	const [country, setCountry] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		if (country === 'Germany') {
			dispatch(loadUniversitiesGer());
			navigate('/universitiesListGer');
		} else if (country === 'France') {
			dispatch(loadUniversitiesFra());
			navigate('/universitiesListFra');
		} else if (country === 'United Kingdom') {
			dispatch(loadUniversitiesUk());
			navigate('/universitiesListUk');
		}
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.welcome}>Welcome to the World of Knowledge !</h1>
			<div className={styles.box}>
				<p>
					Welcome to our university searching website covering various
					countries. Here, you are invited to explore all educational
					institutions by following the link to each university's website.
					Additionally, you can create your own list of universities you're
					interested to study at. This list can be adjusted at any time: you can
					cross out the university, but leave it for consideration or remove the
					ones that were mistakenly selected.
				</p>

				<p>We hope that our website will assist you in finding your path! </p>
				<p>Good luck!</p>
			</div>
			<div className={styles.container_image} />
			<h3 className={styles.text}>Choose the Country of Study</h3>

			<form onSubmit={handleSubmit} className={styles.search}>
				<select
					name="country"
					onChange={(e) => setCountry(e.target.value)}
					value={country}
					className={styles.country}
				>
					<option value="country">Country</option>
					<option value="France">France</option>
					<option value="Germany">Germany</option>
					<option value="United Kingdom">United Kingdom</option>
				</select>
				<button type="submit" className={styles.btn}>
					Go !
				</button>
			</form>
			<div>
				<Link to="/favoriteList" className={styles.link_favorite}>
					Favorite List
				</Link>
			</div>
		</div>
	);
}
