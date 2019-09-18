import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Spinner } from '../ortak';
import { wordChange, wordUpdate, wordDelete } from '../actions';


class WordUpdate extends Component {
    state = { kelimeTurkce: '', kelimeIngilizce: '', cumle: '' };
    componentWillMount() {
        const {
            kelimeTurkce,
            kelimeIngilizce,
            cumle, } = this.props.word;
            
            this.setState({ kelimeTurkce,
                kelimeIngilizce,
                cumle });
    }
    clickUpdate() {
        const { kelimeTurkce,
            kelimeIngilizce,
            cumle } = this.state;

            this.props.wordUpdate({ kelimeTurkce,
                kelimeIngilizce,
                cumle,
                uid: this.props.word.uid });
    }
    clickDelete() {
        this.props.wordDelete({ uid: this.props.word.uid });
    }

    renderButton() {
        if (!this.props.loadingUpdate) {
            return <Button onPress={this.clickUpdate.bind(this)}> Güncelle </Button>;
        }
        return <Spinner size='small' />;
    }

    renderDeleteButton() {
        if (!this.props.loadingDelete) {
            return <Button onPress={this.clickDelete.bind(this)}> Sil </Button>;
        }
        return <Spinner size='small' />;
    }

    render() {
        const { inputStyle } = styles;
        return (
            <View style={{ backgroundColor: "#384065" }}>
            <CardSection>
                <TextInput
                placeholder="Kelime İngilizce"
                style={inputStyle}
                value={this.state.kelimeIngilizce}
                onChangeText={kelimeIngilizce => this.setState({ kelimeIngilizce })}
                />
            </CardSection>

            <CardSection>
                <TextInput
                placeholder="Kelime Türkçe"
                style={inputStyle}
                value={this.state.kelimeTurkce}
                onChangeText={kelimeTurkce => this.setState({ kelimeTurkce })}
                />
            </CardSection>

            <CardSection>
             <TextInput
             placeholder="Cümle"
             style={inputStyle}
             value={this.state.cumle}
             onChangeText={cumle => this.setState({ cumle })}
             />
             </CardSection>           
           
             
             <CardSection>
                 <View style={{ marginBottom: 20 }}>
                 {this.renderButton()}
                 </View>
                
             </CardSection>    
             <CardSection>
             <View style={{ marginBottom: 20 }}>
                 {this.renderDeleteButton()}
                 </View>
             </CardSection>              
             </View>
        );
    }
}

const styles = {

    deneme: {
        marginleft: 20
    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    }
};

const mapToStateProps = ({ wordUpdateResponse }) => {
    const { loadingUpdate, loadingDelete } = wordUpdateResponse;

         return { loadingUpdate, loadingDelete };
};

export default connect(mapToStateProps, { wordChange, wordUpdate, wordDelete })(WordUpdate);