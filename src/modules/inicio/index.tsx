import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { fndCurrencyVal } from "./reducers/actions";
import { FcRight } from "react-icons/fc";
import { InicioMdStt } from "./types";
import logo from "../../logo.svg";
import "./index.css";

// Usar cuando se tengar propiedades de entrada.
// interface Props {
//   state: { counter: number };
// }

const MdInicio = () => {
  // Select elements from State
  const stt = useSelector((sttSelector: any) => sttSelector.mdInicio);
  console.log("STT:", stt);

  const {
    error = undefined,
    // loading = false, Para su uso a futuro.
    toFind = true,
    item = undefined,
  }: InicioMdStt = { ...stt };

  // let rateEUR = 0;
  let rateMXN = 0;
  let rateUSD = 0;
  let errMess;

  // Revisar funcionalidad del EndPoint
  if (item) {
    if (item.success) {
      // rateEUR = item.rates.EUR;
      rateMXN = item.rates.MXN;
      rateUSD = item.rates.USD;
    } else {
      errMess = (
        <Row className="errorRow">
          <Col>{item.error.info}</Col>
        </Row>
      );
    }
  }

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
    dispatch(fndCurrencyVal("EUR"));
  }, [dispatch, toFind]);

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
            1 EUR
          </Col>
          <Col xs="auto" md="auto">
            <FcRight />
          </Col>
          <Col>{rateUSD} USD</Col>
          <Col>{item ? rateMXN : 0} MXN</Col>
        </Row>
        {errMess}
      </Container>
    </div>
  );
};

export default MdInicio;
