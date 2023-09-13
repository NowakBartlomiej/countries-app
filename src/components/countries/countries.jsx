"use client";

import useCountries from "@/hooks/useCountries";
import React from "react";

const Countries = () => {
  const { data } = useCountries({
    filters: ['name', 'capital']
  });

  return (
    <>
      <div>
        {data.map((country) => (
          <h1 key={country.name.common}>{country.name.common}</h1>
        ))}
      </div>
    </>
  );
};

export default Countries;
