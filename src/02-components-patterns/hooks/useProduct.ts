import { useEffect, useRef, useState } from "react";
import { UseProductArgs } from "../interfaces/UseProductArgs";

export const useProduct = ( { onChange, product, value = 0}: UseProductArgs) => {

    const [ counter, setCounter ] = useState<number>(value);

    const isControlled = useRef( !!onChange );

    const increaseBy = ( val:number ) => {

        if( isControlled.current ){
            return onChange!({ count: val, product });
        }

        const newVal = Math.max( counter + val, 0 )
        
        //setCounter( prev => Math.max( prev + value, 0));
        setCounter( newVal );

        onChange && onChange({ count: newVal, product});
    }

    useEffect( () => {
        setCounter( value );
    },[value]);

    return {
        counter,
        increaseBy
    }

}