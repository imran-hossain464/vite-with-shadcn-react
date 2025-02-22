import { UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "./button";

function Header() {

    const{user, isSignedIn} = useUser();


  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
        <img src="/bmw.png" width={50} height={50} alt="logo" />

        <ul className="hidden md:flex gap-16">
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</li>

        </ul>
        {
            isSignedIn ? 
            <div>
                <UserButton/>
                <Button>Submit Listing</Button>
    
            </div>
            :
       <Button>Submit Listing</Button>



        }
    </div>
  )
}

export default Header