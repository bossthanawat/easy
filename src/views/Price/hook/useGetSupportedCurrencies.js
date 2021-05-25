import axios from "axios";
import { useEffect, useState } from "react";

const Price = () => {
  const [option, setOption] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/supported-currencies`,
    }).then(({ data }) => {
      setOption(data)
    });
  }, []);

  return option;
};

export default Price;
