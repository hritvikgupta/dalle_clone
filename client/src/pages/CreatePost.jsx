import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {preview} from "../assets"
import {getRandomPrompt} from "../utils"
import {FormField,Loader} from "../components"
const CreatePost = () => {
  const Navigate = useNavigate();
  const [form,setForm] = useState({
    name:"",
    prompt:"",
    photo:""
  });
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(form.prompt && form.photo)
    {
      setLoading(true)
      try{
        const response = await fetch("http://localhost:8080/api/v1/post",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(form)
        })
        // console.log(form)
        await response.json()
        Navigate('/')
      }catch(error){
          setLoading(false)

      }
    }
    else{
      alert("Please enter a prompt and generate the image")
    }

  }
  const handleChange = (e) =>{
      setForm({...form, [e.target.name]:e.target.value})
  }
  const handleSupriseMe = ()=>{
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({...form, prompt:randomPrompt})
  }

  const generateImage = async (e) => {
    e.preventDefault();
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: data.photo });
      } catch (err) {
        alert('An error occurred:', err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide a proper prompt');
    }
  };

  return (
  <section className='max-w-7xl flex flex-col justify-center items-center mx-auto'> 
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create
        </h1>
        <p className='mt-2 mx-auto text-[#666e75] text-[16px] max-w-[500px]'>
          Create Imaginative and Visually Stunning images through DALL-E AI and share with community

        </p>
      </div>

      <form className='mt-16 flex flex-col justify-center items-center max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
          labelName = "Your Name"
          type = "text"
          name = "name"
          placeholder = "john doe"
          value = {form.name}
          handleChange ={handleChange}/>
          <FormField
           labelName="Prompt"
           type="text"
           name="prompt"
          placeholder = "astronaut encountering an alien life form on a distant planet, photography"
          value = {form.prompt}
          handleChange ={handleChange}
          isSupriseMe
          handleSupriseMe = {handleSupriseMe}/>

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blur-500 focus:border-blur-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img src = {form.photo}
              alt = {form.photo}
              className='w-full h-full object-contain'/>
              ) : (
                <img 
                src = {preview}
                alt = "preview"
                className='w-9/12 h-9/12 object-contain opacity-40'
                />
              )}

              {
                generatingImg && (
                  <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                    <Loader/>
                    </div>
                )
              }
          </div>
        
        </div>
        <div className='mt-5 flex gap-5'>
          <button
          className='text-white bg-green-700 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          type= "submit"
          onClick={generateImage}>
          {generatingImg? "Generating... " : "Generate"}
          </button>
        </div>   
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>

      </form>
  </section>
  )
}

export default CreatePost