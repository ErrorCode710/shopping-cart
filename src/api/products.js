export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Request failed");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // rethrow so caller can handle it
  }
}
