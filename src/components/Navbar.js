import { navbar } from "../products";
import NavProduct from "./NavProduct";

export default function Nav(){

    return (
        <div className="nav">
            {navbar.map((navi)=><NavProduct product={navi}/>)}
        </div>
    )
}