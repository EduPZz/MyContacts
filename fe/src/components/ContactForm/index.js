import { Form, ButtonContainer } from "./styles";

import PropTypes from "prop-types";

import FormGroup from "../FormGroup";
import Input from "../Input.js";
import Select from "../Select.js";
import Button from "../Button.js";

export default function ContactForm({ buttonlabel }){
  return (
    <Form>

      <FormGroup>
        <Input placeholder="Nome"/>
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail"/>
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone  "/>
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonlabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.ProtoTypes = {
  buttonlabel: PropTypes.string.isRequired,
};
