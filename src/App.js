import React, { Component } from 'react'

export default class App extends Component {

  state = {
    gorev:'',
    yapilacaklar:['marketten makarna al','matematik odevi yap','defteri elden gecir'],
  }

  isimDegistir = () => {
    this.setState({isim:'Mehmet'})
  }

  gorevEkle = () => {
    this.state.yapilacaklar.push(gorev);
  }
  
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Yapılacaklar Listesi</h1>
        <input type="text" onChange={e => this.setState({gorev:e.target.value})}/>
        <button onClick={}>Tamam</button>
        <ul>
          {/* return'ün döneceği yer */}
          {this.state.yapilacaklar.map(item => <li>{item}</li> )}
        </ul>
      </div>
    )
  }
}
