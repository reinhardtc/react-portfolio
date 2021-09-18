import React from 'react';

function Nav(props) {
  const tabs = ['Home', 'About', 'Portfolio', 'Contact'];

  return (
    <header className="flex-row">
      <nav className="flex-row">
        <ul className="nav-row">
          {tabs.map(tab => (
            <li className="navListItem" key={tab}>
              <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={props.currentPage === tab ? 'navActive' : 'navInactive'}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
