/*
 __________________________________________
|                                          |
|  Service Traffic                         |
|  __________________  __________________  |
| |                  ||                  | |
| |                  ||                  | |
| |     INCOMING     ||     OUTGOING     | |
| |                  ||                  | |
| |                  ||                  | |
| |__________________||__________________| |
|                                          |
|  Failures                                |
|  ___________  ___________  ___________   |
| |           ||           ||           |  |
| |           ||           ||           |  |
| |  SERVER   ||  REQUEST  ||  SERVER   |  |
| |  ERRORS   ||  ERROR    ||  WARNINGS |  |
| |           ||           ||           |  |
| |___________||___________||___________|  |
|  ___________                             |
| |           |                            |
| |           |                            |
| |  TIMEOUTS |                            |
| |           |                            |
| |           |                            |
| |___________|                            |
|__________________________________________|


var serviceData = {
    id: "dashboard-xyz",
	groups: [
		{
			name: "Service Traffic",
			chartsPerRow: 2,
			graphs: [
				{
					title: "Incoming",
					datasetId: "58f17558-ced3-11e9-bb65-2a2ae2dbcce4",
				},
				{
					title: "Outgoing",
					datasetId: "59366d58-2102-485d-941a-f644b79c27a8",
				},
			],
		},
		{
			name: "Failures",
			chartsPerRow: 3,
			graphs: [
				{
					title: "Server Errors",
					datasetId: "bc7bc721-5d5a-41cc-956d-eaedacbdb572",
				},
				{
					title: "Request Errors",
					datasetId: "7b5f17ef-06ac-4e05-b13b-1856e1dd3bea",
				},
				{
					title: "Server Warnings",
					datasetId: "9caca8d8-afc9-42b8-bb9b-ac2b61d8f4dc",
				},
				{
					title: "Timeouts",
					datasetId: "041a26bc-e48a-46d0-b720-769b3188964f",
				},
				{
					title: "Unknown Errors",
					datasetId: "802fbd1e-a656-4b8d-a1b5-6e4b529b0a81",
				},
			],
		}
	]
}
*/


// src
  // api
    // DashboardApi.js
 // helpers 
    // parseDashboardData.js
 // components
    // Graph.js
 // App.js
 


// DashboardApi.js
const url = "DASHBOARD_URL"
export const getDashboard = async () => {
    const response = await fetch(url)
    response = await response.json()
    return response
}


// parseDashboardData.js
const SERVICE_TRAFFIC = "Service Traffic"
const FAILURES = "Failure"

function createMap = (data) => {
    let results = {}
    
    data.forEach(error => {
            // test if map has type of failure
            if(results[error.title]) {
                //if yes, push error.datasetId 
                results[error.title] = results[error.title].push(error.datasetId)
            }else {
                // initialize array
                results[error.title] = [];
                // push error to object
                results[error.title].push(error.datasetId)
            }
        })
return results; 
}

export parseDashboardData = (data) => {
    let failures = data && data.groups && data.groups.find(group => group.name === SERVICE_TRAFFIC)
    let serviceTraffic = data && data.groups && data.groups.sericeTraffic.find(group => group.name === FAILURES)
    
    let failuresData = {}

    
    // test we have failures
    if(failures) failuresData = createMap(failures.graph)
    
    // test we have failures
    if(serviceTraffic) serviceData = createMap(serviceTraffic.graph)
    
    return {
        failures: failuresData, // failures.timeouts -> [...datasets]
        serviceTraffic: serviceData
    }
}

// Graph.js
import react from 'react'

export default Graph = props => {
    //props.data = {failures: {
      //  service: [],
        //warining:
    // }}[serivce]
    
    const data = props.data[props.type];
    const boardType = props.type
    
    return (
        <div className={${boardType}-container}>  
                <h3>{boardType}</h3> 
                </hr>
                <div className={${boardType}-log-container}>
                {
                    data.map(dataSet => {
                        return <div className={${boardType}-log-item-}>{dataSet}</div>
                    })
                }
                </div>
        </div> 
    )
}

//App.js
import React, {Component} from 'react';
import {getDashboard} from './api/DashboardApi';
import {parseDashbaordData} from './helpers/parseDashbaordData';
import Graph from './components/Graph';


export class App extends Component {
    state = {
        data: {},
        loading: false;
    }
    
    // load data when component mounts 
    async componentDidMount() {
        let data = await getDashboardData()
        data = parseDashboardData(data)
        this.setState({data: data})
    }
    
    render() {
        <div id="amazon-dashboard" className="amazon-dashboard">
            <div className="service-traffic">
                <Graph data={this.data.serviceTraffic} type={"incoming"}/>
                <Graph data={this.data.serviceTraffic} type={"outgoing"}/>
            </div>
            <div className="failures">
                <Graph data={this.data.failures type={"failures"}/>
                <Graph data={this.data.failures} type={"warning"}/>
                <Graph data={this.data.failures} type={"warnings"}/>
                <Graph data={this.data.failures} type={"timeouts"}/>
                <Graph data={this.data.failures} type={"unknown"}/>
            </div>
        </div>
    }
    
}

// jablanch@amazon.com