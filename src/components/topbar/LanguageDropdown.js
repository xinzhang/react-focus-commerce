import React from 'react';

class LanguageDropdown extends React.Component{
  render() {
    return (
      <div className="language">
          <form action="#" method="post" encType="multipart/form-data" id="language">
              <div className="btn-group">
                  <button className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src="image/flags/gb.png" alt="English" title="English" /> <i className="fa fa-caret-down"></i>
                  </button>
                  <ul className="dropdown-menu">
                      <li><a href="#"><img src="image/flags/gb.png" alt="English" title="English" />English</a></li>
                  </ul>
              </div>
          </form>
      </div>
    )
  }
}

export default LanguageDropdown;
