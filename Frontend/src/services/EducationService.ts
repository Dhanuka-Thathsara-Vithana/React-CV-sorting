import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "./ApiClient";
import { CACHE_KEY_EDU } from "../constants/cache";

export interface EduProps {
  _id?: string,
  Institution: string,
  Major:string,
  Degree: string,
  from: string,
  to: string | null,
  Description: string,
  userID?: string,
}

const apiClient = new APIClient<EduProps>("api/education");

const useEducation = (Id: string) => {
    return useQuery<EduProps[], Error>({
        queryKey: [CACHE_KEY_EDU, Id],
        queryFn: () => apiClient.getById(Id).then(result => [result].flat()),
        staleTime: 1000 * 60 * 5, 
    });
};

const useEduDelete = (_id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (_id: string) => apiClient.delete(_id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_KEY_EDU] });
        },
    });
};

const useCreateEducation = (_newEdu: EduProps) => {
    const queryClient = useQueryClient();
   
    return useMutation({
        mutationFn: (_newEdu: EduProps) => apiClient.create(_newEdu),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_KEY_EDU] });
        },
    });
}

export { useEducation, useEduDelete, useCreateEducation };
