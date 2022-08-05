import React from "react";
import { MailIcon, PhoneIcon, GlobeIcon } from '@heroicons/react/solid'




class Accomodation extends React.Component {

    render() {
        return (
            <>
                <div className=" pb-5 border-b border-gray-300">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Hotels</h3>
                </div>
                <div className="container lg mx-auto">
                <ul className="grid mx-auto grid-cols-1 gap-4 xs:grid-cols-2 xs:grid-cols-3">
                    {this.props.queryData.map((hotel) => (
                        <AccItem key={hotel.name} getHotel={this.props.getHotel} hotelInfo={hotel} name={hotel.name} price={hotel.bestPrice} />))}
                </ul>
                </div>
            </>


        )
    }
}


class AccItem extends React.Component {

    saveHotel = () => {
        this.props.getHotel(this.props.hotelInfo)
    }

    render() {
        return (
            <li key={this.props.name} className=" col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className=" w-full flex items-center justify-between p-2 space-x-6">
                    <div className=" flex-1 truncate">
                        <div className="flex text-center items-center space-x-3">
                            <h3 className="text-gray-900 text-lg text-align  font-medium">{this.props.name}</h3>

                        </div>

                    </div>

                </div>
                <div>
                    <div className=" -mt-px flex divide-x divide-gray-200">
                        <div className="justify-center w-0 flex-1 flex">
                            <button onClick={this.saveHotel}
                                type="button"
                                className="block  px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Select
                            </button>
                        </div>

                    </div>
                </div>
            </li>


        )
    }
}


export default Accomodation;