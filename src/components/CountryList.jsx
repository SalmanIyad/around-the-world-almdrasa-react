import { useState } from "react";
import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

const CountryList = ({ data }) => {
  const [visibleCount, setVisibleCount] = useState(30);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 30);
  };

  return (
    <div className="mt-8 md:mt-12 flex flex-col items-center">
      <div className="flex flex-wrap justify-around gap-x-6 gap-y-12 lg:gap-y-15">
        {data && data.length ? (
          data.slice(0, visibleCount).map((country) => (
            country?.name?.common === "Israel" ? (
              <CountryCard
                key={country.name.official}
                name={country.name.common}
                population={country.population}
                region="Jahanam جهنم"
                capital="Al-Hawiah الهاوية"
                flag={country.flags.svg}
              />
            ) : country?.name?.common === "Palestine" ? (
              <CountryCard
                key={country.name.official}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital="Jerusalem القدس عاصمة فلسطين الأبدية"
                flag={country.flags.svg}
              />
            ) : (
              <CountryCard
                key={country.name.official}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.svg}
              />
            )
          ))
        ) : (
          <EmptySearch />
        )}
      </div>
      {visibleCount < data.length && (
        <button
          onClick={handleShowMore}
          className="mt-8 px-6 py-3 dark:bg-gray-700 bg-gray-200 dark:text-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-500 transition"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default CountryList;
