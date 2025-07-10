import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "60px",
        paddingRight: "60px",
        zIndex: 20,
        background:
          "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "white",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "white",
            lineHeight: "1.6",
            marginBottom: "30px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            maxWidth: "500px",
          }}
        >
          {overview}
        </p>

        <div style={{ display: "flex", gap: "15px" }}>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              border: "none",
              padding: "12px 30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#e6e6e6")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
          >
            ▶️ Play
          </button>

          <button
            style={{
              backgroundColor: "rgba(109, 109, 110, 0.7)",
              color: "white",
              border: "none",
              padding: "12px 30px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(109, 109, 110, 0.9)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "rgba(109, 109, 110, 0.7)")
            }
          >
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
