import { createContext, Dispatch, SetStateAction } from "react";

export interface AsideContextType {
  isOpenAside: boolean;
  setIsOpenAside: Dispatch<SetStateAction<boolean>>;
}

export const AsideContext = createContext<AsideContextType>({
  isOpenAside: true,
  setIsOpenAside: () => {},
});
