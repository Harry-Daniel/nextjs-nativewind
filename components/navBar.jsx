import { View, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const NavBar = () => {
  return (
    <View>
      <Text>NavBar</Text>
      <AntDesign name="home" size={24} color="black" />
    </View>
  );
};

export default NavBar;
