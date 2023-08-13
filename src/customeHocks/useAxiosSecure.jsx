
import axios from 'axios';


const useAxiosSecure = () => {

  const axiosSecure = axios.create({
<<<<<<< HEAD
    baseURL: 'https://ninja-kung-fu-server.vercel.app', 
=======
    baseURL: 'http://localhost:3000', 
>>>>>>> 6e43a99 (Banner section upgrade all most done)
  });

  

  return [axiosSecure];
};

export default useAxiosSecure;


// https://ninja-kung-fu-server\.vercel\.app