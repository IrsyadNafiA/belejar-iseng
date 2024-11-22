// src/api/kantinApi.js
const topKantinData = async (apiUrl) => {
  const response = await fetch(`${apiUrl}/top/anime?limit=10`);
  const values = await response.json();
  const result = values.data.map((data) => {
    return {
      id: data.mal_id,
      name: data.title,
      image: data.images.jpg.image_url,
    };
  });
  return result;
};

export { topKantinData };
