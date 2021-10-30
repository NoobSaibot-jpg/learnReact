import { Component } from 'react';
import Card from './components/card/card';
import Nav from './components/nav/nav';

import './main.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tittleLang: 'Timofey Manko',
      subtitleLang: 'Fron-end developer'
  }
}

setLang = (e)=>{
  if (e.target.classList.value === 'rus'){
    this.setState({
      tittleLang: 'Тимофей Манько',
      subtitleLang: 'Fron-end разработчик'
    })
  }
  else {
    this.setState({
      tittleLang: 'Timofey Manko',
      subtitleLang: 'Fron-end developer'})
    }
}



  

  render() {
    const{tittleLang, subtitleLang}= this.state
    return (
      
      <>
        <Nav/>
        <Card title={tittleLang} subtitle={subtitleLang}/>
        {/* <Lang onClick = {this.setLang}/> */}
        <div className="lang" onClick = {this.setLang}>
          <span className = 'rus'>rus</span>
          <span className = 'eng'>eng</span>
        </div>
      </>
    );
  }
}

export default App;
