import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { myWordsListData } from '../actions';
import { Button, WordButton, GreenWordButton } from '../ortak';


class WordsStudy extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
           header: null,
           
        }
     }

    state = { ilkdeger: false };    

    componentWillMount() {
        this.props.myWordsListData();
        this.createDataSource(this.props);
       
         
    }
     componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
     }
     createDataSource({ wordsArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(wordsArray);
     }
    
      GenerateRandomNumber() {
        let RandomNumber = Math.floor(Math.random() * this.props.wordsArray.length); 
        this.setState({         
          NumberHolder: RandomNumber,
          ingilizce: true
        });
        while (RandomNumber === this.state.NumberHolder)
        {
            RandomNumber = Math.floor(Math.random() * this.props.wordsArray.length); 
            this.setState({         
                NumberHolder: RandomNumber,
                ingilizce: true
              });
        }
      }
      clickSwitch()
    {
        this.setState({ ingilizce: false });
    }

      renderButton() {      
        
        if (this.state.ingilizce) {
            return <WordButton onPress={this.clickSwitch.bind(this)}>{this.props.wordsArray[this.state.NumberHolder].kelimeIngilizce}</WordButton>;
        }
        return <GreenWordButton onPress={this.clickSwitch.bind(this)}>{this.props.wordsArray[this.state.NumberHolder].kelimeTurkce}</GreenWordButton>;
    }

    render() {      
       

        if (this.props.wordsArray.length)
        {   
            console.log(this.state.ilkdeger);
            if (!this.state.ilkdeger)
                {
                    const RandomNumber1 = Math.floor(Math.random() * this.props.wordsArray.length); 
                    this.state = { 
                        // This is our Default number value
                        NumberHolder: RandomNumber1,
                        ingilizce: true,
                        ilkdeger: true
                      };
                      
                }
          
            console.log(this.props.wordsArray.length);
            console.log(this.state.NumberHolder);
            
            return (
            
            <View style={{ flex: 1, backgroundColor: "#384065" }}>                                        
                
                <View style={styles.buttonbody}>  
                {this.renderButton()}   
                 </View>


                <View style={styles.mainbody}>    
                 
                <Text style={styles.textStyle}> {this.props.wordsArray[this.state.NumberHolder].cumle}</Text>
                <Button onPress={this.GenerateRandomNumber.bind(this)}> Değiştir </ Button>

               </View>
               
                
            </View>
            );          
        }
        
            return null;               
    }
    }

const mapStateToProps = ({ wordDataResponse }) => {
    const wordsArray = _.map(wordDataResponse, (val, uid) => {
        return { ...val, uid };
    });
    return { wordsArray };

};


export default connect(mapStateToProps, { myWordsListData })(WordsStudy);


const styles = {
      
  
    mainbody: {
       marginTop: 30,
       marginLeft: 24,
       marginRight: 24,
       marginBottom: 70,
       alignItems: 'center'
   },
   buttonbody: {
    marginTop: 30,
    marginLeft: 70,
    marginRight: 70,
    alignItems: 'center'
   },
   textStyle: {
       fontSize: 15,
       color: '#fff',
       marginTop: 20
   },
   bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 50,
    alignItems: 'center'
  }
 
};