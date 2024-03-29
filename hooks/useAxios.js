import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

 export const useAxios = (url) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  // created style for toaseter
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const config = {
    headers: {
      "Content-Type": "Application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(url);
  }, [url]);

  const postData = async (url,values) => {
    try {
      const res = await axios.post(url,
        JSON.stringify(values),
        config
      );
      Toast.fire({
        icon: "success",
        title: `Submitted.`,
      });
      console.log('data is :  ',res)
    } catch (err) {
      Toast.fire({
        icon: "error",
        title: `${t(`${err.response.data.data.errorCode}`)}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {postData }
};



