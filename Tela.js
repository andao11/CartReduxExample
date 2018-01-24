import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ActionsRedux from './actions/index'; //Import your actions

class Tela extends React.Component {

    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                {/*<Text>Contando Clicks: {this.props.count}</Text>
                <Button title="Ver PROPS" onPress={() => console.log("PROPS TELA: ", this.props)} />*/}
                <FlatList 
                    data={this.props.cart}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._renderSeparator}
                />
            </View>
        )
    }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => {
        return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{flex: 1, textAlign: 'left', fontSize: 20}}>{item.name} - {item.price}</Text>
        </View>)
    }

    _renderSeparator = () => {
        return (<View style={{height: 1, backgroundColor: '#d9d9d9'}} />)
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        count: state.dataReducer.count,
        cart: state.dataReducer.cart
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionsRedux, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Tela);