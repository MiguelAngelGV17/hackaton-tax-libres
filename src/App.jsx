import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <header>
          <section className="container-images">
            <figure>
              <img
                className="logo-1"
                src="../logo-hackaton.png"
                alt="logo-hackaton"
              />
            </figure>
            <figure>
              <img className="logo-2" src="../logo-taxis-libres.png" alt="" />
            </figure>
          </section>
        </header>

        <section className="container-info">
          <article className="section what">
            <h1>¿... y qué es la Hackaton?</h1>
            <p>
              Es un evento de tradición de la compañía Taxis Libres, celebrado
              en periodos de 1 año, en el cual entusiastas de la creación con
              diferentes perfiles que van desde la ingeniería hasta el análisis
              de datos, se reúnen para dar lo mejor de sí y quedar en el podio
              al superar los diferentes retos de movilidad que son planteados
            </p>
          </article>
          <article className="section where">
            <h1>¿Dónde se llevará a cabo?</h1>
            <p>
              Como es costumbre, se llevará a cabo en las principales ciudades
              del país en las cuales la empresa tiene cobertura; estas ciudades
              son:
              <table className="section-cities">
                <tr>Cali</tr>
                <tr>Manizalez</tr>
                <tr>Medellín</tr>
                <tr>Cúcuta</tr>
                <tr>Bucaramanga</tr>
                <tr>Bogotá</tr>
              </table>
            </p>
          </article>
          <article className="section why">
            <h1> ¿Cuál es el objetivo de este tan esperado evento?</h1>
            <p>
              Identificar el potencial de los diferentes participantes,
              premiando su resiliencia y lucha contra la frustración,
              brindándoles la oportunidad de ser parte de nuestra familia y
              capacitándolos en el manejo de diferentes tecnologías,
              incentivando así las ganas de crecer y continuar dando lo mejor de
              si
            </p>
          </article>
        </section>

        <footer>
          <article>
            <h1>PREMIOS</h1>
          </article>
          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src="../prime-1.jpg" alt="" />
              </div>
              <div className="slide">
                <img src="../prime-2.jpg" alt="" />
              </div>
              <div className="slide">
                <img src="../prime-3.jpg" alt="" />
              </div>
              <div className="slide">
                <img src="../prime-4.jpg" alt="" />
              </div>
              <div className="slide">
                <img src="../prime-1.jpg" alt="" />
              </div>
              <div className="slide">
                <img src="../prime-2.jpg" alt="" />
              </div>
              <div className="slide">
                <img src="../prime-3.jpg" alt="" />
              </div>
              <div className="slide">
                <img src="../prime-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <article>
            <h1>Patrocinadores oficiales</h1>
            <div className="slider two" id="two">
              <div className="slide-track-2">
                <div className="slide">
                  <img src="../sponsor-1.png" alt="" />
                </div>
                <div className="slide">
                  <img src="../sponsor-2.png" alt="" />
                </div>
                <div className="slide">
                  <img src="../sponsor-3.png" alt="" />
                </div>
                <div className="slide">
                  <img src="../sponsor-1.png" alt="" />
                </div>
                <div className="slide">
                  <img src="../sponsor-2.png" alt="" />
                </div>
                <div className="slide">
                  <img src="../sponsor-3.png" alt="" />
                </div>
              </div>
            </div>
          </article>
          <aside>
            <article className="container-form">
              <h1>Formulario de inscripción</h1>
              <form className="form">
                <aside>
                  <p>Nombre(s) y apellidos </p>
                  <input type="text" placeholder="Ingrese su nombre" required />
                </aside>
                <aside>
                  <p>País / ciudad de residencia</p>
                  <span>
                    <input type="text" placeholder="País" required />
                    <input type="text" placeholder="ciudad" required />
                  </span>
                </aside>
                <aside>
                  <p>Teléfono/celular</p>
                  <input
                    type="number"
                    placeholder="Numero de teléfono"
                    minLength={7}
                    required
                  />
                </aside>
                <aside>
                  <p>Fecha de nacimiento</p>
                  <input type="date" />
                </aside>

                <aside>
                  <p>Nivel de experiencia</p>
                  <select name="Nivel de experiencia" id="">
                    <option value="1">Estudiante</option>
                    <option value="1">Junior</option>
                    <option value="2">Middle</option>
                    <option value="">Senior</option>
                  </select>
                </aside>
              </form>
            </article>
          </aside>
        </footer>
      </main>
    </>
  );
}

export default App;
