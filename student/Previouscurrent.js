import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Coursecards from "./Coursecards";

function Previouscurrent(){
    

    return (
        <>
            <Tabs
            id="select-courses-category"
            className="mb-3"
            defaultActiveKey="current"
            >
                <Tab eventKey="current" title="Current Courses">
                    <Coursecards></Coursecards>
                    <Coursecards></Coursecards>
                    <Coursecards></Coursecards>

                </Tab>
                <Tab eventKey="previous" title="Previous Courses">
                    previous
                </Tab>
          
            </Tabs>
        </>
    )
}

export default Previouscurrent