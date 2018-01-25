import React from 'react';
import { View, Text } from 'react-native';

import {connect} from 'react-redux';
import * as ActionsRedux from './actions/index'; //Import your actions
import Icon from 'react-native-vector-icons/FontAwesome';

class BadgeHome extends React.Component {
    render(){
        let colorIcon = (this.props.focused) ?
            this.props.activeTintColor :
            this.props.inactiveTintColor
        return <Icon name="home" size={20} color={colorIcon} />;
    }
    
}

export default BadgeHome;