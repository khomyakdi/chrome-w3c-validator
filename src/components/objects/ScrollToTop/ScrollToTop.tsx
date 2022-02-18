import { useEffect, useState } from 'react';
import { Button } from '../../primitives/Button';
import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setVisible(window.innerHeight / 3 < window.scrollY);
    }, 300);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={onClick} className={visible ? styles.btn: styles.hidden}>
      To Top
    </Button>
  );
};

export default ScrollToTop;

function throttle(fn: () => void, wait: number) {
  let time = Date.now();
  
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}