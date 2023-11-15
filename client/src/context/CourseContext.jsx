import { createContext, useEffect, useState } from "react";
import axios, { toFormData } from 'axios';

export const CourseContext = createContext();


function CourseProvider({children}) {
  const [student , setStudent] = useState({})
  const [register , setRegister] = useState([])
  const [withdraw , setWithdraw] = useState([])
  const [total , setTotal] = useState({})

  const handleApipost = async() => {
    console.log(total);
    try {
      const response = await axios.post('http://localhost:8080/api/student/createRequest', total);
      console.log('Response:', response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show an error message
    }
  }

  useEffect(()=> {
     handleData()
  }, [student,register,withdraw])

  // useEffect(()=>{
  //   console.log(total);
  // }, [total])

  const handleData =  () =>  {
    setTotal({
      ...student,
      ["register"] : register,
      ["withdraw"] : withdraw
    })
  }

  // useEffect(()=>{
  //   console.log(total);
  // },[total])

  const value = {
    student,
    setStudent,
    register,
    setRegister,
    withdraw,
    setWithdraw,
    setTotal,
    handleData,
    handleApipost
  }

  return (
    <CourseContext.Provider value={value}>
       {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider;
