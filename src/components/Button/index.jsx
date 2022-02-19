import { memo } from 'react';

export const Button = memo(({ incrementCounter }) => {
  console.log('Child component - Button');
  return <button onClick={() => incrementCounter(10)}>+</button>;
});
