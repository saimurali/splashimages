import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <>
      <h1>Unsplash Images Starter</h1>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  );
};
export default App;
