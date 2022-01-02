import { useState, useRef } from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "tailwind-rn";

import Button from "../component/Button";
import Input from "../component/Input";
import Layout from "../component/Layout";

export default function Auth({ navigation }) {
  const [isClicked, setIsClicked] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const newUserHandler = () => {
    setIsClicked((prev) => !prev);
  };

  const oldUserHandler = () => {
    setIsClicked((prev) => !prev);
    setIsSignIn((prev) => !prev);
  };

  return (
    <Layout className="px-4">
      {!isClicked && (
        <>
          <Text style={tw("pb-10 text-3xl font-semibold")}>Instagram</Text>
          <Button
            title="Create New Account"
            classBg={"bg-blue-700 w-full mb-2"}
            classText={"text-center text-white"}
            onPress={newUserHandler}
          />
          <Button
            title="Login"
            classBg={"bg-white"}
            classText={"text-blue-700 font-medium"}
            onPress={oldUserHandler}
          />
        </>
      )}
      {isClicked && isSignIn && (
        <>
          <Text style={tw("pb-10 text-3xl font-semibold")}>Instagram</Text>
          <Input
            placeholder="Email"
            value={formData.email}
            onChangeText={(e) =>
              setFormData((prev) => {
                return { ...prev, email: e };
              })
            }
          />
          <Input
            placeholder="Password"
            className="mt-3 mb-3"
            secureTextEntry
            value={formData.password}
            onChangeText={(e) =>
              setFormData((prev) => {
                return { ...prev, password: e };
              })
            }
          />
          <Button
            title="Login"
            classBg={"bg-blue-700 w-full mb-4"}
            classText={"text-center text-white"}
          />
          <Text>Forgot your login details? Get help logging in.</Text>
          <View style={tw("flex-row py-4")}>
            <View style={tw("h-2 bg-black")} />
            <Text>OR</Text>
            <View style={tw("h-px bg-gray-200")} />
          </View>
          <View style={tw("flex-row items-center")}>
            <MaterialIcons
              name="facebook"
              size={24}
              style={tw("text-md text-blue-600")}
            />
            <Text style={tw("ml-2 text-sm text-blue-600")}>
              Login With Facebook
            </Text>
          </View>
          <View
            style={tw(
              "absolute bottom-0 flex-row items-center border-t-2 border-gray-200 w-full justify-center"
            )}
          >
            <Text>Don't have an account?</Text>
            <Button
              title="Sign Up"
              classText="font-semibold"
              onPress={() => console.log(formData)}
            />
          </View>
        </>
      )}
    </Layout>
  );
}
