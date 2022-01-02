import { useEffect } from "react";
import { Image, Text } from "react-native";
import tw from "tailwind-rn";

import Layout from "../component/Layout";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Auth");
    }, 3000);
  }, []);

  return (
    <Layout>
      <Image
        style={tw("h-12 w-12")}
        source={{
          uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
        }}
      />
      <Text style={tw("absolute bottom-0 pb-4 font-semibold text-sm")}>
        from Meta
      </Text>
    </Layout>
  );
}
