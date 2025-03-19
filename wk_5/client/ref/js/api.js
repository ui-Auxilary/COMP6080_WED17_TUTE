const BASE_URL = "http://localhost:5005/";

export const handleFetch = (route, payload) => {
  return fetch(`${BASE_URL}${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    ...payload,
  });
};
