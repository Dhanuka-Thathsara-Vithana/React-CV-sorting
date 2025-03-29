import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "./ApiClient";
import { CACHE_KEY_WORK } from "../constants/cache";

export interface WorkProps {
    Description: string;
    _id: string;
    Title: string;
    Company: string;
    OfficeLocation: string;
    from: string;
    to: string;
}

const apiClient = new APIClient<WorkProps[]>("api/work");

const useWork = (Id: string) => {
    return useQuery<WorkProps[], Error>({
        queryKey: [CACHE_KEY_WORK, Id],
        queryFn: () => apiClient.getById(Id).then(result => [result].flat()),
        staleTime: 1000 * 60 * 5, 
    });
};

const useWorkDelete = (_id: string) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (_id: string) => apiClient.delete(_id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CACHE_KEY_WORK] });
        },
    });
};

export { useWork, useWorkDelete };
