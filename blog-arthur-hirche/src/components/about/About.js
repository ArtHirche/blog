import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./About.css";

export default function About() {
  const [aboutText, setAboutText] = useState("Texto...");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedText = localStorage.getItem("aboutText");
    if (savedText) {
      setAboutText(savedText);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("aboutText", aboutText);
    setIsEditing(false);
  };

  const calculateAge = () => {
    const birthDate = new Date(2005, 0, 3); // 3 de Janeiro de 2005
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image-container fade-in">
          <img
            src="/images/imageAboutMe.jpg"
            alt="Arthur Hirche"
            className="about-image"
          />
        </div>
        <div className="about-text fade-in delay-1">
          <h1>Sobre Mim</h1>

          <div className="age-display">
            <p>Idade: {calculateAge()} anos</p>
          </div>

          <div className="about-description">
            {isEditing ? (
              <textarea
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                className="about-textarea"
                rows="10"
              />
            ) : (
              <div className="markdown-content">
                <ReactMarkdown>{aboutText}</ReactMarkdown>
              </div>
            )}
          </div>

          <div className="social-buttons">
            <a
              href="https://www.instagram.com/arthurhirche/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button instagram"
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/arthurhirche/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/arthirche"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button github"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <div className="edit-controls">
            {isEditing ? (
              <button onClick={handleSave} className="save-button">
                Salvar
              </button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="edit-button">
                Editar
              </button>
            )}
          </div>

          <div className="navigation-buttons">
            <button onClick={() => navigate("/")} className="nav-button back-button">
              Voltar
            </button>
            <button onClick={() => navigate("/blog")} className="nav-button blog-button">
              Veja o blog inteiro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

