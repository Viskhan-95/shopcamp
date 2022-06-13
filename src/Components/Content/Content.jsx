import React from 'react';
import styles from './content.module.css';


const Content = (props) => {
    const prod = props.data;
    const listProducts = prod.map((item) => {
        return <div className={styles.container}>
                <img className={styles.photo} src={item.photo} alt="" />
                <p className={styles.prise}>{item.price} <span id={styles.old_price}>{item.oldPrice}</span></p>
                <p className={styles.name}>{item.name}</p>
                <button>Купить</button>
            </div>
     
        
    })
    return (
        <div className={styles.main} >
            {listProducts}
        </div>
    );
};

export default Content;