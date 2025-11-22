import React from "react";

export default function Employment() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        // paddingTop: "60px",
        paddingBottom: "80px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top thin border */}
      <div
        style={{
          width: "100%",
          height: "8px",
          backgroundColor: "#083b54",
          marginBottom: "40px",
        }}
      ></div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "600",
          color: "#083b54",
          marginBottom: "30px",
        }}
      >
        Employment at WE Trust
      </h1>

      {/* Subtitle Text */}
      <p
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontSize: "20px",
          color: "#555",
          lineHeight: "1.6",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <strong>WE Trust Company</strong> is an equal opportunity employer and
        does not unlawfully discriminate against employees or applicants for
        employment based on an individual’s race, color, religion, creed, sex,
        national origin, age, disability, marital status, veteran status or any
        other status protected by applicable law.
      </p>

      {/* No openings */}
      <p
        style={{
          marginTop: "40px",
          fontSize: "22px",
          color: "#444",
        }}
      >
        There are currently no job openings.
      </p>
    </div>
  );
}
