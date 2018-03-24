import React from 'react';

class Game extends React.Component {

    constructor(props) {
        super(props);
        //create web socket connection with this.props.location.state.personID
    }

    render() {
        return (
            <div className='game'>
                <div className='board'>
                    Board Component
                </div>
                <div className='editor'>
                    Editor Component
                </div>
            </div>
        )
    }
}

export default Game;