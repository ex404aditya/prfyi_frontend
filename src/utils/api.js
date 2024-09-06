export const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.in/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const result = await response.json();
  
  if (result.products && Array.isArray(result.products)) {
    return result.products; 
  } else {
    throw new Error('Products not found or not an array');
  }
};
