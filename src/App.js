import MoviePage from "./pages/MoviePage";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div>
      <MoviePage />
    </div>
  );
}

export default App;
