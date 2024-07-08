import react, {createContext, useState} from "react";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState(false);

    return (

        <AuthContext.Provider value={{isAuth, toggleIsAuth}}>
            {children}
        </AuthContext.Provider>
    )


}
export default AuthContextProvider;