import React, {Component} from 'react';
import C21Header from "./components/C21Header";
import C21Length from './components/C21Length';
import C21Footer from "./components/C21Footer";

export default class App extends Component<{}, {}> {

    render() {
        return(
            <div>
                <C21Header title={"Chromosome 21"} />
                <C21Length />
                <C21Footer />
            </div>
        )
    }
};
