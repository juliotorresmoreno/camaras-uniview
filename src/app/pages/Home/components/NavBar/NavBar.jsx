
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav, NavItem, NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Icon } from 'react-fa';
import { actionsCreator as aCauth } from '../../../../actions/auth';
import { connect } from 'react-redux';
import classnames from 'classnames';

const mapProps = (state) => ({
    
});

class NavBar extends React.PureComponent {
    state = {
        isNavOpen: false
    }
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(aCauth.logout())
            .then(() => {
                const { location } = window;
                window.localStorage.clear();
                if (location.href === "/") {
                    location.reload();
                    return;
                }
                location.href = "/";
            });
    }
    render() {
        const { sources, selected } = this.props;
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <NavbarBrand href="/">
                        &nbsp;&nbsp;
						<Icon name="home" />
                        &nbsp;&nbsp;
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {selected ?
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Archivo
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={this.handleArchivo}>
                                            Abrir
                                        </DropdownItem>
                                        <DropdownItem onClick={this.toggleSave}>
                                            Guardar
                                        </DropdownItem>
                                        <DropdownItem onClick={this.handlePrint}>
                                            Inprimir
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown> : false}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Formato
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {sources.map((value, index) => (
                                        <DropdownItem
                                            className={classnames({ active: selected === value })}
                                            onClick={this.handleSelected(value)}
                                            value={value} key={index}>
                                            {value}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="" onClick={this.handleLogout}>
                                    Logout
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <input
                    type="file" multiple={false}
                    onChange={this.handleFileChange}
                    style={{ display: 'none' }}
                    ref={(el) => this.file = el} />

            </React.Fragment>
        );
    }
}

export default connect(mapProps)(NavBar);
