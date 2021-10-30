import React, { Component } from 'react';

class Lang extends Component {
    //     this.state = {
    //         tittleLang: 'Timofey Manko',
    //         subtitleLang: 'Fron-end developer'
    //     }
    // }

    // setEng = (e)=>{
    //     this.setState({
    //         tittleLang: 'Timofey Manko',
    //         subtitleLang: 'Fron-end developer' 
    //     })
    //     console.log(e.target.classList.value);
    // }
    // setRus = (e)=>{
    //     this.setState({
    //         tittleLang: 'Тимофей Манько',
    //         subtitleLang: 'Fron-end разработчик'
    //     })
    //     console.log(e.target.classList.value);
    // }


    render() {
        return (
            <div className="lang">
                <span className = 'rus'>rus</span>
                <span className = 'eng'>eng</span>
            </div>
        );
    }
}

export default Lang;