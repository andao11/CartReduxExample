import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {connect} from 'react-redux';
import * as ActionsRedux from './actions/index'; //Import your actions
import Icon from 'react-native-vector-icons/FontAwesome';

class Badge extends React.Component {
    constructor(props){
        super(props);
        console.log("Badge props", this.props)
    }
    render(){
        let colorIcon = (this.props.focused) ?
                            this.props.activeTintColor :
                            this.props.inactiveTintColor
        return(
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Icon name="shopping-cart" size={20} color={colorIcon} />
                {(this.props.count > 0) &&
                    <Text style={[styles.numberBadge, { backgroundColor: colorIcon}]}>{this.props.count}</Text>
                }
            </View>
        )
    }
    
}

const styles = {
    numberBadge: {
        bottom: 8,
        width: 25,
        left: 15,
        height: 17,
        borderRadius: 20,
        position: 'absolute',
        textAlign: 'center'
    }
}

function mapStateToProps(state, props){
    return {
        count: state.dataReducer.count
    }
}

export default connect(mapStateToProps)(Badge);