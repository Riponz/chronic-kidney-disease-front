import React, { useState } from 'react'
import kidney from "./../Utilities/kidney.jpg"
import axios from 'axios'

function Home() {
  const [bp, setBp] = useState()
  const [albumin, setAlbumin] = useState()
  const [urea, setUrea] = useState()
  const [creatinine, setCreatinine] = useState()
  const [sodium, setSodium] = useState()
  const [pottash, setPottash] = useState()
  const [haemo, setHaemo] = useState()
  const [wbcc, setWbcc] = useState()
  const [rbcc, setRbcc] = useState()
  const [highbp, setHighbp] = useState()
  const [loading, setLoading]= useState(false)

  const [prediction, setPrediction] = useState("Enter your test scores to view your result!")

  const handleBp = (e) => {
    setBp(e.target.value)
  }

  const handleAlbumin = (e) => {
    setAlbumin(e.target.value)
  }
  const handleUrea = (e) => {
    setUrea(e.target.value)
  }
  const handleCreatinine = (e) => {
    setCreatinine(e.target.value)
  }
  const handleSodium = (e) => {
    setSodium(e.target.value)
  }
  const handlePottash = (e) => {
    setPottash(e.target.value)
  }
  const handleHaemo = (e) => {
    setHaemo(e.target.value)
  }
  const handleWbcc = (e) => {
    setWbcc(e.target.value)
  }
  const handleRbcc = (e) => {
    setRbcc(e.target.value)
  }
  const handleHighbp = (e) => {
    setHighbp(e.target.value)
  }

  const url = "https://chronic-kidney-disease-pred.onrender.com/chronic-kidney"
  const handleRequest = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios.post(url, {
  //     "bp":76,
  //     "albumin":1,
  //     "urea":176.0,
  //     "creatinine": 13.8,
  //     "sodium":136.00,
  //     "potas":4.50,
  //     "haemo":8.6,
  //     "wbcc":13200,
  //     "rbcc":2.7,
  //     "hbp":1
  // }
  // {
      bp, albumin, urea, creatinine, sodium, pottash, haemo, wbcc, rbcc, highbp
    }
    ).then(res => {
      res.data.class?   setPrediction("You have chronic disease. Consult a doctor!"):setPrediction("You're safe but must take care of yourself!")
      console.log(prediction)
    })
    setLoading(false)
  }


  return (
    <>
      <div className='w-full bg-[#97E1FE] overflow-hidden md:overflow-visible flex justify-evenly md:flex-col items-center md:h-fit md:pt-[5rem] h-[100vh]'>
        <div><form className='form bg-red-200 p-10 flex  flex-col w-[26rem] h-[35rem] justify-evenly items-center ' action="">
          <input onChange={handleBp} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Blood Pressure' type="text" />
          <input onChange={handleAlbumin} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Albumin' type="text" />
          <input onChange={handleUrea} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Blood Urea' type="text" />
          <input onChange={handleCreatinine} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Serum Creatinine' type="text" />
          <input onChange={handleSodium} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Sodium' type="text" />
          <input onChange={handlePottash} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Pottasium' type="text" />
          <input onChange={handleHaemo} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Haemoglobin' type="text" />
          <input onChange={handleWbcc} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='white Blood Cells Count' type="text" />
          <input onChange={handleRbcc} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Red BloodCells Count(in Millions e.g. 1.5)' type="text" />
          <input onChange={handleHighbp} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Hypertention' type="text" />
          <input onClick={handleRequest} className='p-2 bg-blue-100 rounded-lg w-[90%] mt-[1rem]' type="submit" value="Predict" />
        <div className="py-3 prediction font-bold">{loading?"Loading, Please Wait!": prediction}</div>
        </form>
        </div>
        <div className="image">
          <img className='w-[30rem]' src={kidney} alt="kidney-vector" />
        </div>
      </div>
    </>
  )
}

export default Home