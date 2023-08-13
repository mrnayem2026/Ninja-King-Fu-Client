
import axios from 'axios';


const useAxiosSecure = () => {

  const axiosSecure = axios.create({
    baseURL: 'https://ninja-kung-fu-server.vercel.app', 
  });

  

  return [axiosSecure];
};

export default useAxiosSecure;


// https://ninja-kung-fu-server\.vercel\.app