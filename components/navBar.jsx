import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { usePathname, useRouter } from "expo-router";
const { width, height } = Dimensions.get("screen");
const NavBar = () => {
  const pathname = usePathname();
  const router=useRouter()

  const params="This is just to show how to pass parameters: Hello World" //Example parameter to be passed 

  // handling onPress Routing
  const handlePress=(path)=>{
    router.push({pathname:path,params:{params:params}})
  }


  // Naming the pathnames
  const homePathname = "/";
  const profilePathname = "/profile";

  return (
    <View className="items-center">
      <View
        className="absolute bottom-16 flex-row justify-around items-center text-[#ccc9c9] bg-gray-700 border border-white p-4 rounded-full gap-4 shadow-2xl"
        style={{ maxWidth: width, minWidth: width * 0.4 }}
      >
        <View>
          <TouchableOpacity onPress={()=>handlePress("/")} className="justify-center items-center gap-1">
            <AntDesign
              name="home"
              size={20}
              color={pathname === homePathname ? "#ccc9c9" : "white"}
            />
            <Text className={`${pathname===homePathname?"text-[#ccc9c9]":"text-white"} text-xs`}> Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={()=>handlePress("/profile")} className="justify-center items-center gap-1">
            <AntDesign name="user" size={20} color={pathname === profilePathname ? "#ccc9c9" : "white"} />
            <Text className={`${pathname===profilePathname?"text-[#ccc9c9]":"text-white"} text-xs`}>  Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NavBar;
