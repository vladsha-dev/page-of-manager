import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
import Feedback from "./feedback";
const privateInfOfUser = ({ feedbacksContent }) => {
  resetIdCounter();
  return (
    <>
      <Tabs>
        <div className="status-wrapper">
          <TabList>
            <Tab>Последние отзывы</Tab>
            <Tab>Все отзывы</Tab>
          </TabList>
          <div className="likes-feedbacks-amount">
            <div className="likes-info">
              <img src="/icons/like.svg" />
              <span className="likes-amount">131</span>
            </div>
            <div className="feedbacks-info">
              <img src="/icons/comment.svg" />
              <span className="feedbacks-amount">
                {feedbacksContent.length}
              </span>
            </div>
          </div>
        </div>
        <TabPanel>
          {feedbacksContent
            .filter(
              (feedback) =>
                (Date.UTC(
                  new Date().getFullYear(),
                  new Date().getMonth() + 1,
                  new Date().getDate(),
                  0,
                  0,
                  0
                ) -
                  feedback.timeInMilliseconds) /
                  (60 * 60000) /
                  24 <=
                2
            )
            .map((feedback, index) => (
              <Feedback feedback={feedback} key={index} />
            ))}
        </TabPanel>
        <TabPanel>
          {feedbacksContent.map((feedback, index) => (
            <Feedback feedback={feedback} key={index} />
          ))}
        </TabPanel>
      </Tabs>
      <style jsx>{`
        .status-wrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .likes-feedbacks-amount {
          display: flex;
          font-size: 20px;
          align-items: flex-end;
        }
        .likes-feedbacks-amount img {
          width: 24px;
          height: 22px;
        }
        .likes-info,
        .feedbacks-info {
          display: flex;
          align-items: center;
        }
        .likes-amount,
        .feedbacks-amount {
          margin-left: 4px;
        }
        .feedbacks-info {
          margin-left: 18px;
        }
        @media only screen and (max-width: 660px) {
          .likes-feedbacks-amount {
            font-size: 18px;
          }
          .likes-feedbacks-amount img {
            width: 21px;
            height: 19px;
          }
        }
        @media only screen and (max-width: 600px) {
          .likes-feedbacks-amount {
            font-size: 16px;
          }
          .likes-feedbacks-amount img {
            width: 19px;
            height: 17px;
          }
        }
        @media only screen and (max-width: 540px) {
          .likes-feedbacks-amount {
            font-size: 12px;
          }
          .likes-feedbacks-amount img {
            width: 14px;
            height: 13px;
          }
          .status-wrapper {
            margin-bottom: 10px;
          }
        }
        @media only screen and (max-width: 490px) {
          .likes-feedbacks-amount {
            font-size: 11px;
          }
          .likes-feedbacks-amount img {
            width: 11px;
            height: 12px;
          }
          .feedbacks-info {
            margin-left: 8px;
          }
          .likes-amount,
          .feedbacks-amount {
            margin-left: 2px;
          }
        }
        @media only screen and (max-width: 430px) {
          .feedbacks-info {
            margin-left: 5px;
          }
        }
      `}</style>
      <style jsx global>{`
        .react-tabs__tab-list {
          list-style: none;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
          display: flex;
        }
        .react-tabs__tab {
          display: flex;
          font-size: 20px;
          align-items: flex-end;
          color: #005da1;
          text-decoration-line: underline;
          cursor: pointer;
          margin-right: 15px;
          outline: none;
        }
        .react-tabs__tab--selected {
          font-size: 22px;
          font-weight: 600;
          color: #333333;
          text-decoration: none;
          cursor: default;
        }
        @media only screen and (max-width: 660px) {
          .react-tabs__tab--selected {
            font-size: 20px !important;
          }
          .react-tabs__tab {
            font-size: 18px;
          }
        }
        @media only screen and (max-width: 600px) {
          .react-tabs__tab--selected {
            font-size: 18px !important;
          }
          .react-tabs__tab {
            font-size: 16px;
            margin-right: 10px;
          }
        }
        @media only screen and (max-width: 540px) {
          .react-tabs__tab--selected {
            font-size: 16px !important;
          }
          .react-tabs__tab {
            font-size: 14px;
          }
        }
        @media only screen and (max-width: 490px) {
          .react-tabs__tab--selected {
            font-size: 15px !important;
          }
          .react-tabs__tab {
            font-size: 13px;
            margin-right: 7px;
          }
        }
      `}</style>
    </>
  );
};
export default privateInfOfUser;
