
import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';


class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
           
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Midwife Internship</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>My Internships</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Internship 1</DropdownItem>
                                  <DropdownItem href="#">Internship 2</DropdownItem>
                                  <DropdownItem href="#">Internship 3</DropdownItem>
                                  <DropdownItem href="#">Internship 4</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/calendar">My Schedule</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/newForm">Add new form</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                          <NavLink to="/registrationForm">Registration</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>

        );
    }
}
export default NavbarFeatures
            
  