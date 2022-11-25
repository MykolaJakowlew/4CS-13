import React from "react";
import './style.css';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

/**
 * 
 * @param {Object} props 
 * @param {number} props.count 
 * @param {string} props.title 
 * @param {string} props.description 
 * @param {string} props.linkText 
 * @param {'left' | 'right'} props.direction 
 * @returns 
 */
function Card (props) {
 const {
  description,
  count = -1000,
  title = "PLACEHOLDER",
  linkText,
  direction
 } = props;
 const { ref, inView } = useInView({
  /* Optional options */
  threshold: 0.1,
  triggerOnce: true,
  onChange: (inView) => {
   console.log(`${title} inView:${inView}`);
  }
 });

 const classList = ['data-card'];
 if (inView) {
  classList.push(`card-appears-${direction}`);
  // classList.push('card-appears-' + direction);
  // if (direction === 'left') {
  //  classList.push(`card-appears-left`);
  // } else {
  //  classList.push(`card-appears-right`);
  // }
 } else {
  classList.push(`card-disappears-${direction}`);
 }
 // const [runCount, setRunCount] = React.useState(0);
 // if (runCount < count) {
 //  setTimeout(() => {
 //   setRunCount(runCount + 1);
 //  }, 1000);
 // }
 // setInterval(() => {
 //  debugger
 //  setRunCount(runCount + 1);
 // }, 1000);
 return (
  <a ref={ref} href="#" className={classList.join(' ')}>
   {inView
    ? <CountUp end={count} duration={1.75} startOnMount={true}>
     {({ countUpRef, start }) => (
      <div>
       <h3 ref={countUpRef} />
      </div>
     )}
    </CountUp>
    : null
   }
   <h4>{title}</h4>
   <p>{description}</p>
   <span class="link-text">
    View All {linkText}
    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD" />
    </svg>
   </span>
  </a>
 );
}

export default Card;