import { createContext, ReactNode, useEffect, useState } from "react";


interface User {
  email: string,
  name: string,
  token: string,
  id: number
}

interface UserContextType {
  userInfo:  User | undefined
  setUser: (user: any) => void
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userInfo, setUserInfo] = useState<User>()

  async function setUser(userInfoParams:any) {
    setUserInfo(userInfoParams);
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}