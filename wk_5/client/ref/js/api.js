const BASE_URL = "http://localhost:5005/";

export const handleFetch = (route, payload) => {
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    mode: "cors",
    ...payload,
  });
};
