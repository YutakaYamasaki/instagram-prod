import React from 'react'
import {Text, View, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEmail, updatePassword } from '../actions/user'
import styles from '../styles'

class Login extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Text>Login</Text>
                <TextInput
                    value={this.props.user.email}
                    // onChangeText={input=>console.log(input)}
                    onChangeText={input=>this.props.updateEmail(input)}
                    placeholder='Email'/>
                <TextInput
                    value={this.props.user.password}
                    onChangeText={input=>this.props.updatePassword(input)}
                    placeholder='Password'/>
			</View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({updateEmail,updatePassword},dispatch)
}

const mapStateToProps = (state) =>{
	return {
		user: state.user
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
