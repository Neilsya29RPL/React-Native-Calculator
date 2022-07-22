import React, { Component } from 'react'
import { View, StatusBar, Text, TouchableOpacity} from 'react-native'

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       hitung: 0,
    }
  }

  masukkanAngka = (value) => {
    if(this.state.hitung == 0){
      this.setState({hitung: value})
    } else {
      this.setState({hitung: this.state.hitung+ '' + value})
    }
  }

  hitungHasil = () => {
    let hasil = eval(this.state.hitung)
    this.setState({hitung: hasil})
  }

  render(){
    return(
      <View style={{flex:1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#212121" barStyle="light-content" />

        <View style={{flex: 0.5, justifyContent: 'center', marginHorizontal: 10}}>
          <Text style={{color : '#FF5722', fontSize: 52, textAlign: 'right', padding: 10}}>{this.state.hitung}</Text>
        </View>

        <View style={{flex : 1}}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.setState({hitung: 0})}>
              <Text style={{color : '#FF5722', fontSize: 28, textAlign: 'right', padding: 10}}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka('(')}>
              <Text style={{color : '#FF5722', fontSize: 35, textAlign: 'center', padding: 10}}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(')')}>
              <Text style={{color : '#FF5722', fontSize: 35, textAlign: 'center'}}>)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka('/')}>
              <Text style={{color : '#FF5722', fontSize: 35, textAlign: 'center'}}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka('*')}>
              <Text style={{color : '#FF5722', fontSize: 35, textAlign: 'center'}}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(7)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center', padding: 10}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(8)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center'}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(9)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center'}}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka('+')}>
              <Text style={{color : '#FF5722', fontSize: 35, textAlign: 'center'}}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(4)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center', padding: 10}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(5)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center'}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(6)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center'}}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka('-')}>
              <Text style={{color : '#FF5722', fontSize: 35, textAlign: 'center'}}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(1)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center', padding: 10}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(2)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.masukkanAngka(3)}>
              <Text style={{color : '#FFFFFF', fontSize: 28, textAlign: 'center'}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress={() => this.hitungHasil()}>
              <Text style={{color : '#FF5722', fontSize: 35, textAlign: 'center'}}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } 
}

export default App;
