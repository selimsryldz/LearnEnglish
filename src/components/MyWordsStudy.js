import _ from 'lodash';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, ListView, Alert, TouchableOpacity, ToastAndroid } from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import { myWordsListData } from '../actions';
import { Button, WordButton } from '../ortak';


class MyWordsStudy extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null       
      }
   }
   
    state = { ilkdeger: false,
      firstChoice: 'şık 1',
      secondChoice: 'şık 2',
      thirdChoice: 'şık 3',
      fourthChoice: 'şık 4',
      girdimi: false,
      data: [
        {
          label: 'Default value is same as label',
        },
        {
          label: 'Value is different',
          value: "I'm not same as label",
        },
        {
          label: 'Color',
          color: 'green',
        },
        {
          disabled: true,
          label: 'Disabled',
        },
        {
          label: 'Size',
          size: 32,
        },
      ] };    

      
    componentWillMount() {
        this.props.myWordsListData();
        this.createDataSource(this.props);
         
    }
    
     componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
        console.log('componentWillReceiveProps');
     }

       
     onPress = data => this.setState({ data });

   
     getChoice()
     {      
      let zar = 0;
      let random1 = 0;
      let random2 = 0;
      let random3 = 0;
      let ilkSecenek = 0;
      let ikinciSecenek = 0;
      let ucuncuSecenek = 0;
      let dorduncuSecenek = 0;
      zar = Math.floor((Math.random() * 4) + 1); 
      console.log('zar sonucu: ', zar);
      if (zar === 1)
      {
        ilkSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('first choise1: ', this.state.NumberHolder);

        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ikinciSecenek = this.props.wordsArray[random1].kelimeTurkce;
        console.log('second choise1: ', random1);

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ucuncuSecenek = this.props.wordsArray[random2].kelimeTurkce;
        console.log('third choise1: ', random2);
        console.log('third choise1 veri : ', ucuncuSecenek);

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        dorduncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('fourth choise1: ', random3);
        console.log(this.state.fourthChoice);  
        
      }

      else if (zar === 2)
      {
        
        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }                  
        ilkSecenek = this.props.wordsArray[random1].kelimeTurkce;
        console.log('first choise2: ', random1);

        ikinciSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('second choise2: ', this.state.NumberHolder);

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }                  
        ucuncuSecenek = this.props.wordsArray[random1].kelimeTurkce;        
        
        console.log('third choise2: ', random2);
        console.log('third choise2 veri : ', ucuncuSecenek);

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        dorduncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('fourth choise2: ', random3);
        console.log(this.state.fourthChoice);  
      }

      else if (zar === 3)
      {
        
        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ilkSecenek = this.props.wordsArray[random1].kelimeTurkce;   
        console.log('first choise3: ', random1);     

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        ikinciSecenek = this.props.wordsArray[random2].kelimeTurkce;
        console.log('second choise3: ', random2);

        ucuncuSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('third choise3: ', this.state.NumberHolder);
        console.log('third choise3 veri : ', ucuncuSecenek);

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        dorduncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('fourth choise3: ', random3);
        console.log(this.state.fourthChoice);  
      }

      else if (zar === 4)
      {
        
        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ilkSecenek = this.props.wordsArray[random1].kelimeTurkce;   
        console.log('first choise4: ', random1);     

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        ikinciSecenek = this.props.wordsArray[random2].kelimeTurkce;
        console.log('second choise4: ', random2);
        

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        ucuncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('third choise4: ', random3);
        console.log('third choise14veri : ', ucuncuSecenek);

        dorduncuSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('fourth choise4: ', this.state.NumberHolder);  
        console.log(this.state.fourthChoice);    
      }
     
      this.setState({ 
       
        data: [
          {
            label: ilkSecenek,
            value: ilkSecenek,
          },
          {
            label: ikinciSecenek,
            value: ikinciSecenek,
          },
          {
            label: ucuncuSecenek,
            value: ucuncuSecenek,
          },
          {
            label: dorduncuSecenek,
            value: dorduncuSecenek,
          }              
        ]
      });
      console.log('generate number sonrası data ', this.state.data);
      
     }
     
    
     createDataSource({ wordsArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(wordsArray);
     }
    
    button1() {
     if (this.state.data[0].label === this.props.wordsArray[this.state.eskiNumber].kelimeTurkce)
    {
      console.log('doğru');
      ToastAndroid.show('Cevabınız Doğru !', ToastAndroid.SHORT);
      this.GenerateRandomNumber();
    }
    else 
    {
      const yanlisCevap = 'Cevabınız Yanlış! Doğru Cevap: ';
      const cevap = yanlisCevap + this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
      console.log('yanlış');
      ToastAndroid.show(cevap, ToastAndroid.SHORT);
      const geciciYanlisSayisi = this.props.wordsArray[this.state.eskiNumber].yanlisSayisi;
      console.log('yanlıştan hemen sonra gecici yanliş sayısı', geciciYanlisSayisi);
      const uid = this.props.wordsArray[this.state.eskiNumber].uid;
      const cumle = this.props.wordsArray[this.state.eskiNumber].cumle;      
      const kelimeIngilizce = this.props.wordsArray[this.state.eskiNumber].kelimeIngilizce;
      const kelimeTurkce = this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
      this.yanlisUpdate(geciciYanlisSayisi, uid, cumle, kelimeIngilizce, kelimeTurkce);
      this.GenerateRandomNumber();
    }
    console.log(this.state.data[0].label);
    console.log(this.props.wordsArray[this.state.eskiNumber].kelimeTurkce);
    }

    button2() {
      if (this.state.data[1].label === this.props.wordsArray[this.state.eskiNumber].kelimeTurkce)
     {
       ToastAndroid.show('Cevabınız Doğru !', ToastAndroid.SHORT);
       this.GenerateRandomNumber();
     }
     else 
     {
       const yanlisCevap = 'Cevabınız Yanlış! Doğru Cevap: ';
       const cevap = yanlisCevap + this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
       console.log('yanlış');
       ToastAndroid.show(cevap, ToastAndroid.SHORT);
       const geciciYanlisSayisi = this.props.wordsArray[this.state.eskiNumber].yanlisSayisi;
       const uid = this.props.wordsArray[this.state.eskiNumber].uid;
       const cumle = this.props.wordsArray[this.state.eskiNumber].cumle;      
       const kelimeIngilizce = this.props.wordsArray[this.state.eskiNumber].kelimeIngilizce;
       const kelimeTurkce = this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
       this.yanlisUpdate(geciciYanlisSayisi, uid, cumle, kelimeIngilizce, kelimeTurkce);
       this.GenerateRandomNumber();
     }     
     }
     button3() {
      if (this.state.data[2].label === this.props.wordsArray[this.state.eskiNumber].kelimeTurkce)
     {
       ToastAndroid.show('Cevabınız Doğru !', ToastAndroid.SHORT);
       this.GenerateRandomNumber();
     }
     else 
     {
       const yanlisCevap = 'Cevabınız Yanlış! Doğru Cevap: ';
       const cevap = yanlisCevap + this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
       console.log('yanlış');
       ToastAndroid.show(cevap, ToastAndroid.SHORT);
       const geciciYanlisSayisi = this.props.wordsArray[this.state.eskiNumber].yanlisSayisi;
       const uid = this.props.wordsArray[this.state.eskiNumber].uid;
       const cumle = this.props.wordsArray[this.state.eskiNumber].cumle;      
       const kelimeIngilizce = this.props.wordsArray[this.state.eskiNumber].kelimeIngilizce;
       const kelimeTurkce = this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
       this.yanlisUpdate(geciciYanlisSayisi, uid, cumle, kelimeIngilizce, kelimeTurkce);
       this.GenerateRandomNumber();
     }     
     }
     button4() {
      if (this.state.data[3].label === this.props.wordsArray[this.state.eskiNumber].kelimeTurkce)
     {
       ToastAndroid.show('Cevabınız Doğru !', ToastAndroid.SHORT);
       this.GenerateRandomNumber();
     }
     else 
     {
       const yanlisCevap = 'Cevabınız Yanlış! Doğru Cevap: ';
       const cevap = yanlisCevap + this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
       console.log('yanlış');
       ToastAndroid.show(cevap, ToastAndroid.SHORT);
       const geciciYanlisSayisi = this.props.wordsArray[this.state.eskiNumber].yanlisSayisi;
       const uid = this.props.wordsArray[this.state.eskiNumber].uid;
       const cumle = this.props.wordsArray[this.state.eskiNumber].cumle;      
       const kelimeIngilizce = this.props.wordsArray[this.state.eskiNumber].kelimeIngilizce;
       const kelimeTurkce = this.props.wordsArray[this.state.eskiNumber].kelimeTurkce;
       this.yanlisUpdate(geciciYanlisSayisi, uid, cumle, kelimeIngilizce, kelimeTurkce);
       this.GenerateRandomNumber();
     }     
     }

   
      GenerateRandomNumber() {
          console.log('generate number öncesi: ', this.state.NumberHolder);
          let buldunmu = false;
          let tumDurum = 0;
          let sayac = 0;
          let bulmaAraci = 0;
          
         
          for (let i = 0; i < this.props.wordsArray.length; i++)
          {           
            tumDurum += this.props.wordsArray[i].yanlisSayisi;
            
          }
          console.log(tumDurum);
          console.log('selim');
        let RandomNumber = Math.floor(Math.random() * tumDurum); 
        console.log(RandomNumber);
        bulmaAraci = RandomNumber;
        while (!buldunmu)
        {
            bulmaAraci -= this.props.wordsArray[sayac].yanlisSayisi;
            if (bulmaAraci < 0)
            {
                buldunmu = true;
                break;
            }
            sayac++;
           
        }
        console.log(sayac);
        
        while (sayac === this.state.NumberHolder)
        {         
         buldunmu = false;
        RandomNumber = Math.floor(Math.random() * tumDurum); 
        console.log(RandomNumber);
        bulmaAraci = RandomNumber;
        while (!buldunmu)
        {
            bulmaAraci -= this.props.wordsArray[sayac].yanlisSayisi;
            if (bulmaAraci < 0)
            {
                buldunmu = true;
                break;
            }
            sayac++;
           
        }
        console.log(sayac);
        }
        this.setState({         
          NumberHolder: sayac,
          ingilizce: true
        });
        this.setState({
          eskiNumber: this.state.NumberHolder
        });
        console.log('generate number sonrası: ', this.state.NumberHolder);
        
        this.getChoice();
       
      }

      artir(sayi) {
        let tumDurum = sayi;
     
        tumDurum += 1;
        console.log(tumDurum);
        
      }
      
    yanlisUpdate(geciciYanlisSayisi, uid, cumle, kelimeIngilizce, kelimeTurkce) 
    { 

        let yanlisSayisi = geciciYanlisSayisi;
        yanlisSayisi += 1;
        console.log('yanlisSayisi', yanlisSayisi);

    
    const { currentUser } = firebase.auth();
           
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/kelimeler/${uid}`)
        .set({ cumle, kelimeIngilizce, kelimeTurkce, yanlisSayisi })    
        .then(() => {
            console.log('oldu');
        })
        .catch(() => {
            console.log('olmadı');
           });
   
    }

      clickSwitch()
    {
        const geciciYanlisSayisi = this.props.wordsArray[this.state.NumberHolder].yanlisSayisi;
        const kelimeIngilizce = this.props.wordsArray[this.state.NumberHolder].kelimeIngilizce;
        const kelimeTurkce = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        const cumle = this.props.wordsArray[this.state.NumberHolder].cumle;
        const uid = this.props.wordsArray[this.state.NumberHolder].uid;
        
        this.setState({ ingilizce: false });
        this.yanlisUpdate(geciciYanlisSayisi, uid, cumle, kelimeIngilizce, kelimeTurkce);
    }


      renderButton() {      
        
        if (this.state.ingilizce) {
            return <WordButton onPress={this.clickSwitch.bind(this)}>{this.props.wordsArray[this.state.NumberHolder].kelimeIngilizce}</WordButton>;
        }
        return <WordButton onPress={this.clickSwitch.bind(this)}>{this.props.wordsArray[this.state.NumberHolder].kelimeTurkce}</WordButton>;
    }  


    render() {    
       
      
        if (this.props.wordsArray.length)
        {      
           
      
            let selectedButton = this.state.data.find(e => e.selected == true);
            selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
           

            if (!this.state.ilkdeger)
            { 
              let RandomNumber1 = Math.floor(Math.random() * this.props.wordsArray.length);             

              console.log('if e girdi');

              this.state = { 
                  // This is our Default number value
                  NumberHolder: RandomNumber1,
                  ilkdeger: true,
                  firstChoice: 'şık 1',
                  secondChoice: 'şık 2',
                  thirdChoice: 'şık 3',
                  fourthChoice: 'şık 4',
                  eskiNumber: 3,
                  data: [
                    {
                      label: this.state.firstChoice,
                      value: this.state.firstChoice,
                    },
                    {
                      label: this.state.secondChoice,
                      value: this.state.secondChoice,
                    },
                    {
                      label: this.state.thirdChoice,
                      value: this.state.thirdChoice,
                    },
                    {
                      label: this.state.fourthChoice,
                      value: this.state.fourthChoice,
                    }              
                  ]
                };

                let zar = 0;
      let random1 = 0;
      let random2 = 0;
      let random3 = 0;
      let ilkSecenek = 0;
      let ikinciSecenek = 0;
      let ucuncuSecenek = 0;
      let dorduncuSecenek = 0;
      zar = Math.floor((Math.random() * 4) + 1); 
      console.log('zar sonucu: ', zar);
      console.log('number holder', this.state.NumberHolder);
      if (zar === 1)
      {
        ilkSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('first choise1: ', this.state.NumberHolder);

        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ikinciSecenek = this.props.wordsArray[random1].kelimeTurkce;
        console.log('second choise1: ', random1);

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ucuncuSecenek = this.props.wordsArray[random2].kelimeTurkce;
        console.log('third choise1: ', random2);
        console.log('third choise1 veri : ', ucuncuSecenek);

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        dorduncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('fourth choise1: ', random3);
        console.log(this.state.fourthChoice);  
        
      }

      else if (zar === 2)
      {
        
        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }                  
        ilkSecenek = this.props.wordsArray[random1].kelimeTurkce;
        console.log('first choise2: ', random1);

        ikinciSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('second choise2: ', this.state.NumberHolder);

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }                  
        ucuncuSecenek = this.props.wordsArray[random1].kelimeTurkce;        
        
        console.log('third choise2: ', random2);
        console.log('third choise2 veri : ', ucuncuSecenek);

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        dorduncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('fourth choise2: ', random3);
        console.log(this.state.fourthChoice);  
      }

      else if (zar === 3)
      {
        
        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ilkSecenek = this.props.wordsArray[random1].kelimeTurkce;   
        console.log('first choise3: ', random1);     

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        ikinciSecenek = this.props.wordsArray[random2].kelimeTurkce;
        console.log('second choise3: ', random2);

        ucuncuSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('third choise3: ', this.state.NumberHolder);
        console.log('third choise3 veri : ', ucuncuSecenek);

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        dorduncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('fourth choise3: ', random3);
        console.log(this.state.fourthChoice);  
      }

      else if (zar === 4)
      {
        
        random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random1)
        {
          random1 = Math.floor(Math.random() * this.props.wordsArray.length);
        }         
        ilkSecenek = this.props.wordsArray[random1].kelimeTurkce;   
        console.log('first choise4: ', random1);     

        random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random2 || random1 === random2)
        {
          random2 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        ikinciSecenek = this.props.wordsArray[random2].kelimeTurkce;
        console.log('second choise4: ', random2);
        

        random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        while (this.state.NumberHolder === random3 || random1 === random3 || random2 === random3)
        {
          random3 = Math.floor(Math.random() * this.props.wordsArray.length);
        }
        ucuncuSecenek = this.props.wordsArray[random3].kelimeTurkce;
        console.log('third choise4: ', random3);
        console.log('third choise14veri : ', ucuncuSecenek);

        dorduncuSecenek = this.props.wordsArray[this.state.NumberHolder].kelimeTurkce;
        console.log('fourth choise4: ', this.state.NumberHolder);  
        console.log(this.state.fourthChoice);    
      }
      this.state = { 
        // This is our Default number value
        NumberHolder: RandomNumber1,
        ilkdeger: true,
        firstChoice: 'şık 1',
        secondChoice: 'şık 2',
        thirdChoice: 'şık 3',
        fourthChoice: 'şık 4',
        eskiNumber: RandomNumber1,
        data: [
          {
            label: ilkSecenek,
            value: ilkSecenek,
          },
          {
            label: ikinciSecenek,
            value: ikinciSecenek,
          },
          {
            label: ucuncuSecenek,
            value: ucuncuSecenek,
          },
          {
            label: dorduncuSecenek,
            value: dorduncuSecenek,
          }              
        ]
      };
      RandomNumber1 = Math.floor(Math.random() * this.props.wordsArray.length);
      while (RandomNumber1 === this.state.NumberHolder)
      {
        RandomNumber1 = Math.floor(Math.random() * this.props.wordsArray.length);
      }
     
     
      this.state = { 
        // This is our Default number value
        NumberHolder: RandomNumber1,
        ilkdeger: true,
        firstChoice: 'şık 1',
        secondChoice: 'şık 2',
        thirdChoice: 'şık 3',
        fourthChoice: 'şık 4',
        eskiNumber: this.state.eskiNumber,
        data: [
          {
            label: ilkSecenek,
            value: ilkSecenek,
          },
          {
            label: ikinciSecenek,
            value: ikinciSecenek,
          },
          {
            label: ucuncuSecenek,
            value: ucuncuSecenek,
          },
          {
            label: dorduncuSecenek,
            value: dorduncuSecenek,
          }              
        ]
      };

     
      console.log('generate number sonrası data ', this.state.data);              
            }          
              
           
            return (
            
            <View style={{ flex: 1, backgroundColor: "#384065" }}>                                        
                <View style={styles.mainbody}>     
                <Text style={{ color: '#fff', fontSize: 22, marginBottom: 40, marginTop: 15 }}>
               {this.props.wordsArray[this.state.eskiNumber].kelimeIngilizce}

        </Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.button1.bind(this)}>
        <Text style={styles.buttonTextStyle}>  {this.state.data[0].label} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={this.button2.bind(this)}>
        <Text style={styles.buttonTextStyle}>  {this.state.data[1].label} </Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.button3.bind(this)}>
        <Text style={styles.buttonTextStyle}>  {this.state.data[2].label} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.button4.bind(this)}>
        <Text style={styles.buttonTextStyle}>  {this.state.data[3].label} </Text>
        </TouchableOpacity>          
             
        </View> 
                
            </View>
            );          
        }
     
                return (null);
        
                       
    }
    }
    

const mapStateToProps = ({ wordDataResponse }) => {
    const wordsArray = _.map(wordDataResponse, (val, uid) => {
        return { ...val, uid };
    });
    return { wordsArray };

};

export default connect(mapStateToProps, { myWordsListData })(MyWordsStudy);


const styles = {
      
  
    mainbody: {
       marginTop: 30,
       marginLeft: 24,
       marginRight: 24,
       marginBottom: 70,
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
  },
  container: {
            
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12   
},
buttonStyle: {
    
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 20
}
 
};

/*<RadioGroup ref='child' radioButtons={this.state.data} onPress={this.onPress} />
 this.refs.child.getInnerData();*/
