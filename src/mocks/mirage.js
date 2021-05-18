import { createServer } from "miragejs"
import currentprice from "./data/currentprice"
import { getCurrent }from "./data/currentprices"
import supportedCurrencies from "./data/supportedCurrencies"
export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = 'api';
      this.get("/currentprice", () => {
        return currentprice
      },{ timing: 1000 })
      this.get("/supported-currencies", () => {
        return supportedCurrencies
      },{ timing: 1000 })
      this.get("/currentprice/:id", (schema,request) => {
        return getCurrent(request.params.id)
      },{ timing: 100 })
    },
  })

  return server
}
