import { useState } from "react";

export default function Spedizione({ name, state, handle }) {
  const choise = state.choiseReducer;

  const renderAuthSelect = () => {
    if (choise.nome === "DHL") {
      return <option>Spedizione a Domicilio</option>;
    } else {
      return <option>Spedizione in sede</option>;
    }
  };

  return (
    <>
      <div className="container-partenza">
        <div className="child-container-partenza">
          <h4 className="title-patenzaSpedizione">{name}</h4>
          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label" htmlFor="cars">
                Ritiro
              </label>
              <select type="number" className="form-select" defaultValue="">
                {renderAuthSelect()}
              </select>
            </div>
          </div>
          <hr />
          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Nome</label>
              <input
                placeholder="Nome"
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "nameDispatcher")}
              />
            </div>
            <div className="children-partenza">
              <label className="control-label">Cognome</label>
              <input
                placeholder="Cognome"
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "surnameDispatcher")}
              />
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Cità</label>
              <input
                placeholder="Città"
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "cityDispatcher")}
              />
            </div>
            <div className="children-partenza">
              <label className="control-label">Via</label>
              <input
                placeholder="Via"
                className="form-control"
                defaultValue=""
                onChange={(e) => handle(e, "streetDispatcher")}
              />
            </div>
          </div>

          <div className="master-children-partenza">
            <div className="children-partenza">
              <label className="control-label">Telefono</label>
              <input
                placeholder="Telefono"
                className="form-control"
                defaultValue="telefono"
                onChange={(e) => handle(e, "phoneDispatcher")}
              />
            </div>
            <div className="children-partenza">
              <label className="control-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                defaultValue="email"
                onChange={(e) => handle(e, "emailDispatcher")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
