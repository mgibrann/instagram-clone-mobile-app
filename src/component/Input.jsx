import { TextInput } from "react-native";
import tw from "tailwind-rn";

export default function Input({
  placeholder,
  onChangeText,
  value,
  className = "",
  secureTextEntry,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={tw(
        "border border-gray-400 rounded w-full py-2 px-2 bg-gray-100 " +
          className
      )}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
}
