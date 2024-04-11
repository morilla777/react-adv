import { useEffect, useRef, useState } from "react";
import { UseProductArgs } from "../interfaces/UseProductArgs";

export const useProduct = ( { onChange, product, value = 0, initialValues }: UseProductArgs ) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count ?? value );
    const isMounted = useRef(false);

    console.log(initialValues?.count);

    const increaseBy = ( val:number ) => {

        const newVal = Math.min( Math.max( counter + val, 0 ), initialValues?.maxCount ?? Number.MAX_VALUE );

        setCounter( newVal );

        onChange && onChange({ count: newVal, product});
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    useEffect( () => {
        if( !isMounted.current ) return;

        setCounter( value );
    },[value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {
        counter,
        increaseBy,
        reset,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount
    }

}