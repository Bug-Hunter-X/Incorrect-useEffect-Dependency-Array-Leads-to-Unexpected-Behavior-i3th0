# React useEffect Empty Dependency Array Bug

This repository demonstrates a common error in React's `useEffect` hook where the dependency array is misused, leading to unexpected behavior.  The component intends to log a message only when a counter variable exceeds 0; however, due to an incorrect dependency array, the logging happens only once upon initial mount. 

## Bug Description
The `useEffect` hook is meant to perform side effects based on changes in specified dependencies.  An empty dependency array `[]` indicates that the effect should only run once after the initial render.  In this case, the code attempts to log a message only when `count > 0`, but the empty dependency array prevents the effect from re-running on subsequent `count` updates. The provided code intends to log a message only when the count is greater than 0 but misuses the empty dependency array causing this to only log on mount.

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the console message only appears once when the component mounts, even though the count can exceed 0.

## Solution
The solution involves correcting the dependency array to include `count` as a dependency.  This ensures the effect runs whenever the value of `count` changes.