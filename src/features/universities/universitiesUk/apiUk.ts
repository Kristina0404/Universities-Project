import University from '../types/University';

export async function getAll(): Promise<University[]> {
	const res = await fetch(
		'http://universities.hipolabs.com/search?country=United+Kingdom'
	);
	return res.json();
}
export async function getUniversityByWordUk(
	word: string
): Promise<University[]> {
	const res = await fetch(
		`http://universities.hipolabs.com/search?name=${word}&country=United+Kingdom`
	);
	return res.json();
}
