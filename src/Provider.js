import React, { createContext, useState } from "react";
export const ourContext = createContext();

export const Provider = (props) => {
  const [movies, setmovies] = useState([
    {
      name: "The Shawshank Redemption",
      rating: 9.2,
    },
    {
      name: " The Godfather",
      rating: 9.0,
    },
    {
      name: " The Dark Knight ",
      rating: 9.0,
    },
  ]);

  return (
    <div>
      <ourContext.Provider value={[movies, setmovies]}>
        {props.children}
      </ourContext.Provider>
    </div>
  );
};
