import axios from "axios";

export async function getProduct() {
  try {
    const response = await axios.get("http://localhost:3001/notes");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id: string) {
  try {
    const response = await axios.delete(`http://localhost:3001/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
