import React from "react";
import BrokerImage from "./../../assets/liber_logo[3693].png";

const wrapper = {
  backgroundColor: "#000c24",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  fontSize: "24px",
};
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "1200px",
};
const options = {
  color: "red",
};
const optionText = {
  color: "#fefefe",
};

const libertexContainer = {
  display: "flex",
  flexDirection: "column",
  color: "#00f0df",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const Broker = () => {
  return (
    <div style={wrapper}>
      <div style={container}>
        <h1> Nuestro Broker</h1>
        <div style={libertexContainer}>
          <div>
            <img
              src={BrokerImage}
              alt="Broker"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>Historia</h2>
            <p>
              Libertex, parte del Grupo Libertex, es un bróker online que ofrece
              CFD sobre activos subyacentes tales como materias primas, Forex,
              ETF o criptomonedas, entre otros. Libertex también ofrece
              inversiones en acciones reales sin comisiones. A través de los
              años, Libertex ha recibido más de 40 prestigiosos premios y
              reconocimientos internacionales, incluyendo “Most Trusted Broker
              LATAM” (Ultimate Fintech Awards, 2022) y “Best Trading Platform”
              (FX Report Awards, 2022). Desde su fundación en 1997, Libertex
              Group ha crecido hasta convertirse en un conglomerado de diversas
              compañías que ofrecen sus servicios a millones de clientes en
              países de todo el mundo.
            </p>
          </div>
        </div>

        <div>
          <h2 style={{ textAlign: "center" }}>Nuestro Beneficios</h2>
          <div>
            <h3 style={options}>Plan Standar - Fondeo Directo</h3>
            <p style={optionText}>
              • Alumnos Q | Cap Mínimo Ingreso USD 100. • No Alumno Q | Cap
              Ingreso USD 200. *Con el fondeo directo podrás acceder a los
              Mercados del Mundo, operar y tener ganancias con tu deposito
              gracias al Mejor Broker del Mercado. Ingresa a la WEB de Q |
              Capital – Stock Market Academy, elegí la opción que coincida con
              tu necesidad y conocimiento y
            </p>
          </div>
          <div>
            <h3 style={options}>
              Plan Advanced - Fondeo Directo + Comunidad VIP Q | Cap
            </h3>
            <p style={optionText}>
              Obtene Fondeo Directo y Accede a la Comunidad VIP de Q |Cap (*) •
              Fondeo de 400 USD. *Con el fondeo directo podrás acceder a los
              Mercados del Mundo y además tener ingreso a la comunidad VIP de Q
              |Cap. Podrás operar y tener ganancias con tu deposito gracias al
              Mejor Broker del Mercado y estar conectado con Traders que
              comparten sus experiencias día a día, además de estar informado de
              lo que sucede con análisis diario del Pre-Mercado. Ingresa a la
              WEB de Q | Capital – Stock Market Academy, elegí la opción que
              coincida con tu necesidad y conocimiento y accede de forma muy
              sencilla a fondear tu cuenta siguiendo los pasos detallados.
            </p>
          </div>
          <div>
            <h3 style={options}>
              Plan Premium - Fondeo Directo + Comunidad VIP + Vivo Mensual
              Operaciones + Señales{" "}
            </h3>
            <p style={optionText}>
              Obtene Fondeo Directo y Accede a la Comunidad VIP + Vivo mensual
              de Operaciones + Canal de Señales (*) • Fondeo de 800 USD. *Con el
              fondeo directo podrás acceder a los Mercados del Mundo, además
              tener ingreso a la comunidad VIP de Q |Cap, operar mensualmente
              con nuestro acompañamiento y obtener un canal de Señales para que
              no te pierdas ningún dato de lo que pasa en los mercados para
              tener un mejor Trade. Podrás operar y tener ganancias con tu
              deposito gracias al Mejor Broker del Mercado y estar conectado con
              Traders que comparten sus experiencias día a día, además de estar
              informado de lo que sucede con análisis diario del Pre-Mercado.
              Ingresa a la WEB de Q | Capital – Stock Market Academy, elegí la
              opción que coincida con tu necesidad y conocimiento y accede de
              forma muy sencilla a fondear tu cuenta siguiendo los pasos
              detallados.
            </p>
          </div>
          <div>
            <h3 style={options}>
              Plan Platinum Fondeo Directo + Comunidad VIP + Vivo Mensual
              Operaciones + Señales + 10% Descuento Curso Trader/Inversor
              (Combo) Q | Cap
            </h3>
            <p style={optionText}>
              Obtene Fondeo Directo y Accede a la Comunidad VIP + Vivo mensual
              de Operaciones + Canal de Señales (*) • Fondeo de 1000 - 10000
              USD. *Con el fondeo directo podrás acceder a los Mercados del
              Mundo, además tener ingreso a la comunidad VIP de Q |Cap, operar
              mensualmente con nuestro acompañamiento y obtener un canal de
              Señales para que no te pierdas ningún dato de lo que pasa en los
              mercados para tener un mejor Trade. Podrás operar y tener
              ganancias con tu deposito gracias al Mejor Broker del Mercado y
              estar conectado con Traders que comparten sus experiencias día a
              día, además de estar informado de lo que sucede con análisis
              diario del Pre-Mercado. Como si fuera poco, obtene un 10% de
              descuento en el curso Trader/Inversor (combo), el cual tendrás
              membresia de por vida en Q | Cap Ingresa a la WEB de Q | Capital –
              Stock Market Academy, elegí la opción que coincida con tu
              necesidad y conocimiento y accede de forma muy sencilla a fondear
              tu cuenta siguiendo los pasos detallados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broker;
