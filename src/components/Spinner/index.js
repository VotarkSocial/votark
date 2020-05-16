import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/PulseLoader";
import { View } from "react-native";
import { colors } from '../../../configuration';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 20px;
  border-color: black;
`;

const Spinner = () => (
  <View className="skew-loader">
    <ClipLoader
      css={override}
      size={10}
      color={colors.white}
      loading={true}
    />
  </View>
)

export default Spinner
