import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true, // This enables sending cookies with requests
});

// Add request interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If the error is 401 and we haven't already tried to refresh
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Call the refresh token endpoint
        await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh-token`, {
          withCredentials: true
        });
        
        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If refresh fails, redirect to login
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = () => {
       return axiosInstance.get<T[]>(this.endpoint).then(res => res.data);
    }

    create = (data: T) => {
        return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
    }

    update = (id: string, data: T) =>  {
        return axiosInstance.put<T>(`${this.endpoint}/${id}`, data).then(res => res.data);
    }

    delete = (id: string) =>  {
        return axiosInstance.delete(`${this.endpoint}/${id}`).then(res => res.data);
    }

    getById = (id: string) => {
        return axiosInstance.get<T>(`${this.endpoint}/${id}`).then(res => res.data);
    }
}

export default APIClient;