import React from "react"
import { Formik, Form, Field } from "formik"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormComponent = () => {
	return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={(values, actions) => {
				fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: encode({ "form-name": 'contact', ...values }),
				})
				.then(() => {
					actions.resetForm()
					actions.setStatus({
						sent: true,
						values,
					})
				})
				.catch((error) => {
					actions.setStatus({
						sent: false,
						error,
					})
				})
				.finally(() => actions.setSubmitting(false))
			}}
    >
      {({ status }) => {
        if (status && status.sent === true) {
          return (
            <div>Vielen Dank für Ihre Nachricht</div>
          )
        } else {
          return (
            <Form name="contact" data-netlify={true}>
              <div className="form-group clearfix">
                <div className="input">
                  <label htmlFor="name">Name</label>
                  <Field id="name" name="name" type="text" placeholder="Name" className="form-control" />
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="input">
                  <label htmlFor="email">E-Mail</label>
                  <Field id="email" name="email" type="text" placeholder="E-Mail" className="form-control" />
                </div>
              </div>
              <div className="form-group clearfix">
                <div className="input">
                  <label htmlFor="message">Nachricht</label>
                  <Field id="message" name="message" component="textarea" placeholder="Nachricht" className="form-control" rows="8" />
                </div>
              </div>
              <button className="btn btn-sm" type="submit">
                Senden
              </button>
            </Form>
          )
        }
      }}
    </Formik>
	)
};

export default FormComponent