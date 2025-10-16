import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }), 
      });

      const text = await res.text();
      console.log(text);

      if (res.ok && text === "Registro exitoso") {
        alert("🎉 Registro exitoso, ahora inicia sesión");
        navigate("/login");
      } else {
        alert("⚠️ Error al registrar: " + text);
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("No se pudo conectar con el servidor.");
    }
  };

  return (
    <div className="container">
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
}

export default Register;
