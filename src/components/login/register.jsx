import React from "react";
import loginImg from "../../movies.png";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Registro</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <input type="text" name="username" placeholder="Usuario" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electronico</label>
              <input type="text" name="email" placeholder="Correo Electronico" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="text" name="password" placeholder="Contraseña" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Registrarse
          </button>
        </div>
      </div>
    );
  }
}
