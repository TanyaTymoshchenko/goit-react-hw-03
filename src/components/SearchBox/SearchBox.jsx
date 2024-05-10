import css from "./SearchBox.module.css";

export default function SearchBox({ currentNameFilter, onFilter }) {
  return (
    <div className={css["filter-box"]}>
      <p>Search contacts by name: </p>
      <input
        className={css["filter-input"]}
        type="text"
        placeholder="Search..."
        value={currentNameFilter}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}