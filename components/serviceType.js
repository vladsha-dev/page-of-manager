import { useEffect, useState } from "react";
const serviceType = ({ serviceData, generalCount, widthOfServices }) => {
  const [widthService, setWidthService] = useState();

  useEffect(() => {
    const widthOfLineStatistics =
      (((widthOfServices / 100) * 85) / generalCount) * serviceData.count;
    setWidthService(widthOfLineStatistics);
  }, [widthOfServices]);

  return (
    <>
      <div className="service-type">
        <span className="type">{serviceData.type}</span>
        <span className="count">{serviceData.count}</span>
      </div>
      <style jsx>{`
        .service-type {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          font-size: 19px;
          height: 24px;
        }
        .type {
          background: ${serviceData.background};
          white-space: nowrap;
          width: ${widthService}px;
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
          display: flex;
          align-items: center;
        }
        .count {
          font-weight: 600;
        }
        @media only screen and (max-width: 660px) {
          .service-type {
            font-size: 17px;
          }
        }
        @media only screen and (max-width: 600px) {
          .service-type {
            font-size: 15px;
          }
        }
        @media only screen and (max-width: 540px) {
          .service-type {
            font-size: 13px;
            margin-bottom: 2px;
          }
        }
      `}</style>
    </>
  );
};
export default serviceType;
