import { Search } from "lucide-react";

function SearchBar({
  value,
  onChange,
  placeholder = "搜尋統計概念、公式、方法、案例...",
  label = "搜尋"
}) {
  function handleChange(event) {
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  }

  return (
    <label className="search-bar">
      <span className="search-label">{label}</span>

      <div className="search-input-wrap">
        <Search size={18} />
        <input value={value} onChange={handleChange} placeholder={placeholder} />
      </div>
    </label>
  );
}

export default SearchBar;