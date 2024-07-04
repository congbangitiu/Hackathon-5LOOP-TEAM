import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const SearchForm = (props) => {
  const {
    isDashboardPage,
    originalDocument = [],
    filteredDocument = [],
    setFilteredDocument = () => {},
  } = props;

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue === "") {
      setFilteredDocument(originalDocument);
      return;
    }

    const filterBySearch = originalDocument.filter((item) => {
      let titleOrName = "";

      if (item.title) {
        titleOrName = item.title;
      } else if (item.name) {
        if (typeof item.name === "string") {
          titleOrName = item.name;
        } else if (Array.isArray(item.name) && item.name[0]?.text) {
          titleOrName = item.name[0].text;
        }
      } else if (item.badgeText) {
        titleOrName = item.badgeText;
      }

      if (typeof titleOrName === "string") {
        return titleOrName.toLowerCase().includes(searchValue.toLowerCase());
      }

      return false;
    });

    setFilteredDocument(filterBySearch);

    console.log(filteredDocument);
  };

  useEffect(() => {
    handleSearch();
  }, [searchValue, originalDocument]);

  return (
    <div
      className="search-form position-relative d-flex align-items-center "
      style={{}}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Search anything"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="position-absolute"
          type="submit"
          style={{ width: isDashboardPage ? "100px" : "" }}
        >
          {searchValue.length === 0 ? (
            <i className="bi bi-search" />
          ) : (
            <i class="bi bi-x-circle" onClick={() => setSearchValue("")} />
          )}
        </button>
      </Form>
    </div>
  );
};

export default SearchForm;
