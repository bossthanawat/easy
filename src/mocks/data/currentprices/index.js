import AED from "./AED"
import AFN from "./AFN"
import ALL from "./ALL"
import AMD from "./AMD"
import BGN from "./BGN"
import BTC from "./BTC"
import EUR from "./EUR"
import GBP from "./GBP"
import HRK from "./HRK"
import IDR from "./IDR"
import JPY from "./JPY"
import THB from "./THB"
import USD from "./USD"

export {
  AED,
  AFN,
  ALL,
  AMD,
  BGN,
  BTC,
  EUR,
  GBP,
  HRK,
  IDR,
  JPY,
  THB,
  USD
}

export const getCurrent = (id) => {
  if(id==="AED") return AED
  if(id==="AFN") return AFN
  if(id==="ALL") return ALL
  if(id==="AMD") return AMD
  if(id==="BGN") return BGN
  if(id==="BTC") return BTC
  if(id==="EUR") return EUR
  if(id==="GBP") return GBP
  if(id==="HRK") return HRK
  if(id==="IDR") return IDR
  if(id==="JPY") return JPY
  if(id==="THB") return THB
  if(id==="USD") return USD
}