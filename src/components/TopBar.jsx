import React from "react";
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
const TopBar =() => {
    return (
        <div>
            <div>
                <BsChatSquareDots />
                <h1>Holiday_Visit</h1>
            </div>
            <div>
                <div>
                    <AiOutlineClockCircle/>
                    <p>9AM - 5AM</p>
                </div>
                <div>
                    <AiFillPhone/>
                    <p>+94 764-615-235</p>
                </div>
                <button>Get a Free Quote</button>
            </div>
        </div>
    )

}

export default TopBar