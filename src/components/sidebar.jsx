import { Link } from 'react-router-dom';


function Sidebar () {
  return(
    <div id="sideBar">
        <h2>FixMyCampus</h2>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/submit">Submit Report</Link></li>
            <li><Link to="/reports">View Reports</Link></li>
            </ul>
        </nav>
    </div>
  );
}

export default Sidebar;