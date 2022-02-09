import type { ValidationMessage } from "../../types";
import { API_URL } from "./constants";

type ValidationResponse = {
  messages: ValidationMessage[];
};

export async function getValidationFromApi(body: string): Promise<ValidationResponse> {
  const options = {
    method: 'POST',
    headers: { 'Content-Type':'text/html' },
    body,
  };

  return await fetch(API_URL, options).then(res => res.json());
}
