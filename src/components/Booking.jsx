import React from "react";

const Booking = () =>{
    return(
        <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div>
                    <label >Destinations</label>
                    <select name="" id="">
                        <option>Grand Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Cozumel</option>
                    </select>
                </div>

                <div>
                    <div>
                        <label>Check-In</label>
                        <input type="date"/>
                    </div>
                    <div>
                        <label>Check Out</label>
                        <input type="date"/>
                    </div>
                </div>
                <div>
                    <label>Search</label>
                    <button>Rates & Availability</button>
                </div>
            </form>
        </div>

    )
}

export default Booking