import * as Yup from "yup"

export const RegisterSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your Name"),
    email: Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(3).required("Please enter your Password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password Must match"),
    address: Yup.string().min(2).required("Please enter your Address"), 
})
export const  loginSchema = Yup.object({
    email:Yup.string().email().required("Please enter your Email"),
    password: Yup.string().min(3).required("Please enter your Password"),
})