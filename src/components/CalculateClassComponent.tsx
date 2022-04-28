import { useEffect, useState } from 'react'
import {CounterClassComponent} from './CounterClassComponent';

interface IProps {
    calculate: () => void;
    name : string;
}

export const CalculateClassComponent = (props : IProps):JSX.Element =>{
    const calculate = props.calculate;
    
    return(
        <button onClick={calculate}>{props.name} {`${props.name + 4}`}</button>
    )

}