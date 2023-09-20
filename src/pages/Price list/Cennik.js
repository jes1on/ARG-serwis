import React from "react";
import "./Cennik.css";
import svg1 from "./svg/battery-svgrepo-com.svg";
import svg2 from "./svg/diagnostic-svgrepo-com.svg";
import svg3 from "./svg/air-conditioning-svgrepo-com.svg";
//import svg4 from "./svg/engine-svgrepo-com.svg";
import svg5 from "./svg/ignition-svgrepo-com.svg";
//import svg6 from "./svg/oil-svgrepo-com.svg";
//import svg7 from "./svg/piston-svgrepo-com.svg";
import svg8 from "./svg/suspension-svgrepo-com.svg";
import svg9 from "./svg/wheel-alignment-svgrepo-com.svg";
import svg10 from "./svg/alloy-wheel-svgrepo-com.svg";
import svg11 from "./svg/maintenance-svgrepo-com.svg";

export const PriceList = () => {
  return (
    <div className="pageContainer">
      <section className="contentCennik">
        <div className="contentTitleCenter">
          <h1>CENNIK</h1>
        </div>
        <div className="priceTablePage">
          <div className="viewport">
            <div className="priceTableGroups">
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg1}></img>
                    <span>Akumulatory</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Wymiana akumulatora</td>
                      <td>
                        <span className="price">od 20 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Diagnostyka akumulatora</td>
                      <td>
                        <span className="price">od 20 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg2}></img>
                    <span>Diagnostyka komputerowa</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Diagnostyka komputerowa podstawowa - kasowanie 1 błędu
                      </td>
                      <td>
                        <span className="price">od 50 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Skanowanie całego samochodu z wydrukiem błędów</td>
                      <td>
                        <span className="price">od 100 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg9}></img>
                    <span>Geometria kół 3D</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Samochód osobowy sprawdzenie geometrii (bez regulacji)
                      </td>
                      <td>
                        <span className="price">od 50 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Samochód osobowy oś przednia ustawienie zbieżności
                      </td>
                      <td>
                        <span className="price">od 100 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Samochód osobowy oś przednia ustawienie zbieżności +
                        pochylenia kół
                      </td>
                      <td>
                        <span className="price">od 100 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg10}></img>
                    <span>Hamulce</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Konserwacja hamulców - regeneracja (cena za oś)
                      </td>
                      <td>
                        <span className="price">od 130 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Montaż klocków hamulcowych przedniej osi
                      </td>
                      <td>
                        <span className="price">od 100 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Montaż klocków hamulcowych tylnej osi
                      </td>
                      <td>
                        <span className="price">od 120 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Montaż tarcz hamulcowych z klockami - oś przednia (samochód osobowy)
                      </td>
                      <td>
                        <span className="price">od 150 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Montaż tarcz hamulcowych z klockami - oś tylna (samochód osobowy)
                      </td>
                      <td>
                        <span className="price">od 160 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana cylinderka hamulcowego (1 szt.)
                      </td>
                      <td>
                        <span className="price">od 60 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg11}></img>
                    <span>Mechanika samochodowa</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Uszczelnienie miski olejowej
                      </td>
                      <td>
                        <span className="price">od 150 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana alternatora - montaż i demontaż
                      </td>
                      <td>
                        <span className="price">od 150 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana oleju i filtra oleju
                      </td>
                      <td>
                        <span className="price">od 50 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana termostatu
                      </td>
                      <td>
                        <span className="price">od 80 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana poduszki silnika (cena zależna od poziomu skomplikowania)
                      </td>
                      <td>
                        <span className="price">80-250 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana rozrządu
                      </td>
                      <td>
                        <span className="price">od 300 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg8}></img>
                    <span>Układ zawieszenia</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Sprawdzenie (zawieszenie, amortyzatory, układ hamulcowy, układ kierowniczy)
                      </td>
                      <td>
                        <span className="price">50 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana amortyzatora - oś przednia (1 szt.)
                      </td>
                      <td>
                        <span className="price">od 100 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Wymiana amortyzatora - oś tylna (1 szt.)
                      </td>
                      <td>
                        <span className="price">od 70 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Wymiana tulei wahacza
                      </td>
                      <td>
                        <span className="price">od 120 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Wymiana przedniej sprężyny zawieszenia górnego mocowania (1 szt.)
                      </td>
                      <td>
                        <span className="price">od 120 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Wymiana tylnej sprężyny zawieszenia
                      </td>
                      <td>
                        <span className="price">od 75 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg5}></img>
                    <span>Przeglądy okresowe</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Wymiana płynu chłodniczego
                      </td>
                      <td>
                        <span className="price">od 150 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Wymiana żarówki (1 szt.)
                      </td>
                      <td>
                        <span className="price">od 25 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Wymiana świec zapłonowych benzyna
                      </td>
                      <td>
                        <span className="price">od 100 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="priceTableBlockItem">
                <div className="sectionTitle">
                  <h2 className="priceTableTitle">
                    <img className="svgIcon" src={svg3}></img>
                    <span>Serwis klimatyzacji</span>
                  </h2>
                </div>
                <table className="priceTable">
                  <thead>
                    <tr>
                      <th>Usługa</th>
                      <th>Cena</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        Dezynfekcja (odgrzybianie) chemiczna wnętrza
                      </td>
                      <td>
                        <span className="price">od 150 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Dezynfekcja (odgrzybianie) wnętrza ozonem (30 min)
                      </td>
                      <td>
                        <span className="price">50 PLN</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      Azotowa próba szczelności - sprawdzenie szczelności układu klimatyzacji azotem
                      </td>
                      <td>
                        <span className="price">150 PLN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
