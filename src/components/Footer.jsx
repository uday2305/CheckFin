import React,{Component} from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Footer extends Component{
  render(){
    return (
      <footer>
          <Nav justified="true">
            <NavItem>
              Privacy policy
            </NavItem>
            <NavItem
              title="Item">
              Terms & Conditions
            </NavItem>
            <NavItem>
              Some other professional link
            </NavItem>
          </Nav>
      <div className="text-center small copyright">
      © Acheiver (Raj+ Uday + Pankaj) 2019
          </div>
      </footer>
    );
  }
}
export default Footer;