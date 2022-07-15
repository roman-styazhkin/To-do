import { uid } from 'uid';
import { useState } from "react";
import "./Form.css";
import FormContent from './FormContent';
import Button from './Button';

const Form = ({ getFormTask }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    body: "",
  });

  const [visible, setVisible] = useState(false);

  const setInputValue = (e, prop) => {
    setFormData((prevState) => ({
      ...prevState,
      id: uid(16),
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
    getFormTask(formData)
  }

  return (
    <form className="form-item" onSubmit={onFormSubmit}>
      {visible ? <FormContent onInputChange={onInputChange} onClickCancel={onClickCancel} /> :
        <Button onClickVisible={onClickVisible} />}
    </form>
  )
}

export default Form;