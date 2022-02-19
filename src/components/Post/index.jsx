export const Post = ({ post }) => {
  console.log('Child component - Post');
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
