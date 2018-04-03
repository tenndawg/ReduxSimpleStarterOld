import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        return(
            <div>
                <input 
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})}/>
                <button onClick={e => console.log(this.state.term)}>Click Me!</button>
            </div>
        );
    }
}

export default SearchBar;