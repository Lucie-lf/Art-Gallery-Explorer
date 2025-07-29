const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';

export async function getDepartments() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null;
    }
}
