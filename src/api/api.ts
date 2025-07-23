import axios from 'axios'

export async function getProduct() {
    try {
        const response = await axios.get('http://localhost:3001/notes');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}