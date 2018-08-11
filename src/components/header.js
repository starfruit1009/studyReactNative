import React from 'react';
import { Text } from 'react-native';

const Header = () => {

	const { textStyle } = styles;

	return <Text> Một ngày đẹp trời tháng 8 </Text>
};

const styles = {
	textStyle : {
		fontSize : 20;
	}
};

export default Header;
