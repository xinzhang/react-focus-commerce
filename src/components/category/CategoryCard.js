import React from 'react';

class CategoryCard extends React.Component {
    render() {
      return (
        <div className="column-block">
            <div className="columnblock-title">Categories</div>
            <div className="category_block">
                <ul className="box-category treeview-list treeview">
                    <li><a href="#" className="activSub">Desktops</a>
                        <ul>
                            <li><a href="#">PC</a></li>
                            <li><a href="#">MAC</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className="activSub">Laptops &amp; Notebooks</a>
                        <ul>
                            <li><a href="#">Macs</a></li>
                            <li><a href="#">Windows</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className="activSub">Components</a>
                        <ul>
                            <li><a href="#">Mice and Trackballs</a></li>
                            <li><a href="#" className="activSub" >Monitors</a>
                                <ul>
                                    <li><a href="#"  >test 1</a></li>
                                    <li><a href="#"  >test 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Windows</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Software</a></li>
                    <li><a href="#">Phones & PDAs</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">MP3 Players</a></li>
                </ul>
            </div>
        </div>
      );
    }
}

export default CategoryCard;
