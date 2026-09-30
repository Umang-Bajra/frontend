import {useState} from 'react'
import type{FormEvent} from 'react'
function CreateUserPage(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');
    const [password,setPassword]=useState('');
    //state to handle states to promise
    const[error,setError]=useState('')//for error.catch
    const [isSubmitting,setIsSubmitting]=useState(false) //for pend
    const [isCreated,setIsCreated]=useState(false)// for the success

    const handleSubmit=async (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        setError('')
        setIsSubmitting(true)
    
        //real api call
        try{
            const response = await fetch('/api/create/user',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({name,email,age:age?Number(age):undefined,password}),
            })
            const result = await response.json()

            if(!response.ok)throw new Error(result.error || 'Unable to create user')
            setIsCreated(true)
        }catch(requestError){
            setError(requestError instanceof Error ? requestError.message:'Unable to create user')
        }finally{
            setIsSubmitting(false)
        }
    }
    return(
        <>


       <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
    
    <h2 className="mb-6 text-center text-2xl font-bold">
      Login
    </h2>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5">
      
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Name</label>
        <input
          type="text"
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      {/* Age */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Age</label>
        <input
          type="number"
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-2 rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
        Login
      </button>

    </form>
  </div>
</div>

        </>
    )
}
export default CreateUserPage