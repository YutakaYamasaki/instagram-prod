import React from 'react'
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles'

class Profile extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Text>Profilepage{this.props.counter}</Text>
			</View>
		)
	}
}

mapStateToProps = (state) =>{
	return {
		counter: state
	}
}

export default connect(mapStateToProps)(Profile)