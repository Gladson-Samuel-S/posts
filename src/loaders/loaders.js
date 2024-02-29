const BASE_URL = "https://jsonplaceholder.typicode.com/";
const POSTS_FETCH_LIMIT = 10;

export async function getPosts() {
  const response = await fetch(`${BASE_URL}posts?_limit=${POSTS_FETCH_LIMIT}`);

  return response;
}

async function getPost(id) {
  const response = await fetch(`${BASE_URL}posts/${id}`);

  return response;
}

export async function rootLoader() {
  const allPosts = await getPosts();

  return { posts: await allPosts.json() };
}

export async function postLoader({ params }) {
  const currentPost = await getPost(params.id);

  return { post: await currentPost.json() };
}
