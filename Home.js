import React from 'react';
import { View, TextInput } from 'react-native';
import { Button, Content, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionsRedux from './actions/index'; //Import your actions


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            nomeProduto: '',
            vlrProduto: 0
        }
    }

    _addToCart = () =>{
        this.props.addCart({name: this.state.nomeProduto, price: this.state.vlrProduto});
        this.setState({nomeProduto: '', vlrProduto: ''});
    }

    render(){
        return(
            <View style={{ flex: 1,justifyContent: 'center' }}>
                <Text 
                style={{
                    color: 'green', 
                    fontFamily: 'Verdana',
                    textAlign: 'center',
                    fontSize: 40
                }}
                >REDUX :D</Text>
                
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ alignSelf: 'center' }}>Nome do Produto: </Text>
                    <TextInput 
                    style={{ flex: 1 }} 
                    onChangeText={(text) => this.setState({nomeProduto: text})}
                    value={this.state.nomeProduto} />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{alignSelf: 'center'}}>Valor: </Text>
                    <TextInput 
                    style={{ flex: 1 }} 
                    onChangeText={(text) => this.setState({ vlrProduto: text })}
                    value={this.state.vlrProduto.toString()}
                    keyboardType={"numeric"} />
                </View>
                <Content >
                    <Button rounded primary onPress={() => this._addToCart()} style={{ alignSelf: 'center' }}>
                        <Text><Icon name="shopping-cart" size={20} /> Adicionar ao carrinho</Text>
                    </Button>
                </Content>
                <Button title="Adicionar ao Carrinho" onPress={() => this._addToCart()} />
            </View>
        )
    }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        /*username: state.dataReducer.username,
        password: state.dataReducer.password,
        count: state.dataReducer.count*/
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionsRedux, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);