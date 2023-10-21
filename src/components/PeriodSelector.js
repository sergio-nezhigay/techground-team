import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const PeriodSelector = ({ selectedPeriod, onSelectPeriod }) => {
  const periods = [
    "За вчора",
    "За 7 днів",
    "За місяць",
    "За квартал",
    "За рік",
  ];

  return (
    <div>
      <ButtonGroup>
        {periods.map((period) => (
          <ToggleButton
            key={period}
            type="radio"
            variant="outline-secondary"
            value={period}
            checked={selectedPeriod === period}
            onClick={() => onSelectPeriod(period)}
          >
            {period}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default PeriodSelector;
