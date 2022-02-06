import { API_URL } from "./constants";

export async function getValidationFromApi(body: string) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type':'text/html' },
    body,
  }

  return await fetch(API_URL, options).then(res => res.json());
}
