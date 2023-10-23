import PropTypes from 'prop-types';
import { StyleSheet, View } from "react-native";

const RowLayout = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

RowLayout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default RowLayout;