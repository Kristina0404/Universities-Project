/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable react/prop-types */
import { JSX } from 'react/jsx-runtime';
import PaginationI from '../types/pagination';
import styles from './Pagination.module.css';

const Pagination: React.FC<PaginationI> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const pageNumbers = Array.from(
		{ length: totalPages },
		(_, index) => index + 1
	);
	const RenderPageButton = () => {
		const buttons: JSX.Element[] = [];
		if (totalPages <= 1) {
			return buttons;
		}
		buttons.push(
			<button
				key="prev"
				className={styles.pagination_button}
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Previous
			</button>
		);
		if (totalPages <= 2) {
			for (const pageNumber of pageNumbers) {
				buttons.push(
					<button
						key={pageNumber}
						className={styles.pagination_button}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</button>
				);
			}
		} else {
			if (currentPage - 2 > 2) {
				buttons.push(<span key="ellipsis-start">...</span>);
			}
			if (currentPage > 1) {
				buttons.push(
					<button
						key={currentPage - 1}
						className={styles.pagination_button}
						onClick={() => onPageChange(currentPage - 1)}
					>
						{currentPage - 1}
					</button>
				);
			}
			buttons.push(
				<button
					key={currentPage}
					className={styles.currentPageButton}
					onClick={() => onPageChange(currentPage)}
				>
					{currentPage}
				</button>
			);
			if (currentPage < totalPages) {
				buttons.push(
					<button
						key={currentPage + 1}
						className={styles.pagination_button}
						onClick={() => onPageChange(currentPage + 1)}
					>
						{currentPage + 1}
					</button>
				);
			}
			if (totalPages - currentPage > 2) {
				buttons.push(<span key="ellipsis-end">...</span>);
			}
		}
		buttons.push(
			<button
				key="next"
				className={styles.pagination_button}
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next
			</button>
		);

		return buttons;
	};

	return <div className="pagination">{RenderPageButton()}</div>;
};

export default Pagination;
