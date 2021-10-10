import {FC,ChangeEvent,useState} from 'react'

export enum HairColor{
    Blonde="Your hair color is blode ",
    Brown="Your hair color is brown ",
    Pink="Wow thats cool"
}

interface props{
    name?:string;
    age?:number;
    email?:string;
    HairColor:HairColor;
}

export const Person:FC<props> = ({name,age,email,HairColor}) => {
    const[country,setCountry]=useState<string | null>("");
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setCountry(e.target.value)
        console.log(e.target.value);
        
    }
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{email}</h1>
            <input   onChange={handleChange} placeholder="type your country"/>
            {HairColor}
        </div>
    )
}
