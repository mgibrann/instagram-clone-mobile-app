import { View } from "react-native";
import tw from "tailwind-rn";

export default function Layout({ children, className }) {
  return (
    <View
      style={tw(
        "flex flex-1 bg-white justify-center items-center " + className
      )}
    >
      {children}
    </View>
  );
}
