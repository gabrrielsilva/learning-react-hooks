export const Post = ({ post, handleClick }) => {
  console.log('Child component - Post');
  return (
    <div key={post.id}>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
