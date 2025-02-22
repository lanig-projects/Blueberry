import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Theme } from "react-toastify/dist/types";
import { useDarkMode } from "@shared/hooks/useDarkMode";

interface Props {
  theme?: Theme;
}

export const AlertContainer = ({ theme }: Props) => {
  const { isDarkMode } = useDarkMode();

  return (
    <ToastContainer theme={theme ? theme : isDarkMode ? 'dark' : 'light'}/>
  );
};
