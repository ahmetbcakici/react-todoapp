
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    gorev:'',
    yapilacaklar:[],
  }

  isimDegistir = () => {
    this.setState({isim:'Mehmet'});
  }

  gorevEkle = () => {
    // this.state.yapilacaklar.push(this.state.gorev); // yanlis yontem

    // 1. yöntem
/*     let geciciDizi = this.state.yapilacaklar;
    geciciDizi.push(this.state.gorev);
    this.setState({yapilacaklar:geciciDizi}) */

    // 2. yöntem spread operatör ile
    // spread operatör = ...
    
    this.setState({yapilacaklar:[...this.state.yapilacaklar,this.state.gorev]})
  }
  
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Yapılacaklar Listesi</h1>
        <input type="text" onChange={e => this.setState({gorev:e.target.value})}/>
        <button onClick={this.gorevEkle}>Tamam</button>
        <ul>
          {/* return'ün döneceği yer */}
          {this.state.yapilacaklar.map(item => <li>{item}</li> )}
        </ul>
      </div>
    )
  }
}