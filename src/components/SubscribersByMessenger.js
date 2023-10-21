import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";

const initData = {
  labels: [],
  datasets: [],
};

const SubscribersByMessenger = ({ period }) => {
  const [data, setData] = useState(initData);

  useEffect(() => {
    const fetchDataBasedOnPeriod = (selectedPeriod) => {
      const dataForPeriod = getDummyDataForPeriod(selectedPeriod);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(dataForPeriod);
        }, 600);
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
          labels: ["Телеграм", "Вайбер"],
          datasets: [
            {
              data: [2, 10],
              backgroundColor: ["#007bff", "#28a745"],
            },
          ],
        };
      case "За 7 днів":
        return {
          labels: ["Телеграм", "Вайбер"],
          datasets: [
            {
              data: [7, 40],
              backgroundColor: ["#007bff", "#28a745"],
            },
          ],
        };
      case "За місяць":
        return {
          labels: ["Телеграм", "Вайбер"],
          datasets: [
            {
              data: [45, 5],
              backgroundColor: ["#007bff", "#28a745"],
            },
          ],
        };
      case "За квартал":
        return {
          labels: ["Телеграм", "Вайбер"],
          datasets: [
            {
              data: [40, 60],
              backgroundColor: ["#007bff", "#28a745"],
            },
          ],
        };
      case "За рік":
        return {
          labels: ["Телеграм", "Вайбер"],
          datasets: [
            {
              data: [50, 50],
              backgroundColor: ["#007bff", "#28a745"],
            },
          ],
        };
      default:
        return initData;
    }
  };

  const options = {
    legend: {
      display: true,
      position: "bottom",
    },
  };

  return (
    <Card>
      <Card.Header>{`Аналіз підписників за типом месенджера`}</Card.Header>
      <Card.Body>
        <div>
          <Doughnut data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SubscribersByMessenger;
