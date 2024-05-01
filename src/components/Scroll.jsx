import React, { useRef } from 'react';
import styles from './Scroll.module.css';

export default function Scroll() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100; 
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100; 
    }
  };

  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  return (
    <div className={styles.container}>
      <button onClick={scrollLeft} className={styles.btn}>Scroll Left</button>
      <div className={styles.scrollWrapper} ref={containerRef}>
        <ul className={styles.array}>
          {arr.map((value, index) => (
            <li key={index} className={styles.list}>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={scrollRight}className={styles.btn}> Scroll Right</button>
    </div>
  );
}
