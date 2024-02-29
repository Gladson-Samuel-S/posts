const BASE_URL = "https://jsonplaceholder.typicode.com/";
import { redirect } from "react-router-dom";

export async function createPost(payload) {
  const response = await fetch(`${BASE_URL}posts`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  return response;
}

export async function createAction({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await createPost(updates);

  return redirect("/");
}
