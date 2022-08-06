import { useEffect, useState } from "react";
const useFetch = () => {
    const [apiItems, setApiItems] = useState([]);
  
    useEffect(() => {
      const URL = "https://jsonplaceholder.typicode.com/users";
  
      const fetchData = async () => {
        try {
          const responce = await fetch(URL);
          const resData = await responce.json();
          setApiItems(resData);
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchData();
    }, []);
    return [apiItems ];
  };
  
  export default useFetch;