import React from 'react'
import {Formik, Form, Field} from 'formik'

const Main = (props) => {
    let submit = async(values, {setSubmitting, resetForm}) => {
        await props.sendMailThunk(values)
        resetForm({values: ''})
        setSubmitting(false)
        props.history.push('/t')
    }
    return (
        <div className="main">
            {props.loading ? <div className="preloader"><span></span></div> : undefined}
            <div className="container">
                <div className="main__body">
                    <div className="main__title"><span>DYoung</span> QR</div>
                    <div className="main__subtitle">Пиши свої ідеї та скарги<br />(можна анонімно)</div>
                    <Formik onSubmit={submit} initialValues={{name: '', message: ''}}>
                        {(isSubmitting) => (
                            <Form autoComplete="off" className="main__form">
                                <Field name="name" type="text" placeholder="Ім’я (не обов’язково)" />
                                <Field as="textarea" name="message" placeholder="Повідомлення" />
                                <button type="submit" className="main__btn">Відправити</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Main