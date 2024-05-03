"use client";

import {
  createContext,
  useMemo,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

enum Section {
  home = "home",
  contact = "contact",
  sponsor = "sponsor",
  banners = "banners",
}

type UserContextType = {
  activeSection?: string;
  setActiveSection?: Dispatch<SetStateAction<string>>;
};

const UserContext = createContext<UserContextType>({});

export const useUser = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined)
    throw new Error("useValue must be used within a ValueProvider");

  return userContext;
};

const UserProvider = ({ children }: { children: React.ReactElement }) => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const sectionObject = useMemo(() => {
    return { activeSection, setActiveSection };
  }, [activeSection, setActiveSection]);

  return (
    <UserContext.Provider value={sectionObject}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
