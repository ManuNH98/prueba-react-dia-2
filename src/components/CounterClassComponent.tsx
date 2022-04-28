import React from 'react'
import { CalculateClassComponent } from './CalculateClassComponent';

export interface IProps{
}

export const CounterClassComponent = (props : IProps):JSX.Element =>{
    const[seconds, setSeconds] = React.useState<number>(0);
    const sum = () => setSeconds(seconds + 1)
    const substract = () => setSeconds(seconds - 1)

    return(
        <div>
            <p>{seconds}</p>
            <CalculateClassComponent name='+' calculate = {sum}/>
            <CalculateClassComponent name='-' calculate = {substract}/>
        </div>
    )
}

