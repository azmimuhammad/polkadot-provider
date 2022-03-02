import { mockFunction } from "../../../mock";
import { returnToHumanMockWithParam } from "../../../@polkadot-types.mock";

export const orders = {
  lastOrderByCustomer(param) {
    return mockFunction(param);
  },
  orders(param) {
    return returnToHumanMockWithParam(param);
  }
}
