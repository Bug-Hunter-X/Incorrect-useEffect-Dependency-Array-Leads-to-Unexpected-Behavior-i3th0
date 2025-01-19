```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect condition - this will always run on mount, not only on count changes
    if (count > 0) {
      console.log('Count is greater than 0');
    }
  }, []); // Empty dependency array - runs only once on mount

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```