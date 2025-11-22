import React from "react";

export default function About() {
  return (
    <div
      style={{
        fontFamily: "'Nanum Gothic', sans-serif",
        width: "100%",
        textAlign: "center",
        paddingBottom: "60px",
      }}
    >
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* TOP CITY IMAGE */}
      <div style={{ width: "100%" }}>
        <img
          src="YOUR_TOP_IMAGE"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* TITLE */}
      <h2
        style={{
          fontSize: "24px",
          marginTop: "40px",
          marginBottom: "15px",
          fontWeight: "700",
          color: "#003B54",
        }}
      >
        About WE Trust Company
      </h2>

      {/* ABOUT TEXT */}
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          fontSize: "13px",
          lineHeight: "20px",
          color: "#4b4b4b",
          textAlign: "left",
        }}
      >
        <p>
          <strong>WE Trust Company</strong> was founded by Cherie Wears in 1997
          with a primary focus on estate administration and organization. Over
          time, the company’s services expanded to include being named Personal
          Representative, Trustee, Attorney-in-Fact and Family Office
          Administrator.
        </p>

        <p style={{ marginTop: "15px" }}>
          We have administered and settled hundreds of estates and trusts and
          served tirelessly as financial advocates for our clients.
          Relationships are at the core of our business and bringing clients
          peace of mind is our singular mission.
        </p>
      </div>

      {/* EMPLOYEE GRID */}
      <div
        style={{
          maxWidth: "850px",
          margin: "40px auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "35px",
          justifyContent: "center",
        }}
      >
        {/* ROW 1 */}
        {[
          {
            name: "Alexandra Brown, Associate",
            img: "IMAGE_1",
          },
          {
            name: "Lora Campbell, CMMR, Senior Associate",
            img: "IMAGE_2",
          },
          {
            name: "Suzanne Clayton, Senior Associate",
            img: "IMAGE_3",
          },
        ].map((person, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <img
              src={person.img}
              alt=""
              style={{
                width: "170px",
                height: "170px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "12px",
                color: "#555",
              }}
            >
              {person.name}
            </p>
          </div>
        ))}

        {/* ROW 2 */}
        {[
          {
            name: "Jess Cetrang, Director of Family Office",
            img: "IMAGE_4",
          },
          {
            name: "Jeanne Coville, CSAB, CMMR, Associate",
            img: "IMAGE_5",
          },
          {
            name: "Marie Dunn, Business & Marketing Manager",
            img: "IMAGE_6",
          },
        ].map((person, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <img
              src={person.img}
              alt=""
              style={{
                width: "170px",
                height: "170px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "12px",
                color: "#555",
              }}
            >
              {person.name}
            </p>
          </div>
        ))}

        {/* ROW 3 */}
        {[
          {
            name: "Ann Easton, Chief Operating Officer",
            img: "IMAGE_7",
          },
          {
            name: "Amy Egbert, CFA, CEO",
            img: "IMAGE_8",
          },
          {
            name: "Charlotte Henders, Controller",
            img: "IMAGE_9",
          },
        ].map((person, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <img
              src={person.img}
              alt=""
              style={{
                width: "170px",
                height: "170px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "12px",
                color: "#555",
              }}
            >
              {person.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
