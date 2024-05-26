import instance from "./index.js";

const getAllpets = async () => {
  const res = await instance.get(`/pets`);

  return res.data;
};

const getOnepet = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const postpet = async (name, image, type, adopted) => {
  const res = await instance.post(`/pets`, { name, image, type, adopted });
  return res.data;
};

const petdel = (id) => {
  const res = instance.delete(`/pets/${id}`);
  return res.data;
};

export { getAllpets, getOnepet, postpet, petdel };
