import './App.css';

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); // Correct way to log the variable

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
