import React, { useState, useEffect, useRef } from "react";
import CountryCard from "./Components/CountryCard";
import Header from "./Components/Header";
import Input from "./Components/Input";
import { getData, filterData } from "./Components/Service";
import Modal from "./Components/Modal";
import CountryDetails from "./Components/CountryDetails";
const App = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const modal = useRef();

  function handleCardClick(country) {
    setSelectedCountry(country);
    modal.current.open(country);
  }

  const handleData = (event) => {
    let typeData = event.target.value;
    typeData !== "all"
      ? setFilteredData(filterData(typeData))
      : setFilteredData(getData());
  };

  useEffect(() => {
    setFilteredData(getData());
  }, []);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const countryData =
    filteredData &&
    filteredData
      .filter((country) => {
        return country.name.toLowerCase().includes(query.toLowerCase());
      })
      .map((country) => {
        return (
          <>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="card mb-4 shadow cursor-pointer"
                style={{ width: "14rem" }}
                onClick={() => handleCardClick(country)}
                key={country.name}
              >
                <img
                  src={country.flags.png}
                  className="card-img-top"
                  width={"222.67px"}
                  height={"145.43px"}
                  alt={country.name}
                />
                <div className="card-body">
                  <h6 className="fw-bold">{country.name}</h6>
                  <div>
                    <p>
                      <span className="fw-medium">population: </span>
                      <span>{country.population}</span>
                    </p>
                    <p>
                      <span className="fw-medium">Region:</span>
                      <span> {country.region}</span>
                    </p>
                    <p>
                      <span className="fw-medium">Capital: </span>
                      <span>{country.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });

  return (
    <>
      <Modal ref={modal} buttonCaption="close">
        <CountryDetails selectedCountry={selectedCountry} />
      </Modal>
      <Header />
      <Input value={query} onChange={handleChange} handleClick={handleData} />
      <CountryCard countryData={countryData} />
    </>
  );
};

export default App;
