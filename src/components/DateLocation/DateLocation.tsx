import React, { useEffect } from 'react';
import gsap from 'gsap';
import classNames from "classnames";
import styles from "./DateLocation.module.scss";


export type DateLocationProps = {
  className?: string
  date: string[]
  location: string
}

export const DateLocation: React.FC<DateLocationProps> = ({ className, date, location }) => {
  
  useEffect(() => {
    gsap.fromTo(`.${styles.date} span`, 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(`.${styles.location}`, 
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className={classNames(className, styles.dateLocation)}>
      <div className={styles.date}>
        {date.map((part, index) => (
          <span key={index}>{part}</span>
        ))}
      </div>
      <p className={styles.location}>{location}</p>
    </div>
  );
};
