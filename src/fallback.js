import ReactDOM from "react-dom"

// Super simple fallback component with inline styles
const FallbackComponent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#0B6623",
      color: "white",
      textAlign: "center",
      fontFamily: "sans-serif",
    }}
  >
    <h1
      style={{
        fontFamily: "serif",
        fontSize: "3rem",
        color: "#D4AF37",
        marginBottom: "1rem",
      }}
    >
      Maison Élégance
    </h1>
    <p
      style={{
        fontSize: "1.2rem",
        marginBottom: "2rem",
      }}
    >
      Timeless Elegance, Modern Luxury
    </p>
    <button
      style={{
        backgroundColor: "#D4AF37",
        color: "#2C2C2C",
        border: "none",
        padding: "12px 30px",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "2px",
        cursor: "pointer",
      }}
    >
      Explore Collection
    </button>
  </div>
)

// Render the fallback component directly
if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root")

  if (rootElement) {
    ReactDOM.render(<FallbackComponent />, rootElement)
  }
}

