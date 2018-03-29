import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>
const DestinationNew = () => <h2>DestinationNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/destinations" component={Dashboard} />
                    <Route path="/destinations/new" component={DestinationNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;