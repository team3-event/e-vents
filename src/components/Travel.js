import React from "react";
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"


class Travel extends React.Component {
    render() {
        return (
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <li key={this.props.price} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-lg text-align text-center font-medium">{this.props.price}</h3>

                            </div>

                        </div>

                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-lg text-align text-center font-medium">{this.props.url}</h3>

                            </div>

                        </div>

                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-lg text-align text-center font-medium">{this.props.dtime}</h3>

                            </div>

                        </div>

                    </div>
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                            <div className="flex items-center space-x-3">
                                <h3 className="text-gray-900 text-lg text-align text-center font-medium">{this.props.atime}</h3>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="w-0 flex-1 flex">
                                <button
                                    type="button"
                                    className="block items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Select
                                </button>
                            </div>

                        </div>
                    </div>
                    <button  type="button" onClick={this.props.journey}
                                    className="block items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save Journey
                    </button>
                </li>
            </ul>
        )
    }
}
export default Travel;
