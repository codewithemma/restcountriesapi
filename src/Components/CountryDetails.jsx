import React from "react";

const CountryDetails = ({ selectedCountry }) => {
  return (
    <div>
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
          {selectedCountry && <p className="fw-bold">{selectedCountry.name}</p>}
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
                  {selectedCountry && <span>{selectedCountry.population}</span>}
                </p>
                <p>
                  <span className="fw-medium">Region: </span>
                  {selectedCountry && <span>{selectedCountry.region}</span>}
                </p>
                <p>
                  <span className="fw-medium">Sub Region: </span>
                  {selectedCountry && <span>{selectedCountry.subregion}</span>}
                </p>
                <p>
                  <span className="fw-medium">Capital: </span>
                  {selectedCountry && <span>{selectedCountry.capital}</span>}
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
                      <p className="p-1 shadow rounded">{language.name}</p>
                    </div>
                  ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
