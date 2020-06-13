const privateInfOfUser = () => {
  return (
    <>
      <div className="info-user-wrapper">
        <img className="user-img" src="/img/veronika-img.jpg" />
        <div className="info-main">
          <span className="name">Вероника Ростова</span>
          <span className="status">Менеджер по продажам</span>
          <div className="slogan">
            Подберу для вас самые лучшие предложения. Мои услуги абсолютно
            бесплатны
          </div>
        </div>
      </div>
      <style jsx>{`
        .info-user-wrapper {
          line-height: 36px;
          display: flex;
        }
        .info-main {
          display: flex;
          flex-direction: column;
          width: 70%;
          margin-left: 10px;
        }
        .user-img {
          border-radius: 50%;
          z-index: 100;
          height: 30%;
          width: 30%;
        }
        .name {
          font-weight: 600;
          font-size: 22px;
          padding-top: 10px;
        }
        .status {
          font-size: 18px;
          color: #808080;
          margin-bottom: 10px;
        }
        .slogan {
          font-size: 20px;
          width: auto;
          min-height: 54px;
          padding: 5px 5px 5px 45px;
          background: #fffbc8;
          border: 1px solid #dadada;
          box-sizing: border-box;
          border-radius: 5px;
          margin-left: -50px;
        }
        @media only screen and (max-width: 660px) {
          .info-user-wrapper {
            line-height: 28px;
          }
          .name {
            font-size: 20px;
          }
          .status {
            font-size: 16px;
          }
          .slogan {
            font-size: 18px;
            width: 111.5%;
          }
        }
        @media only screen and (max-width: 600px) {
          .info-user-wrapper {
            line-height: 26px;
          }
          .name {
            font-size: 18px;
          }
          .status {
            font-size: 14px;
          }
          .slogan {
            font-size: 16px;
            width: 113%;
          }
        }
        @media only screen and (max-width: 540px) {
          .info-user-wrapper {
            line-height: 20px;
          }
          .name {
            font-size: 16px;
            padding-top: 6px;
            margin-bottom: 3px;
          }
          .status {
            font-size: 12px;
            margin-bottom: 5px;
          }
          .slogan {
            font-size: 14px;
            width: 115%;
            margin-left: -45px;
          }
          .info-main {
            width: 73%;
            margin-left: 8px;
          }
          .user-img {
            height: 27%;
            width: 27%;
          }
        }
        @media only screen and (max-width: 490px) {
          .info-user-wrapper {
            line-height: 20px;
          }
          .status {
            font-size: 11px;
          }
          .slogan {
            font-size: 13px;
          }
        }
        @media only screen and (max-width: 430px) {
          .info-user-wrapper {
            line-height: 17px;
          }
          .slogan {
            width: 116%;
          }
        }
        @media only screen and (max-width: 390px) {
          .slogan {
            width: 118%;
          }
        }
        @media only screen and (max-width: 360px) {
          .slogan {
            width: 119.5%;
          }
        }
      `}</style>
    </>
  );
};
export default privateInfOfUser;
