import React from 'react';

function SortDropdown({ sortOrder, onSortChange }) {
  return (
    <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
      <option value="asc">Oldest to Newest</option>
      <option value="desc">Newest to Oldest</option>
    </select>
  );
}

export default SortDropdown;