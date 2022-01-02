import { Text } from "react-native";
import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state);
  console.log("state", state);
  return <Text>HAlo awdwadd</Text>;
}
