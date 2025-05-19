import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";

const GradientButton = ({ containerClass, value, buttonClass }) => {
  return (
    <LinearGradient
      colors={["rgba(9, 181, 211, 0.9)", "rgba(58, 131, 244, 0.9)"]}
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 1, y: 1 }}
      style={{ borderRadius: 20 }}
      className={`${containerClass}`}
    >
      <TouchableOpacity className={`p-3 px-4 ${buttonClass}`}>
        <Text className="text-white font-bold">{value}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
