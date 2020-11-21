import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { fndCurrencyVal } from "./reducers/actions";
import { FcRight } from "react-icons/fc";
import { Item } from "./types";
import logo from "../../logo.svg";
import "./index.css";

interface Props {
  state: { counter: number };
}

const MdInicio = () => {
  // Select elements from State
  const stt = useSelector((state: any) => state.mdInicio);
  console.log("STT:", stt);

  const {
    error = undefined,
    loading = false,
    toFind = true,
    item = undefined,
  } = { ...stt };

  /* Obtenemos el dispatcher por medio del hook y no de los parametros
   * de entrada de la función para hacer un códico más limpio.
   * >> Get the dispatch from the Hook. */
  const dispatch = useDispatch();

  /* Activa los mensajes de error del módulo.
   * >> Show the error message stored to this module. */
  const [showErr, setShowErr] = useState(true);

  useEffect(() => {
    if (error) setShowErr(true);
  }, [error]);

  useEffect(() => {
    if (!toFind) return;
    dispatch(fndCurrencyVal("USD"));
  }, [dispatch, toFind]);

  const eur = item ? item.rates.EUR : 0;

  const rowError = error ? (
    <Row>
      <Col>
        <Alert
          variant="danger"
          show={showErr}
          onClose={() => setShowErr(false)}
          transition={false}
          dismissible
        >
          <div dangerouslySetInnerHTML={{ __html: error! }}></div>
        </Alert>
      </Col>
    </Row>
  ) : null;

  return (
    <div className="App">
      <Container fluid>
        <Row className="header">
          <Col xs="auto">
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col className="myName">
            twitter:
            <br />
            <b>@Albedi</b>
          </Col>
        </Row>
        {rowError}
        <Row>
          <Col>
            ¡Hola Mundo! Que muestra el valor del dólar en este momento.
          </Col>
        </Row>
        <Row>
          <Col xs="auto" md="auto">
            1 USD
          </Col>
          <Col xs="auto" md="auto">
            <FcRight />
          </Col>
          <Col>{eur} EUR</Col>
          <Col>{item ? item.rates.MXN : 0} MXN</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MdInicio;
