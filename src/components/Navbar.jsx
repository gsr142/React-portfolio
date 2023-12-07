import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      {...props}
    />
  );
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
        <LinkTab label="About Me" href="/" />
        <LinkTab label="Portfolio" href="/portfolio"/>
        <LinkTab label="Contact" href="contact"/>
      </Tabs>
    </Box>
  );
}
// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-primary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Greg Richardson
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">
//                   About Me
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="portfolio">
//                   Portfolio
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="contact">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
