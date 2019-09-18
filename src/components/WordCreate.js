import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Spinner } from '../ortak';
import { wordChange, wordCreate } from '../actions';

class WordCreate extends Component {
 
    clickSave() {
        const { kelimeTurkce,
            kelimeIngilizce,
            cumle,
            yanlisSayisi = 1
             } = this.props;

            this.props.wordCreate({ kelimeTurkce,
                kelimeIngilizce,
                cumle,
                yanlisSayisi
                });
    }
    renderButton() {
        if (!this.props.loading) {
            return <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>;
        }
        return <Spinner size='small' />;
    }
    render() {
        const { inputStyle } = styles;
        return (
            <View style={{ backgroundColor: "#384065" }}>
            <CardSection>
                <TextInput
                placeholder="İngilizce Kelime"
                style={inputStyle}
                value={this.props.kelimeIngilizce}
                onChangeText={kelimeIngilizce => this.props.wordChange({ props: 'kelimeIngilizce', value: kelimeIngilizce })}
                />
            </CardSection>

            <CardSection>
                <TextInput
                placeholder="Türkçe Kelime"
                style={inputStyle}
                value={this.props.kelimeTurkce}
                onChangeText={kelimeTurkce => this.props.wordChange({ props: 'kelimeTurkce', value: kelimeTurkce })}
                />
            </CardSection>

            <CardSection>

            <TextInput
             placeholder="Cümle"
             style={inputStyle}
             value={this.props.cumle}
             onChangeText={cumle => this.props.wordChange({ props: 'cumle', value: cumle })}
            />     
            </CardSection>          
           
         
             <CardSection>
                 {this.renderButton()}
             </CardSection>             
             </View>
        );
    }
}

const styles = {

    hideInput: {
        caretHidden: true
    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    }
};

const mapToStateProps = ({ wordListResponse }) => {
    const { kelimeTurkce,
        kelimeIngilizce,
        cumle,
        yanlisSayisi,
        loading } = wordListResponse;

         return { kelimeTurkce,
        kelimeIngilizce,
        cumle,
        yanlisSayisi,
        loading };
};

export default connect(mapToStateProps, { wordChange, wordCreate })(WordCreate);