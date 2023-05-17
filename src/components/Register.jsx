import React from 'react'
import { useFormik } from 'formik'
import { RegisterSchema } from '../schemas'
const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    address: '',
}
const Register = () => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema: RegisterSchema,
        onSubmit: (values,action) => {
            console.log(values)
            action.resetForm()
        }
    })
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-3 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md">
                        <div>
                            <h1 className="text-2xl font-semibold">Register In Client User </h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form action='onSubmit' onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                <div className='flex'>
                                    <div className="relative">
                                        <input  id="name" name="name" type="name" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                        {errors.name && touched.name ? <p className='text-red-600 text-sm'>{errors.name}</p> : null}
                                    </div>
                                    <div className="relative ml-2">
                                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        {errors.email && touched.email ? <p className='text-red-600 text-sm'>{errors.email}</p> : null}
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="relative">
                                        <input value={values.password} onChange={handleChange} onBlur={handleBlur} autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        {errors.password && touched.password ? <p className='text-red-600 text-sm'>{errors.password}</p> : null}
                                    </div>
                                    <div className="relative ml-2">
                                        <input value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} autoComplete="off" id="confirmPassword" name="confirmPassword" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Confirm Password" />
                                        <label htmlFor="confirmPassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
                                        {errors.confirmPassword && touched.confirmPassword ? <p className='text-red-600 text-sm'>{errors.confirmPassword}</p> : null}
                                    </div>
                                </div>
                                <div className="relative">
                                    <input value={values.image} onChange={handleChange} onBlur={handleBlur} autoComplete="off" id="image" name="image" type="file" className="mt-5 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Image" />
                                    <label htmlFor="image" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Profile image</label>
                                </div>
                                <div className="relative">
                                    <input value={values.address} onChange={handleChange} onBlur={handleBlur} autoComplete="off" id="address" name="address" type="text" className="mt-5 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Address" />
                                    <label htmlFor="address" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Address</label>
                                    {errors.address && touched.address ? <p className='text-red-600 text-sm'>{errors.address}</p> : null}

                                </div>
                                <div className="relative">
                                    <button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register