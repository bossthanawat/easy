import axios from "axios";
import { useEffect, useState } from "react";

const Price = () => {
  const [bpi, setBpi] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: ` /api/currentprice`,
    }).then(({ data }) => {
      setBpi(Object.values(data.bpi));
      setDate(data.time.updated);
    });
  }, []);

  const getAddCurrnet = (code) => {
    axios({
      method: "get",
      url: ` /api/currentprice/` + code,
    }).then(({ data }) => {
      setBpi([...bpi, data.bpi[code]]);
    });
  };

  const getAllAddCurrnet = (option) => {
    const result = async () => {
      const promises = option.map(async ({ currency }) => {
        const { data } = await axios({
          method: "get",
          url: ` /api/currentprice/` + currency,
        });
        return data.bpi[currency];
      });
      return await Promise.all(promises);
    };
    result().then((result) => setBpi(result));
  };

  return [{ bpi, count: bpi.length, date }, getAddCurrnet, getAllAddCurrnet];
};

export default Price;
