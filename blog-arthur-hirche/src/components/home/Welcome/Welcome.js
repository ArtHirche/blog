import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/theme.css";
import "./Welcome.css";

export default function Welcome() {
  return (
    <main className="welcome-root">
      <div className="welcome-card">
        <h1 className="welcome-title typewriter">Bem-vindo(a) ao meu Blog!</h1>
        <p className="welcome-sub glow-text">
          Conteúdo sobre desenvolvimento, design e minha vida.
        </p>
        <div className="welcome-actions">
          <Link to="/blog" className="btn btn-primary neon-button">
            Entrar no blog
          </Link>
          <Link to="/sobre" className="btn btn-ghost neon-button-ghost">
            Sobre mim
          </Link>
        </div>
      </div>
      <footer className="welcome-footer">
        © {new Date().getFullYear()} Arthur Hirche
      </footer>
    </main>
  );
}
