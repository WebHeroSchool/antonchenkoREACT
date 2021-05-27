import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
            {
                value: 'write new app',
                isDone: true
            },
            {
                value: 'write props',
                isDone: true
            },
            {
                value: 'will done all deals',
                isDone: false
            }
        ]
    };
onClickDone = isDone => console.log(isDone);

    render () {
        return( 
        <div className={styles.wrap}>
                <h1 className={styles.title}>Important deals</h1>
                <InputItem />
                <ItemList items={this.state.items}/>
                <Footer count={1} />
        </div>);
    }
};

    

export default App;