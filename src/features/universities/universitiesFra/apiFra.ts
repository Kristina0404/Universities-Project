import University from '../types/University';

export async function getAll(): Promise<University[]> {
	const res = await fetch(
		'http://universities.hipolabs.com/search?country=france'
	);
	return res.json();
}
export async function getUniversityByWordFra(
	word: string
): Promise<University[]> {
	const res = await fetch(
		`http://universities.hipolabs.com/search?name=${word}&country=france`
	);
	return res.json();
}
