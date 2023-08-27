import { useEffect, useState } from "react";
import JobDecCard from "./JobDecCard";
import axios, { CanceledError } from 'axios';
import { Card } from "@mui/material";
import { useParams } from "react-router-dom";

interface JobDesProps{
  id: string,
  Img1: string
  Logo: string,
  Position: string,
  ComName: string,
  Rating: number,
  Reviews: number,
  Company: string,
  AboutCompany: string,
  Location: string,
  Des1: string,
  Duration: string,
  JobDec: string,
  Responsibilities: string,
  Qualifications: string,
  AdditionalInformation: string
}

function JobDec() {
  const params = useParams();

  const [jobDes, setJobDes] = useState<JobDesProps[]>([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // const savedId = localStorage.getItem('jobCardId');
    // if(savedId) { const parsedId = JSON.parse(savedId); 
    // console.log(parsedId)
    
    const controller = new AbortController();
    // const dataId = {parsedId}
    axios
      .post<JobDesProps[]>('http://localhost:5000/api/jobDescription', params)
      .then((res) => {
      setJobDes(res.data)
      // console.log(res.data)
      })
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message)
      });
      return () => controller.abort();
   
  }, [])
    console.log(jobDes);
 return (
    <>
   { jobDes &&
      <JobDecCard 
        id={jobDes.id} img1={jobDes.Img1} logo={jobDes.Logo} position={jobDes.Position} comName={jobDes.Des1}
        rating={jobDes.Rating} reviews={jobDes.Reviews} company={jobDes.Company} aboutCom={jobDes.AboutCompany}
        location={jobDes.Location} dec2={jobDes.Des1} duration={jobDes.Duration}
        jobDec={jobDes.JobDec} Responsibilities={jobDes.Responsibilities}
        additionalInformation={jobDes.AdditionalInformation} qualifications={jobDes.Qualifications} time={""} technology={undefined}    />
  }
  </>
 )
}
export default JobDec;
