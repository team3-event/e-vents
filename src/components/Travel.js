import React from "react";



class Travel extends React.Component {
constructor(){
    super()
    this.state= {
        buttonStatus: "Save your trip information for later"
    }
}
    changetext = () => {
        this.setState({ buttonStatus : "Saved!"})
        this.props.journey();
    }
    render() {
        return (
            <>
                <div className=" mt-8 pb-3 w-1/4  border-b border-teal-400">
                    <h3 className="text-2xl leading-6 font-medium text-blue-900">Cheapest Flight Available</h3>
                </div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1">
                    <li key={this.props.price} className="col-span-1 drop-shadow-lg bg-white rounded-lg divide-gray-200">
                        <div className="w-1/2 items-center justify-between p-2 space-x-6">
                            <div className="flex gap-y-10 flex-col text-center">
                                <div className="flex items-center space-x-3">
                                    <h3 className="text-gray-900 text-xl text-align text-center font-medium">Departure Time: {this.props.dTime} <br></br>
                                    Arrival Time: {this.props.aTime}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-between p-6 space-x-6">
                            <div className="flex">
                                <div className="flex  items-center space-x-3">
                                    <h3 className="text-gray-900 mx-auto text-lg text-align text-center font-medium">Layovers: {this.props.stop}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-between p-6 space-x-6">
                            <div className="flex">
                                <div className="flex flex-col items-center space-x-3">
                                    <h3 className="text-gray-900 text-lg text-align text-center font-medium">price: {this.props.price}$</h3>

                                    <div className="mx-auto mt-4 flex gap-x-4">
                                        <a href={"https://www.skyscanner.com"} target="_blank" rel="noreferrer">
                                        <button
                                            type="button"
                                            className="block  px-6 py-3 border border-transparent text-base font-medium rounded-2 shadow-sm text-white bg-cyan-400 hover:bg-sky-900 focus:bg-indigo-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            
                                        >
                                            Book now
                                        </button>
                                        </a>
                                        

                                    </div>
                                    <button
                                            type="button" onClick={this.changetext}
                                            className="block mt-8 px-6 py-3 border border-transparent text-base font-medium rounded-2 shadow-sm text-white bg-emerald-400 hover:bg-sky-900 focus:bg-indigo-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            
                                        >
                                            {this.state.status}
                                        </button>
                                </div>
                            </div>


                        </div>

                    </li>
                </ul>
                </>
                )
    }
}
                export default Travel;
