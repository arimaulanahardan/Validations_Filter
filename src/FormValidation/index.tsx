import FormValidations from "./components/FormValidation";
import ButtonPath from "./components/Path";

interface IFormValidationProps {}

const FormValidation: React.FC<IFormValidationProps> = () => {
  return (
    <div>
      <ButtonPath />
      <FormValidations />
    </div>
  );
};

export default FormValidation;
