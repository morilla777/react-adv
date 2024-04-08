import { Product } from "./Product";
import { OnChangeArgs } from "./OnChangeArgs";

export interface UseProductArgs {
    product: Product;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}