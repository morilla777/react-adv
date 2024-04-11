import { Product } from "./Product";
import { OnChangeArgs } from "./OnChangeArgs";
import { InitialValues } from "./InitialValues";

export interface UseProductArgs {
    product: Product;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}