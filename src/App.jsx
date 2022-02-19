import axios from 'axios';
import { useEffect, useMemo, useState, useCallback, useRef } from 'react';

import './App.css';

import { Button } from './components/Button';
import { Post } from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);
  const input = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      axios('https://jsonplaceholder.typicode.com/posts').then((r) =>
        setPosts(r.data),
      );
    }, 3000);
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [inputValue]);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const handleClick = (value) => {
    setInputValue(value);
  };

  console.log('Parent component');

  return (
    <div className="App">
      <p>
        <input
          ref={input}
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <h1>{counter}</h1>
      <Button incrementCounter={incrementCounter} />
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleClick} />
          ))
        );
      }, [posts])}

      {posts.length <= 0 && <p>Loading...</p>}
    </div>
  );
}

export default App;
