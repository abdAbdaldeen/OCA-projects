import {useCustomTheme} from '../contexts/ThemeProvider';
const ThemeWrapper = ({children}) => {
  const {isLoadingTheme} = useCustomTheme();
  if (isLoadingTheme) return null;
  return children;
};

export default ThemeWrapper;
