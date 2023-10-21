import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const initData = {
  labels: ["Реклама", "Соціальні мережі", "Веб-сайт"],
  datasets: [
    {
      label: "Кількість користувачів",
      data: [],
      backgroundColor: "#007bff",
    },
  ],
};

const UserSegmentationByTrafficSource = ({ period }) => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    const fetchDataBasedOnPeriod = (selectedPeriod) => {
      const dataForPeriod = getDummyDataForPeriod(selectedPeriod);

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(dataForPeriod);
        }, 1000);
      });
    };

    fetchDataBasedOnPeriod(period)
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [period]);

  const getDummyDataForPeriod = (selectedPeriod) => {
    switch (selectedPeriod) {
      case "За вчора":
        return {
          labels: ["Реклама", "Соціальні мережі", "Веб-сайт"],
          datasets: [
            {
              label: "Кількість користувачів",
              data: [20, 30, 50],
              backgroundColor: "#007bff",
            },
          ],
        };
      case "За 7 днів":
        return {
          labels: ["Реклама", "Соціальні мережі", "Веб-сайт"],
          datasets: [
            {
              label: "Кількість користувачів",
              data: [170, 120, 90],
              backgroundColor: "#007bff",
            },
          ],
        };
      case "За місяць":
        return {
          labels: ["Реклама", "Соціальні мережі", "Веб-сайт"],
          datasets: [
            {
              label: "Кількість користувачів",
              data: [10, 90, 120],
              backgroundColor: "#007bff",
            },
          ],
        };
      case "За квартал":
        return {
          labels: ["Реклама", "Соціальні мережі", "Веб-сайт"],
          datasets: [
            {
              label: "Кількість користувачів",
              data: [300, 150, 100],
              backgroundColor: "#007bff",
            },
          ],
        };
      case "За рік":
        return {
          labels: ["Реклама", "Соціальні мережі", "Веб-сайт"],
          datasets: [
            {
              label: "Кількість користувачів",
              data: [300, 300, 300],
              backgroundColor: "#007bff",
            },
          ],
        };
      default:
        return initData;
    }
  };

  const options = {
    legend: {
      display: false,
    },
  };

  return (
    <Card>
      <Card.Header>{`Сегментація користувачів за джерелом трафіку`}</Card.Header>
      <Card.Body>
        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default UserSegmentationByTrafficSource;
