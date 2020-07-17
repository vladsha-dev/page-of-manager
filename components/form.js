import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Очень короткое имя")
    .max(50, "Очень длинное имя")
    .required("Поле не может быть пустым"),
  textOfFeedback: Yup.string()
    .min(0, "Очень короткий отзыв")
    .max(300, "Очень длинный отзыв")
    .required("Поле не может быть пустым"),
});
const form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState();
  useEffect(() => {
    addEventListener("keydown", (e) => {
      e.keyCode === 13 && e.ctrlKey
        ? document.querySelector(".form-btn").click()
        : null;
    });
    if (isSubmitting) {
      sendFeedback();
      setIsSubmitting(!isSubmitting);
      setTimeout(() => location.reload(true), 200);
    }
  });
  const sendFeedback = async () => {
    try {
      const res = await fetch(
        "https://page-of-managerrrr.vercel.app/api/notes",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            date: new Date()
              .toLocaleString("ru", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
              .replace(/\s*г\./, ""),
            timeInMilliseconds: Date.UTC(
              new Date().getFullYear(),
              new Date().getMonth() + 1,
              new Date().getDate(),
              0,
              0,
              0
            ),
          }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          textOfFeedback: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setForm(values);
          setIsSubmitting(!isSubmitting);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="form">
            <div className="row">
              <Field
                name="name"
                className="form-input-name"
                placeholder="Имя"
                type="text"
              />
              {errors.name && touched.name ? (
                <div className="error">{errors.name}</div>
              ) : null}
            </div>
            <div className="row">
              <Field
                name="textOfFeedback"
                as="textarea"
                className="form-textarea"
                placeholder="Отзыв"
                type="text"
                value={values.textOfFeedback || ""}
              />
              {errors.textOfFeedback && touched.textOfFeedback ? (
                <div className="error">{errors.textOfFeedback}</div>
              ) : null}
            </div>
            <button type="submit" className="form-btn">
              Написать консультанту
            </button>
          </Form>
        )}
      </Formik>
      <style jsx>
        {`
          .form-btn {
            width: 62%;
            min-height: 43px;
            background: #fdd639;
            border-radius: 23px;
            border: none;
            outline: none;
            font-weight: 600;
            font-size: 22px;
            line-height: 21px;
            cursor: pointer;
            padding: 15px 0px;
            align-self: center;
          }
          .error {
            font-family: "Open Sans", sans-serif;
            color: red;
          }
          .row {
            margin-bottom: 23px;
            width: 100%;
            padding: 0;
          }
          @media only screen and (max-width: 660px) {
            .form-btn {
              font-size: 20px;
              line-height: 18px;
            }
          }
          @media only screen and (max-width: 600px) {
            .form-btn {
              font-size: 18px;
              line-height: 17px;
            }
          }
          @media only screen and (max-width: 540px) {
            .row {
              margin-bottom: 18px;
            }
            .form-btn {
              font-size: 16px;
              line-height: 17px;
              padding: 15px 15px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          .form {
            display: flex;
            flex-direction: column;
            padding-top: 28px;
            padding-bottom: 34px;
          }
          .form-input-name,
          .form-textarea {
            background: #ffffff;
            border: 1px solid #000000;
            border-radius: 1px;
            outline: none;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            font-size: 20px;
          }
          .form-input-name {
            height: 50px;
          }
          .form-textarea {
            height: 100px;
            resize: none;
            padding: 10px 20px;
            box-sizing: border-box;
          }
          .row textarea {
            font-size: 20px;
            font-family: "Open Sans", sans-serif;
          }
          ::-webkit-input-placeholder {
            font-size: 20px;
            color: #808080;
            font-family: "Open Sans", sans-serif;
          }
          ::-moz-placeholder {
            font-size: 20px;
            color: #808080;
            font-family: "Open Sans", sans-serif;
          }
          :-moz-placeholder {
            font-size: 20px;
            color: #808080;
            font-family: "Open Sans", sans-serif;
          }
          :-ms-input-placeholder {
            font-size: 20px;
            color: #808080;
            font-family: "Open Sans", sans-serif;
          }
          @media only screen and (max-width: 660px) {
            .row textarea {
              font-size: 18px;
            }
            ::-webkit-input-placeholder {
              font-size: 18px;
            }
            ::-moz-placeholder {
              font-size: 18px;
            }
            :-moz-placeholder {
              font-size: 18px;
            }
            :-ms-input-placeholder {
              font-size: 18px;
            }
            .form-input-name,
            .form-textarea {
              font-size: 18px;
            }
          }
          @media only screen and (max-width: 600px) {
            .row textarea {
              font-size: 16px;
            }
            ::-webkit-input-placeholder {
              font-size: 16px;
            }
            ::-moz-placeholder {
              font-size: 16px;
            }
            :-moz-placeholder {
              font-size: 16px;
            }
            :-ms-input-placeholder {
              font-size: 16px;
            }
            .form-input-name,
            .form-textarea {
              font-size: 16px;
            }
          }
          @media only screen and (max-width: 540px) {
            .form-input-name {
              height: 30px;
            }
            .form-textarea {
              height: 80px;
              padding: 10px 20px;
              box-sizing: border-box;
            }
            .row textarea {
              font-size: 14px;
            }
            ::-webkit-input-placeholder {
              font-size: 14px;
            }
            ::-moz-placeholder {
              font-size: 14px;
            }
            :-moz-placeholder {
              font-size: 14px;
            }
            :-ms-input-placeholder {
              font-size: 14px;
            }
            .form-input-name,
            .form-textarea {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
};
export default form;
