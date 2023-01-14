import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username required!')
        .min(3, 'Username min 3 letters'),
    email: yup
        .string()
        .email('Email must be valid')
        .required('Email required!'),
    password: yup
        .string()
        .required('Password Required!')
        .min(6, 'Password min 6 letters'),
    tos: yup
        .boolean()
        .oneOf([true], 'Accept Terms')            
})

export default formSchema