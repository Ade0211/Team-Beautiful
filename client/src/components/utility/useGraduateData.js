import { useState, useEffect } from "react";
import { get } from "axios";

const useGraduateData = () => {
  const [graduates, setGraduates] = useState([]);

  useEffect(function () {
    async function getGraduates() {
      try {
        const response = await get("/api/graduates");
        setGraduates(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getGraduates();
  }, []);
  return graduates;
};

export default useGraduateData;
