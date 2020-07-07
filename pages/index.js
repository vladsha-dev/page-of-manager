import React from "react";
import Head from "next/head";
import GeneralInfOfUser from "../components/generalInfOfUser";
import FeedbacksTabs from "../components/feedbacksTabs";
import Form from "../components/form";
import fetch from "isomorphic-unfetch";

const Home = ({ notes }) => {
  return (
    <>
      <Head>
        <title>Page Of Manager Veronika</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="main-container">
        <div className="section-general-inf-user">
          <GeneralInfOfUser />
        </div>
        <div className="section-feedbacks">
          {/* <FeedbacksTabs feedbacksContent={notes} /> */}
        </div>
      </div>
      <div className="form-container">
        <div className="page-content">
          <Form />
        </div>
      </div>
      <style jsx>{`
        .main-container {
          font-family: "Open Sans", sans-serif;
          color: #333333;
          max-width: 720px;
          margin: auto;
          box-sizing: border-box;
          padding: 14px 20px;
        }
        .section-general-inf-user {
          margin-bottom: 27px;
        }
        .form-container {
          background: #f2f2f2;
        }
        .page-content {
          max-width: 720px;
          margin: auto;
          padding: 0px 20px;
          box-sizing: border-box;
        }
        @media only screen and (max-width: 540px) {
          .section-general-inf-user {
            margin-bottom: 20px;
          }
        }
      `}</style>
      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};
// Home.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3000/api/notes");
//   const { data } = await res.json();
//   return { notes: data };
// };

export default Home;
