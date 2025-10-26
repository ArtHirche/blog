import React from "react";
import "../../../styles/theme.css";
import "./Welcome.css";

export default function Welcome() {
  return (
    <main className="welcome-root">
      <div className="welcome-card">
        <h1 className="welcome-title typewriter">Bem-vindo ao meu Blog!!!</h1>
        <p className="welcome-sub glow-text">
          Conteúdo sobre desenvolvimento, design e minha vida.
        </p>
        <div className="welcome-actions">
          <a className="btn btn-primary neon-button" href="#posts">
            Entrar no blog
          </a>
          <a className="btn btn-ghost neon-button-ghost" href="#sobre">
            Sobre mim
          </a>
        </div>
      </div>
      <footer className="welcome-footer">
        © {new Date().getFullYear()} Arthur Hirche
      </footer>
    </main>
  );
}
