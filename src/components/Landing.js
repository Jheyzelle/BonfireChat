import { SignIn } from "./Login"

function Landing() {
    return (
        <div class='sec-landing'>
            <div class='landing-content'>
                <h1 className="site-title">Bonfire Chat</h1>
                <SignIn/>
            </div>
        </div>
    )
}

export default Landing