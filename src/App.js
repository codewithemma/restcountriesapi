import React, { useState, useEffect, useRef } from "react";
import CountryCard from "./Components/CountryCard";
import Header from "./Components/Header";
import Input from "./Components/Input";
import { getData, filterData } from "./Components/Service";
import Modal from "./Components/Modal";
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
              <Modal ref={modal} buttonCaption="close">
                <div className="row">
                  <div className="col-lg-6">
                    {selectedCountry && (
                      <img
                        src={selectedCountry.flags.png}
                        alt={selectedCountry.name}
                        width={"400px"}
                        height={"261.25px"}
                      />
                    )}
                  </div>
                  <div className="col-lg-6">
                    {selectedCountry && (
                      <p className="fw-bold">{selectedCountry.name}</p>
                    )}
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="fs-6">
                          <p>
                            <span className="fw-medium">Native Name: </span>
                            {selectedCountry &&
                              selectedCountry.languages.map((language) => (
                                <span>{language.nativeName}</span>
                              ))}
                          </p>
                          <p>
                            <span className="fw-medium">population: </span>
                            {selectedCountry && (
                              <span>{selectedCountry.population}</span>
                            )}
                          </p>
                          <p>
                            <span className="fw-medium">Region: </span>
                            {selectedCountry && (
                              <span>{selectedCountry.region}</span>
                            )}
                          </p>
                          <p>
                            <span className="fw-medium">Sub Region: </span>
                            {selectedCountry && (
                              <span>{selectedCountry.subregion}</span>
                            )}
                          </p>
                          <p>
                            <span className="fw-medium">Capital: </span>
                            {selectedCountry && (
                              <span>{selectedCountry.capital}</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <p>
                          <span className="fw-medium">Top Level Domain:</span>
                          {selectedCountry && (
                            <span>{selectedCountry.topLevelDomain}</span>
                          )}
                        </p>
                        <p>
                          <span className="fw-medium">Currencies: </span>
                          {selectedCountry &&
                            selectedCountry.currencies.map((currency) => (
                              <span>{currency.code}</span>
                            ))}
                        </p>
                        <p>
                          <span className="fw-medium">languages: </span>
                          {selectedCountry &&
                            selectedCountry.languages.map((language) => (
                              <div className="d-flex d-block-sm">
                                <p className="p-1 shadow rounded">
                                  {language.nativeName}
                                </p>
                                <p className="p-1 shadow rounded">
                                  {language.name}
                                </p>
                              </div>
                            ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </>
        );
      });

  return (
    <>
      <Header />
      <Input value={query} onChange={handleChange} handleClick={handleData} />
      <CountryCard countryData={countryData} />
    </>
  );
};

export default App;
