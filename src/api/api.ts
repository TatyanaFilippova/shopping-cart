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
    const response = await axios.post("http://localhost:3001/notes", {
      notes: [
        {
          id: "1",
          name: "Apple MacBook Air 13",
          price: "110 000",
          imgProduct: "/img/products/macbook.jpg",
        },
        {
          id: "2",
          name: "Apple watch",
          price: "29 000",
          imgProduct: "/img/products/apple-watch.jpg",
        },
        {
          id: "3",
          name: "Mac Pro",
          price: "190 000",
          imgProduct: "/img/products/mac-pro.jpg",
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
