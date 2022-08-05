import React from "react";





class Accomodation extends React.Component {

    render() {
        return (
            <>
                <div className=" mt-8 pb-3 w-3/4 border-b border-blue-900">
                    <h3 className="text-2xl leading-6 font-medium text-blue-900">Hotels</h3>
                </div>
                <div className="container mt-3 lg mx-auto">
                    <ul className=" grid mx-auto grid-cols-2 gap-4 xl:grid-cols-2 xs:grid-cols-3">
                        {this.props.queryData.map((hotel) => (
                            <AccItem key={hotel.name} allData={this.props.allData} getHotel={this.props.getHotel} hotelInfo={hotel} name={hotel.name} price={hotel.bestPrice} />))}
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
        //console.log(this.props.allData);
        return (
            <li key={this.props.name} className="   col-span-1 bg-white  drop-shadow-lg divide-gray-200">
                <div className=" w-1/2 items-center gap-x-4 justify-between p-2 space-x-6">
                    <div className="  flex  gap-y-10 flex-col text-center ">
                        <h3 className="mx-auto text-gray-900 text-xl text-align  font-medium">{this.props.name}</h3>
                        <div className="flex gap-x-4">
                            <button onClick={this.saveHotel}
                                type="button"
                                className="block  px-6 py-3 border border-transparent text-base font-medium rounded-2 shadow-sm text-white bg-cyan-400 hover:bg-sky-900 focus:bg-indigo-400 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                
                            >
                                Save for later
                            </button>
                            <a href={`https://www.hotels.com/Hotel-Search?${this.props.name}&destination=${this.props.allData.arrivingCity}`} target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="block  px-6 py-3 border border-transparent text-base font-medium rounded-2 shadow-sm text-white bg-cyan-400 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Book now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}


export default Accomodation;