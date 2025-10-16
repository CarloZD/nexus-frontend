import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Cerraste sesión correctamente 👋");
    navigate("/"); // vuelve al login
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎮 Bienvenido al sistema Nexus</h1>
      <p>Has iniciado sesión correctamente.</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Home;
