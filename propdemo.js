class IssueContainer extends React.Component {
    render() {
        return 
            <div>
                IssueContainer
            <div>
                Header
                <div>
                    Logo
                 </div>
                <div>
                    HOME | ABOUTUS | CONTACT US
                </div>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="search site" />
                    <button>Search</button>
                </form>
            </div>
            <div>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Task</th>
                        <th>Assigned</th>
                        <th>Status</th>
                        <th>Operation</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Srividya</td>
                        <td>UI Larning</td>
                        <td>Pankaj</td>
                        <td>Pending</td>
                        <td><a href=""/>Edit | <a href=""/> Delete</td>
                    </tr>
                    </table>
                </div>
                </div>
            }
}
ReactDOM.render(<IssueContainer/>,document.getElementById("root"));

class LogoComponent extends React.Component{
    getLogo(){
        return "Logo";
    }
    render(){
        return <h5>{this.getLogo()}</h5>
    }
}

class NavComponent extends React.Component{
    getNav(){
        return <h5>Home | About Us | Contact Us </h5>
    }
    render(){
        return <h5>{this.getNav()}</h5>
    }
}

class HeaderComponent extends React.Component{
    getHeader(){
        <div>
        <LogoComponent/>
        <NavComponent/>
        </div>
    }
    render(){
        return <h5>{this.getHeader}</h5>
    }
}