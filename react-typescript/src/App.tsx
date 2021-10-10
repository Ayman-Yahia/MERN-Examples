import React,{FC,createContext} from 'react';
import './App.css';
import {Person,HairColor} from './components/Person';

interface AppContextInterface{
  name?:string;
  age?:number;
  email?:string;
}
const AppContext= createContext<AppContextInterface|null>(null)
const App:FC=()=>{
  const contextValue:AppContextInterface={
    name:"Ayman",
    age:3,
    email:"ayman@gmail.com" 
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <Person name="Ayman"
    age={3}
    email="ayman@gmail.com"  HairColor={HairColor.Pink}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
