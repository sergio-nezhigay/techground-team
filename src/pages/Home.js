import React from "react";
import { Container } from "react-bootstrap";
import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <>
      <Container className="mt-5">
        <Dashboard isExportButtonActive={true} />
      </Container>
    </>
  );
}

export default Home;
