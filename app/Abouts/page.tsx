import React from "react";
const Team=[
    {id:1, alt:"Lorenzo Calabrese",src:"Lorenzo1.jpg"},
]
export default function page(){
    return(

        <div className="bg-white">
        <title>About us</title>
        {/* sezione storia */}
        <div>

        </div>
        {/* sezione Team */}
        <div className="grid grid-cols-4 gap-2">
            <img src="Lorenzo1.jpg" alt="Lorenzo Calabrese"></img>
        </div>
    </div>
    );
   
}