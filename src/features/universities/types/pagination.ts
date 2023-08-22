export default interface PaginationI {
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	onPageChange: (newPage: number) => void;
}
