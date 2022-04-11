import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface Markdown {
  id: string | number;
  content: string;
  label: string;
}

export interface IAppContext {
  markdowns: Markdown[];
  setMarkdowns: Dispatch<SetStateAction<Markdown[]>>;
}

const AppContext = createContext<IAppContext | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [markdowns, setMarkdowns] = useState<Markdown[]>([]);
  const value = useMemo(
    () => ({
      markdowns,
      setMarkdowns,
    }),
    [markdowns]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContextValue = () => useContext(AppContext);
