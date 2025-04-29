import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRouter } from "expo-router";
import { View, TextInput, Button, FormErrorMessage } from "@/components";
import { Colors, auth } from "@/config";
import { useTogglePasswordVisibility } from "@/hooks";
import { loginValidationSchema } from "@/utils";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [errorState, setErrorState] = useState("");
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleLogin = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    try {
      setErrorState("");
      await signInWithEmailAndPassword(auth, email, password);
      login();
      router.replace("/(tabs)");
    } catch (error: any) {
      setErrorState(error.message);
    }
  };

  return (
    <View isSafe={true} style={styles.container}>
      <KeyboardAwareScrollView enableOnAndroid={true}>
        <View isSafe={true} style={styles.logoContainer}>
          <Text style={styles.screenTitle}>Welcome back!</Text>
        </View>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting,
          }) => (
            <>
              <TextInput
                name="email"
                leftIconName="email"
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                rightIcon=""
                handlePasswordVisibility={() => {}}
              />
              <FormErrorMessage
                error={errors.email || ''}
                visible={!!touched.email}
              />
              <TextInput
                name="password"
                leftIconName="key-variant"
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                textContentType="password"
                rightIcon={rightIcon}
                handlePasswordVisibility={handlePasswordVisibility}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <FormErrorMessage
                error={errors.password || ''}
                visible={!!touched.password}
              />
              {errorState !== "" ? (
                <FormErrorMessage error={errorState} visible={true} />
              ) : null}
              <Button 
                style={[
                  styles.button,
                  isSubmitting && { opacity: 0.7 }
                ]} 
                onPress={handleSubmit}
                title="Login"
              >
                <Text style={styles.buttonText}>
                  {isSubmitting ? "Logging in..." : "Login"}
                </Text>
              </Button>
            </>
          )}
        </Formik>
        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title="Create a new account?"
          onPress={() => router.push("/auth/SignUp")}
        >
          <Text>Create a new account?</Text>
        </Button>
        <Button
          style={styles.borderlessButtonContainer}
          borderless
          title="Forgot Password"
          onPress={() => router.replace("/auth/ForgotPassword")}
        >
          <Text>Forgot Password</Text>
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.black,
    paddingTop: 20,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "700",
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default SignIn;
