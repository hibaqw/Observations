import { useState, createContext } from "react";

export const TextAreaContext = createContext();

export const TextAreaProvider = ({children}) => {

  const [textAreas, setTextAreas] = useState({
    'setting':'',
    'culture':'',
    'characters':'',
    'conflicts':'',
    'relationships':'',
    'scandals':'',
    'phenomena':'',
    'rumours':'',
    'customs':'',
    'headline':'',
    'summary':''
  })

  
  const handleChange = (textAreaName, value) => {

    setTextAreas(prevState => ({
      ...prevState,
      [textAreaName]: value
    }));
    console.log(textAreas);

  };



  return (
    <TextAreaContext.Provider value={{textAreas, handleChange}}>
      {children}
    </TextAreaContext.Provider>
  )

}