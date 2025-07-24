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

export async function postProduct() {
  try {
    await axios.post("http://localhost:3001/notes", {
      id: "1",
      name: "Apple MacBook Air 13",
      price: 110000,
      imgProduct: "/img/products/macbook.jpg",
    });
    await axios.post("http://localhost:3001/notes", {
      id: "2",
      name: "Apple watch",
      price: 29000,
      imgProduct: "/img/products/apple-watch.jpg",
    });
    await axios.post("http://localhost:3001/notes", {
      id: "3",
      name: "Mac Pro",
      price: 190000,
      imgProduct: "/img/products/mac-pro.jpg",
    });
  } catch (error) {
    console.error(error);
  }
}
