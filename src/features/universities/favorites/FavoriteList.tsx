/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/jsx-key */
import { Link } from 'react-router-dom';
import { selectFavoriteUniversity } from '../universitiesUk/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
	removeFavoriteUniversity,
	toggle,
} from '../universitiesUk/universitiesSliceUk';
import styles from './FavoriteList.module.css';

export default function FavoriteList(): JSX.Element {
	const favoriteUniversity = useSelector(selectFavoriteUniversity);
	const dispatch = useDispatch();

	return (
		<>
			<div className={styles.container}>
				<Link to="/" className={styles.link}>
					Home
				</Link>
				<Link to="/universitiesListFra" className={styles.link}>
					Universities of France
				</Link>
				<Link to="/universitiesListGer" className={styles.link}>
					Universities of Germany
				</Link>
				<Link to="/universitiesListUk" className={styles.link}>
					Universities of UK
				</Link>

				<h1 className={styles.title}>Your Favorite Universities</h1>
				<div className={styles.container_image} />

				<ol className={styles.list}>
					{favoriteUniversity.map((university) => (
						<li className={styles.card}>
							<span
								style={{
									textDecoration: university.isFavorite
										? 'line-through'
										: 'none',
								}}
							>
								<p>{university.name}</p>
								<div>
									<a
										href={university.web_pages[0]}
										target="_blank"
										rel="noreferrer"
									>
										Home Page of University
									</a>
									<input
										type="checkbox"
										checked={university.isFavorite}
										onChange={() => dispatch(toggle(university))}
										className={styles.checkbox}
									/>
								</div>
								<button
									onClick={() => dispatch(removeFavoriteUniversity(university))}
									className={styles.delete}
								>
									Delete
								</button>
							</span>
						</li>
					))}
				</ol>
			</div>
		</>
	);
}
