import React from "react";
import StepSection from "./landingComponents/StepSection";

const Landing = () => {
  return (
    <div>
      <div style={{ display: "flex", width: "100vw"}}>

        <div style={{ flex: 1 }}>
          <img
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            src="../images/email-screen.png"
            alt="A screen indicating an email icon"
          />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem"
          }}
        >
          <h2 style={{color: "grey", fontSize: "5rem", marginBottom: "2rem" }}>Empower your email campaigns today</h2>
          <p style={{ color: "grey", fontSize: "1.5rem"}}>
            With Campane, you can send emails to as many recipients as you need,
            track the answers from your surveys, and log in simply using your Google account!
          </p>
        </div>
      </div>

      <div style={{ display: "flex", height: "100vh", width: "100vw", padding: "10rem"}}>

        <StepSection
          svgPath1="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"
          svgPath2="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"
          text="Log in with your Google account. It's that easy."
          index="0"
        />

        <StepSection
          svgPath1="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"
          svgPath2="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"
          text="Add credits using a credit card"
          index="1"
        />

        <StepSection
          svgPath1="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"
          svgPath2="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"
          text="Click the bottom right button to get started"
          index="2"
        />

      </div>
    </div>
  );
};

export default Landing;
