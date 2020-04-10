import React, { Component } from 'react'
import './Style.css';

export default class App extends Component {

  state = {
    gorev:'',
    yapilacaklar:['ekmek al'],
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
    
    this.setState({yapilacaklar:[...this.state.yapilacaklar,this.state.gorev],gorev:''});

  }
  
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Yapılacaklar Listesi</h1>
        <input type="text" value={this.state.gorev} onChange={e => this.setState({gorev:e.target.value})}/>
        <button onClick={this.gorevEkle}>Ekle</button>
        <ul>
          {/* return'ün döneceği yer */}
          {this.state.yapilacaklar.map(item => <li className="item">{item} <span>&times;</span></li> )}
        </ul>
      </div>
    )
  }
}