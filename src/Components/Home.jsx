import React, { useState } from 'react'
import kidney from "./../Utilities/kidney.jpg"
import axios from 'axios'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Tooltip } from '@mui/material'

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
  const [loading, setLoading] = useState(false)

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

  const handlePrediction = (pred) => {
    console.log(pred)
    if (pred==0) {
      setPrediction("You're safe but must take care of yourself!")
      
    } else {
      setPrediction("You have chronic disease. Consult a doctor!")
      
    }
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
      handlePrediction(res?.data?.class)
    })
    setLoading(false)
  }


  return (
    <>
      <div className='w-full bg-[#97E1FE] flex justify-evenly md:flex-col items-center md:h-fit h-[90vh]'>
        <div><form className='form bg-red-200 p-10 md:p-3 flex  flex-col md:w-[22rem] w-[32rem] h-[36rem] md:h-[42rem] justify-evenly items-center ' action="">

          <div className='flex justify-evenly w-full items-center'>
            <Tooltip arrow title="Enter your blood pressure reading as a single number (e.g., 120 mmHg). Normal range: 90-120 mmHg. If you have systolic and diastolic readings, use the average."><HelpOutlineIcon size="small" /></Tooltip>
            <TextField onChange={handleBp} size="small" margin="normal" helperText="e.g., 110 mmHg" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Blood Pressure" variant="outlined" />
            <TextField onChange={handleAlbumin} size="small" margin="normal" helperText="e.g., 4.0 g/dL" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Albumin" variant="outlined" />
            <Tooltip arrow title="Input the amount of protein albumin in your urine in g/dL. Normal range: 3.5-5 g/dL."><HelpOutlineIcon size="small" /></Tooltip>
          </div>


          <div className='flex justify-evenly w-full items-center'>
            <Tooltip arrow title="Indicate the concentration of urea nitrogen in your blood in mg/dL. Normal range: 7-20 mg/dL."><HelpOutlineIcon size="small" /></Tooltip>
            <TextField onChange={handleUrea} size="small" margin="normal" helperText="e.g., 15 mg/dL" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Blood Urea" variant="outlined" />
            <TextField onChange={handleCreatinine} size="small" margin="normal" helperText="e.g., 0.9 mg/dL" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Creatinine" variant="outlined" />
            <Tooltip arrow title="Indicate your serum creatinine level in mg/dL. Normal range: Male (0.6-1.2 mg/dL), Female (0.5-1.1 mg/dL)."><HelpOutlineIcon size="small" /></Tooltip>
          </div>


          <div className='flex justify-evenly w-full items-center'>
            <Tooltip arrow title="Specify your blood sodium level in mEq/L. Normal range: 135-145 mEq/L."><HelpOutlineIcon size="small" /></Tooltip>
            <TextField onChange={handleSodium} size="small" margin="normal" helperText="e.g., 140 mEq/L" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Sodium" variant="outlined" />
            <TextField onChange={handlePottash} size="small" margin="normal" helperText="e.g., 4.2 mmol/L" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Potassium" variant="outlined" />
            <Tooltip arrow title="Enter your blood potassium level in mmol/L. Normal range: 3.5-5.0 mmol/L."><HelpOutlineIcon size="small" /></Tooltip>
          </div>


          <div className='flex justify-evenly w-full items-center'>
            <Tooltip arrow title="Record your blood hemoglobin concentration in g/dL. Normal range: Male (13.8-17.2 g/dL), Female (12.1-15.1 g/dL)."><HelpOutlineIcon size="small" /></Tooltip>
            <TextField onChange={handleHaemo} size="small" margin="normal" helperText="e.g., 14.5 g/dL" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Haemoglobin" variant="outlined" />
            <TextField onChange={handleWbcc} size="small" margin="normal" helperText="e.g., 8000 cells/μL" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="White Blood Cells" variant="outlined" />
            <Tooltip arrow title="Provide the total count of white blood cells per μL. Normal range: 4,000-11,000 cells/μL."><HelpOutlineIcon size="small" /></Tooltip>
          </div>


          <div className='flex justify-evenly w-full items-center'>
            <Tooltip arrow title="Input the total count of red blood cells per μL. Normal range: Male (4.5-5.5 million cells/μL), Female (4.0-5.0 million cells/μL)."><HelpOutlineIcon size="small" /></Tooltip>
            <TextField onChange={handleRbcc} size="small" margin="normal" helperText="e.g., 5.2 M cells/μL" id="outlined-basic" className='w-[10rem] md:w-[6rem]' label="Red Blood Cells" variant="outlined" />
            <FormControl>
              <InputLabel id="hypertention">Hypertention</InputLabel>
              <Select
                labelId="hypertention"
                id="hypertention"
                className='w-[10rem] md:w-[6rem]'
                label="hypertention"
                onChange={handleHighbp}
              >
                <MenuItem value={1}>Yes</MenuItem>
                <MenuItem value={0}>No</MenuItem>
              </Select>
            </FormControl>
            <Tooltip arrow title="Answer 'Yes' if you have high blood pressure (above 130/80 mmHg); otherwise, enter 'No'."><HelpOutlineIcon size="small" /></Tooltip>
          </div>












          {/* <input onChange={handleBp} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Blood Pressure' type="text" />
          <input onChange={handleAlbumin} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Albumin' type="text" />
          <input onChange={handleUrea} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Blood Urea' type="text" />
          <input onChange={handleCreatinine} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Serum Creatinine' type="text" />
          <input onChange={handleSodium} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Sodium' type="text" />
          <input onChange={handlePottash} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Pottasium' type="text" />
          <input onChange={handleHaemo} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Haemoglobin' type="text" />
          <input onChange={handleWbcc} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='white Blood Cells Count' type="text" />
          <input onChange={handleRbcc} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Red BloodCells Count(in Millions e.g. 1.5)' type="text" />
          <input onChange={handleHighbp} className='bg-transparent placeholder-black py-2 w-[90%] outline-none border-b-2 border-black' placeholder='Hypertention' type="text" /> */}
          {/* <input onClick={handleRequest} className='p-2 bg-blue-100 rounded-lg w-[90%] mt-[1rem]' type="submit" value="Predict" /> */}
          <Button variant="contained" onClick={handleRequest}>Predict</Button>
          <div className="py-3 prediction md:text-sm">{loading ? "Loading, Please Wait!" : prediction}</div>
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