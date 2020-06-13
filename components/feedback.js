const feedback = ({ feedback }) => {
  return (
    <>
      <div className="feedback-wrapper">
        <div className="info-name-data">
          <span className="name">{feedback.name}</span>
          <span className="data">{feedback.datе}</span>
        </div>
        <div className="main-content-feedback">{feedback.textOfFeedback}</div>
      </div>
      <style jsx>{`
        .feedback-wrapper {
          margin-bottom: 30px;
        }
        .info-name-data {
          display: flex;
          align-items: flex-end;
          margin-bottom: 20px;
        }
        .name {
          margin-right: 10px;
          font-size: 20px;
          font-weight: 600;
        }
        .data {
          font-size: 16px;
          color: #808080;
        }
        .main-content-feedback {
          font-size: 20px;
          line-height: 26px;
          box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
          padding: 15px 15px 15px 20px;
          background: #f2fbff;
          border: 1px solid #c4cbcf;
          position: relative;
        }
        .main-content-feedback:before {
          content: " ";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 20px 0 0 18px;
          border-color: transparent transparent transparent #c4cbcf;
          top: -15px;
          left: 30px;
          z-index: -1;
        }
        .main-content-feedback:after {
          content: " ";
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 14px 0 0 14px;
          border-color: transparent transparent transparent #f2fbff;
          top: -12px;
          left: 31px;
        }
        @media only screen and (max-width: 660px) {
          .name {
            font-size: 18px;
          }
          .data {
            font-size: 14px;
          }
          .main-content-feedback {
            font-size: 18px;
            line-height: 24px;
          }
        }
        @media only screen and (max-width: 600px) {
          .name {
            font-size: 16px;
          }
          .data {
            font-size: 12px;
          }
          .main-content-feedback {
            font-size: 16px;
            line-height: 22px;
          }
        }
        @media only screen and (max-width: 540px) {
          .name {
            font-size: 14px;
          }
          .data {
            font-size: 10px;
          }
          .main-content-feedback {
            font-size: 14px;
            line-height: 19px;
            padding: 13px 15px 15px 20px;
          }
          .info-name-data {
            margin-bottom: 11px;
          }
          .main-content-feedback:before {
            border-width: 16px 0 0 14px;
            top: -11px;
            left: 23px;
          }
          .main-content-feedback:after {
            border-width: 10px 0 0 10px;
            top: -8px;
            left: 24px;
          }
          .feedback-wrapper {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </>
  );
};
export default feedback;
