import ThemeContextProvider from "../contexts/ThemeContext";

import Greeting from "./contextComponents/Greeting";
import Message from "./contextComponents/Message";

const UseContext = () => {
    return ( 
        <ThemeContextProvider>
            <Message />
            <Greeting />
        </ThemeContextProvider>
    );
}
 
export default UseContext;