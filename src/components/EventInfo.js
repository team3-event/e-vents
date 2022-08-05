import React from "react";
import Card from "react-bootstrap/Card"



class EventInfo extends React.Component {

    render() {
        return (
            <div className="bg-blue-900 mt-3 pt-3 pb-5">
                <div className=" mt-8 pb-3 w-3/4  border-b border-cyan-400">
                    <h3 className="text-2xl leading-6 font-medium text-stone-50">Events in the area</h3>
                </div>
                <div className="container mt-3  lg mx-auto">
                    <ul className="grid mx-auto grid-cols-2 gap-4 xs:grid-cols-2 lg:grid-cols-3">
                        {this.props.queryData.map((event) => (
                            <EventCards key={event.title} getEvent={this.props.getEvent} eventData={event} name={event.title} startDate={event.startDate} startTime={event.startTime} endDate={event.endDate} endTime={event.endTime} description={event.description} address={event.address} />))}
                    </ul>
                </div>

            </div>







        )
    }
}



class EventCards extends React.Component {
    saveEvent = () => {
        console.log(this.props.eventData);
        this.props.getEvent(this.props.eventData)
    }

    render() {
        return (
            <div>
                <li key={this.props.name} className="drop-shadow-lg col-span-1 p-1 bg-white rounded-lg shadow">
                    <div className="w-1/2 items-center justify-between p-2 space-x-6">
                        <div className="flex grow gap-y-10 flex-col text-center">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-blue-900 text-xl text-align text-center font-medium">{this.props.name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex">
                            <div className="flex  items-center space-x-3">
                                <h3 className="text-blue-900 mx-auto text-lg text-align text-center font-medium">Start Date: {this.props.startDate}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex">
                            <div className="flex  items-center space-x-3">
                                <h3 className="text-blue-900 mx-auto text-lg text-align text-center font-medium">End Date: {this.props.endDate}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-blue-900 text-lg text-align text-center font-medium">{this.props.description}</h3>

                                <div className="mx-auto flex gap-x-4">
                                    <button onClick={this.saveEvent}
                                        type="button"
                                        className="block  px-6 py-3 border border-transparent text-base font-medium rounded-2 shadow-sm text-white bg-cyan-400 hover:bg-sky-900 focus:bg-indigo-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        
                                    >
                                        Save for later
                                    </button>


                                    <button
                                        type="button"
                                        className="block  px-6 py-3 border border-transparent text-base font-medium rounded-2 shadow-sm text-white bg-cyan-400 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Book now
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>


                </li>
            </div>
        )
    }
}

export default EventInfo;