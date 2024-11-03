import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    //iT-qK-8hfUACxbNT3Aln8Spq7RoGoksWK7z2fa-yQTI
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
