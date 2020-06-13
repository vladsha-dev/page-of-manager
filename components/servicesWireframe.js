import ServiceType from "./serviceType";
import { useEffect, useState } from "react";
const servicesWireframe = () => {
  const services = [
    { type: "Ручное бронирование", count: 11, background: "#B1E19B" },
    { type: "Пакетные туры", count: 3, background: "#ACE2F8" },
    { type: "Отели", count: 1, background: "#ACE2F8" },
  ];
  const generalCount = services
    .map((type) => type.count)
    .reduce((acc, sum) => acc + sum, 0);

  const [widthServices, setWidthServices] = useState();
  useEffect(() => {
    setWidthServices(document.querySelector(".services").offsetWidth);
    addEventListener("resize", () => {
      setWidthServices(document.querySelector(".services").offsetWidth);
    });
  });
  return (
    <>
      <div className="services-wrapper">
        <span className="intro-title">Услуг</span>
        <div className="services">
          {services.map((type, index) => (
            <div key={index}>
              <ServiceType
                serviceData={type}
                generalCount={generalCount}
                widthOfServices={widthServices}
              />
            </div>
          ))}
        </div>
        <div className="general-count">
          <span className="count-intro-title">Всего</span>
          <span className="count">{generalCount}</span>
        </div>
      </div>
      <style jsx>{`
        .services-wrapper {
          width: 70.4%;
          margin-left: auto;
        }
        .services {
          border-left: 1px solid #dadada;
          padding-right: 41px;
        }
        .intro-title {
          display: flex;
          justify-content: flex-end;
          border-bottom: 1px solid #dadada;
          font-size: 19px;
          padding-right: 34px;
          padding-bottom: 7px;
          margin-bottom: 16px;
        }
        .general-count {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #dadada;
          font-size: 22px;
          font-weight: 600;
          padding-right: 41px;
          padding-top: 7px;
          margin-top: 16px;
        }
        @media only screen and (max-width: 660px) {
          .intro-title {
            font-size: 17px;
          }
          .general-count {
            font-size: 20px;
          }
        }
        @media only screen and (max-width: 600px) {
          .intro-title {
            font-size: 15px;
          }
          .general-count {
            font-size: 18px;
          }
        }
        @media only screen and (max-width: 540px) {
          .intro-title {
            font-size: 13px;
          }
          .general-count {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};
export default servicesWireframe;
