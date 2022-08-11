import { useEffect, useState } from "react";
const useFetch = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        const responce = await fetch(URL);
        const resData = await responce.json();
        setContacts(resData);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  return [contacts, setContacts];
};

export default useFetch;
