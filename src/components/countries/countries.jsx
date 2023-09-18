"use client";

import useCountries from "@/hooks/useCountries";
import React from "react";

const Countries = () => {
  const { data } = useCountries({
    filters: ['name', 'capital']
  });

  return (
    <>
      <ul>
        {data.map((country) => (
          <li key={country.name.common}>
            <h2>{country.name.common}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
