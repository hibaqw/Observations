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

  const handleChange = (event, textAreaName) => {

    const { value } = event.target;
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