import { useFormik } from "formik";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { CreateEmployeeForm, CreateEmployeeWrapper } from "./style";
import type { FormikTypesInput } from "./type";
import * as Yup from "yup";



function Employee(){
    const schema = Yup.object().shape({
        name:Yup.string()
        .required("Field name is required")
        .min(2,"min 2 symbols")
        .max(50,"max symbols 50"),
        surname:Yup.string()
        .required("Field surname is required")
        .max(15,"max 15 symbols"),
        age:Yup.number()
        .required()
        .min(18,"min age 18")
        .max(80,"max age 80"),
        jobPosition:Yup.string()
        .max(30,"max 30 symbols")

    })
 const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: 0,
      jobPosition: ""
    } as FormikTypesInput,

    // validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values: FormikTypesInput): void => {
      console.log(values);
    },
    })
    console.log(formik);
    

    return(
        <CreateEmployeeWrapper>
            <CreateEmployeeForm onSubmit={formik.handleSubmit} >
                <Input
                name="name"
                type="text"
                label="Name"
                placeholder="John"
                value={formik.values.name}
                onChange={formik.handleChange}
                />
                 <Input
                name="surname"
                label="Surname"
                type="text"
                placeholder="Johnson"
                value={formik.values.name}
                onChange={formik.handleChange}
                />
                 <Input
                name="age"
                label="Age"
                placeholder="25"
                type="number"
                value={formik.values.age}
                onChange={formik.handleChange}
                />
                 <Input
                name="jobposition"
                label="Job Position"
                placeholder="QA"
                type="text"
                value={formik.values.jobPosition}
                onChange={formik.handleChange}
                />
                <Button name="Create" type="submit" onClick={()=>{}} />
            </CreateEmployeeForm>
        </CreateEmployeeWrapper>
    )
}