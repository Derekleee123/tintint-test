import React, { useState, useMemo } from "react";
import { fakeUsers } from "../utils/fakeUsers";
import { useDebounce } from "../utils/debounceHook";

const DataFilter: React.FC = () => {
  const data = useMemo(() => fakeUsers, []);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const filteredData = useMemo(
    () =>
      debouncedQuery.trim() === ""
        ? data
        : data.filter((item) =>
            item.name.toLowerCase().includes(debouncedQuery.toLowerCase())
          ),
    [debouncedQuery, data]
  );

  return (
    <div className="filter-card">
      <h2>🔍 使用者搜尋</h2>
      <input
        type="text"
        placeholder="輸入名稱..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <ul className="result-list">
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFilter;
