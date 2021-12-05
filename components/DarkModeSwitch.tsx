import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      colorScheme="teal"
      color="teal.500"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
