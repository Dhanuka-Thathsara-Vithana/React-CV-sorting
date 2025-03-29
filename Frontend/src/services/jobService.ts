import APIClient from "./ApiClient";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_JOBS } from '../constants/cache';

export interface JobProps {
    _id: number,
    image: string,
    title: string,
    pubDate: string,
    des1: string,
    des2: string
  }

const apiClient = new APIClient<JobProps>('api/jobCard') 

const useJobs = () => {
    return useQuery<JobProps[], Error>({
        queryKey: CACHE_KEY_JOBS,
        queryFn: apiClient.getAll,
        staleTime: 1000 * 60 * 5, 
    })
}

export default useJobs;