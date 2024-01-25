import { Interface } from "readline";

// interface type because fetch returns an object
interface Post {
  id: number;
  title: string;
}

export default async function MyPaints() {
  //api call
  //fetch await (function needs to be async)
  //use response
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // call the api
  // response will return an array?
  const posts = await response.json(); // parse the response as json
  console.log(posts);

  // map through retreived data and populate map
  return (
    <>
      <h2>MyPaints</h2>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
}
