const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

export async function getObjects() {
    try {
        const response = await fetch(`${BASE_URL}/objects`);
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

export async function getObjectsById(id) {
    try {
        const response = await fetch(`${BASE_URL}/objects/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
