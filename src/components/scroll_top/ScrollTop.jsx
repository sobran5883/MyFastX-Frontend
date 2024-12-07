// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {    
//     document.body.scrollTop = 0;
//   }, [pathname]);

//   return null;
// }
// export default ScrollToTop;


// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Scroll to the top with smooth behavior
//     document.body.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);

//   return null;
// }
// export default ScrollToTop;


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;