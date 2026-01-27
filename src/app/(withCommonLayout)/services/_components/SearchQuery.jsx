import React from "react";

const SearchQuery = () => {
  return (
    <form>
      <div className="join">
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="input" placeholder="search term" required />
          </label>
          <div className="validator-hint hidden">Type something to search.</div>
        </div>
        <button className="btn btn-neutral join-item">Search</button>
      </div>
    </form>
  );
};

export default SearchQuery;
