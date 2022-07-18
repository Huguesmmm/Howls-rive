import { HowlFace } from "./HowlFace";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <HowlFace />
                <h1>Howl's dev blog</h1>
            </div>
        </div>
    );
}
