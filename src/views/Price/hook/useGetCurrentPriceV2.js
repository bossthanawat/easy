import axios from "axios";
import { useEffect, useState } from "react";

const Price = (code) => {
  const [bpi, setBpi] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: ` /api/currentprice` + code,
    }).then(({ data }) => {
      setBpi(Object.values(data.bpi));
      setDate(data.time.updated);
    });
  }, [code]);



  return { bpi, count: bpi.length, date };
};

export default Price;
