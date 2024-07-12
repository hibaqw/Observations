import { createContext, useState } from "react";
import { SETTINGS_AND_CONTEXT, SOCIETAL_CUSTOMS_AND_NORMS } from '../constants'
export const SelectContext = createContext();

export const SelectProvider = ({children}) => 
  {
    const values1 = ['a','a'];
    const values2 = [null, 'a']
    const [selectedOptions, setSelectedOptions] = useState({ [SETTINGS_AND_CONTEXT] : values1, [SOCIETAL_CUSTOMS_AND_NORMS]: values2});
    

    const handleChange = (selectValue, selectName, selectKey) => {

      if (selectName == SETTINGS_AND_CONTEXT) {
        values1[selectKey] = selectValue;
        setSelectedOptions((prevState) => (
          { ...prevState, [selectName]: values1

          }))
      }
      else if (selectName == SOCIETAL_CUSTOMS_AND_NORMS){
        values1[selectKey] = selectValue;
        setSelectedOptions((prevState) => (
          { ...prevState, [selectName]: values1

          }))
      }

    
    
      console.log(selectedOptions)
      
    };

    return(
      <SelectContext.Provider value={{setSelectedOptions, handleChange}}>
        {children}
      </SelectContext.Provider>

    );

  };
