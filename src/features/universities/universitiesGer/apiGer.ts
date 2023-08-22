import University from '../types/University';

export async function getAll(): Promise<University[]> {
	const res = await fetch(
		'http://universities.hipolabs.com/search?country=germany'
	);
	return res.json();
}
export async function getUniversityByWordGer(
	word: string
): Promise<University[]> {
	const res = await fetch(
		`http://universities.hipolabs.com/search?name=${word}&country=Germany`
	);
	return res.json();
}
