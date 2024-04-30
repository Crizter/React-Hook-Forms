import React, { useState } from 'react'

function App2() {

  // making useForm 
  const {
    register , 
    formstate,
    handleSubmit , 
    formState: { touchedFields, isDirty, isValid, dirtyFields, isSubmitted, errors },
    watch
  } = useForm() 
  const [data, setData ] = useState("")
  const [phone , setPhone] = useState("")
  const [email , setEmail ] = useState("")
  const onSubmit = (data) => {
      setData(data)
  }
  return (
    <div>
        <h1>hello world</h1>
    </div>
  )
}

export default App2

// enumeratoin, generic 