import { AddressContext } from "./AddressContext";
import { CustomerContext } from "./CustomerContext";
import { ErrorContext } from "./ErrorContext";
import { SCContext } from "./shoppingCartContext";
import { Identificators } from "./Identificators";

export const contexts: any[] = [ 
  ErrorContext, 
  AddressContext,
  CustomerContext,
  SCContext 
]

export { 
  Identificators
};
