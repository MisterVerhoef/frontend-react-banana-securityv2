import React, {createContext, useState} from "react";


export const AuthContext = React.createContext({
    isAuth: false,
    user: null,
    login: () => {},
    logout: () => {},
});
function AuthContextProvider({children}) {

    const [isAuth, toggleIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
        toggleIsAuth(true);
        setUser(userData);
    };

    const logout = () => {
        toggleIsAuth(false);
        setUser(null);
    };

    return (

        <AuthContext.Provider value={{isAuth, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )


}
export default AuthContextProvider;