import React from 'react';

import styles from './Game.scss';

class Game extends React.Component {

    constructor(props) {
        super(props);
        //create web socket connection with props.location.state.personID
    }

    render() {
        return (
            <div className={styles.game}>
                <header className={styles.header}>
                    <div>Some header with useful links</div>
                </header>
                <div className={styles.board}>
                   <div className={styles.map}>
                       Map Component
                   </div>
                </div>
                <div className={styles.editor}>
                    Editor Component
                </div>
            </div>
        )
    }
}

export default Game;