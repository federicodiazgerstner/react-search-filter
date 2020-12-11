function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Ingrese el curso que desea buscar"
        className="input"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
