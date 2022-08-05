import React from "react";
import Card from "react-bootstrap/Card"



class EventInfo extends React.Component {

    render() {
        return (
           
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {this.props.queryData.map((event) => (
                    <EventCards key={event.name} getEvent={this.props.getEvent} eventData={event} name={event.title} startDate={event.startDate} startTime={event.startTime} endDate={event.endDate} endTime={event.endTime} description={event.description} address={event.address} />))}
                </ul>
                   
                   
                   
                   
                   
                   
                   
        )
    }
}



class EventCards extends React.Component {
    saveEvent = () => {
        
        this.props.getEvent(this.props.eventData)
    }

    render() {
        return (
            <div>
                <li key={this.props.name} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-lg text-align text-center font-medium">{this.props.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-lg text-align text-center font-medium">Start Date: {this.props.startDate}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-lg text-align text-center font-medium">{this.props.description}</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <button onClick={this.saveEvent}
                                    type="button"
                                    className="block items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Select
                                </button>
                            </div>

                        </div>
                    </div>
                </li>
            </div>
        )
    }
}

export default EventInfo;