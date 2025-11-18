import * as Yup from "yup";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useFormik } from "formik";
import { CheckBox, FormWrapper } from "./style";
import type { EmployeeFormValues } from "./type";

function EmployeeForm() {
  const shema = Yup.object().shape({
    fullName: Yup.string()
      .required("Field full name is requaired")
      .min(5, "min 5 symbol")
      .max(50, "max 50 symbol"),
    age: Yup.number()
      .required("Fireld age is required")
      .min(18, "min age 18")
      .max(80, "max age 80"),
    job_title: Yup.string().optional().max(30, "Max symbol 30"),
    checkbox: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: 0,
      job_title: "",
      checkbox: false,
    } as EmployeeFormValues,
    validationSchema: shema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues): void => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <Input
        name="fullName"
        label="full name"
        type="text"
        placeholder="enter your full Name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        error={formik.errors.fullName}
      />
      <Input
        name="age"
        label="age"
        type="number"
        placeholder="enter your age"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <Input
        name="job_title"
        label="job title"
        type="text"
        placeholder="enter your job title"
        value={formik.values.job_title}
        onChange={formik.handleChange}
        error={formik.errors.job_title}
      />
      <CheckBox>
        <Input
          name="checkbox"
          label="i agree terms"
          type="checkbox"
          onChange={formik.handleChange}
        />
      </CheckBox>
      <Button name="Create" type="submit" />
    </FormWrapper>
  );
}
export default EmployeeForm;
