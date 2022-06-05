/* eslint-disable */
import React , { createContext , useContext , useState } from "react";

// 1.3개의 hook을 import한다. 
const StateContext = createContext();

// 2. 초기값 설정

const initState = {
    chat : false,
    cart : false,
    useProfile : false,
    notification : false,
}

// 3.StateContext.Provider value={{ key : value }}를 return하는 함수정의
// children은 context로 value를 리턴 한 뒤 화면의 모든 context를 return 해줘야되기때문 
export const ContextProvider = ({children}) => {
    const [activemenu , setactivemenu] = useState(true);
    const [isClicked ,  setisClicked] = useState(initState);
    const handleClick = (clicked) => {
        return setisClicked({...initState , [clicked] : true});
    }
    const [screenSize , setscreenSize] = useState();

    return (<StateContext.Provider value={{
        activemenu,
        setactivemenu,
        setisClicked,
        isClicked,
        handleClick,
        screenSize,
        setscreenSize,
    }}>
        {children}
    </StateContext.Provider>)
}

export const useStateContext = () => useContext(StateContext);