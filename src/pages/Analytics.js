import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import SubscribersByMessenger from "../components/SubscribersByMessenger";
import PeriodSelector from "../components/PeriodSelector";
import UserSegmentationByTrafficSource from "../components/UserSegmentationByTrafficSource";

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("За 7 днів");

  const handleSelectPeriod = (period) => {
    console.log("🚀 ~ file: Analytics.js:13 ~ handleSelectPeriod:");
    setSelectedPeriod(period);
  };

  return (
    <div>
      <Row>
        <Col sm={6}>
          <h1>Аналітика</h1>
        </Col>
        <Col sm={6} className="d-flex justify-content-end align-items-center">
          <PeriodSelector
            selectedPeriod={selectedPeriod}
            onSelectPeriod={handleSelectPeriod}
          />
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <SubscribersByMessenger period={selectedPeriod} />
        </Col>
        <Col sm={6}>
          <UserSegmentationByTrafficSource period={selectedPeriod} />
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;
