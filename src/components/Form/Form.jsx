
import { useState } from "react";
import "./Form.css";
import FormContent from './FormContent';
import Button from './Button';

const Form = ({ getFormTask }) => {
  const [formData, setFormData] = useState({
    name: "",
    body: "",
  });

  const [visible, setVisible] = useState(false);

  const setInputValue = (e, prop) => {
    setFormData((prevState) => ({
      ...prevState,
      [prop]: e.target.value,
    }))
  }

  const onClickVisible = () => {
    setVisible(true);
  }

  const onClickCancel = () => {
    setVisible(false);
  }

  const onInputChange = (e) => {
    setInputValue(e, e.target.name)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(1);
    getFormTask(formData.name, formData.body);
    setFormData({
      name: "",
      body: "",
    })
  }

  return (
    <form className="form-item" onSubmit={onFormSubmit}>
      {visible ?
        <FormContent
          onInputChange={onInputChange}
          formData={formData}
          onClickCancel={onClickCancel} /> :
        <Button onClickVisible={onClickVisible} />}
    </form>
  )
}

export default Form;