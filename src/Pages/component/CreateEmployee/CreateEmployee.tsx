import { useFormik } from "formik";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { CreateEmployeeForm, PageWrapper } from "./style";
import type { FormikTypesInput } from "./types";
import * as Yup from "yup";
import { useContext } from "react";
import { InfoUser } from "../../../Components/Layout/Layout";
import { Navigate, useNavigate } from "react-router-dom";

function CreateEmployees() {
   const { onDataChange } = useContext(InfoUser);
   const navigate= useNavigate()
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Field name is required")
      .min(2, "min 2 symbols")
      .max(50, "max symbols 50"),
    surname: Yup.string()
      .required("Field surname is required")
      .max(15, "max 15 symbols"),
    age: Yup.number().required().min(18, "min age 18").max(80, "max age 80"),
    jobPosition: Yup.string().max(30, "max 30 symbols"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: 0,
      jobPosition: "",
    } as FormikTypesInput,

    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: FormikTypesInput): void => {
      // console.log(values);
      onDataChange(values)
      navigate("/employees")
    },
  });
  console.log(formik);

  return (
    <PageWrapper>
      <CreateEmployeeForm onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Name"
          placeholder="John"
          value={formik.values.name}
          onChange={formik.handleChange}
            error={formik.errors.name}
        />
        <Input
          name="surname"
          label="Surname"
          type="text"
          placeholder="Johnson"
          value={formik.values.surname}
          onChange={formik.handleChange}
            error={formik.errors.surname}
        />
        <Input
          name="age"
          label="Age"
          placeholder="25"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
            error={formik.errors.age}
        />
        <Input
          name="jobPosition"
          label="Job Position"
          placeholder="QA"
          type="text"
          value={formik.values.jobPosition}
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
        />
        <Button name="Create" type="submit" />
      </CreateEmployeeForm>
    </PageWrapper>
  );
}
export default CreateEmployees;
