import React from 'react';

import {connect} from 'react-redux';
import * as ActionsRedux from './actions/index'; //Import your actions
import { View, Text } from 'react-native';

class Badge extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>{this.props.count}</Text>
            </View>
        )
    }
    
}

function mapStateToProps(state, props){
    return {
        count: state.dataReducer.count
    }
}

export default connect(mapStateToProps)(Badge);