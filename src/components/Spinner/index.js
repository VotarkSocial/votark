import React from "react";
import ClipLoader from "react-spinners/PulseLoader";
import { View } from "react-native";
import { colors } from '../../../configuration';


const Spinner = () => (
  <View className="skew-loader">
    <ClipLoader
      size={10}
      color={colors.primary}
      loading={true}
    />
  </View>
)

export default Spinner
