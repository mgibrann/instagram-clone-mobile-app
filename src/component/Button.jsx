import { TouchableOpacity, Text } from "react-native";
import tw from "tailwind-rn";

export default function Button({
  onPress,
  title,
  classBg = "",
  classText = "",
}) {
  return (
    <TouchableOpacity onPress={onPress} style={tw("py-1 rounded " + classBg)}>
      <Text style={tw("text-base " + classText)}>{title}</Text>
    </TouchableOpacity>
  );
}
