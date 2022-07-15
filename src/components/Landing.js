import { SignIn } from "./Login"

function Landing() {
    return (
        <div className='sec-landing'>
            <div className='landing-content'>
                <h1 className="site-title">Bonfire Chat</h1>
                <SignIn/>
            </div>
        </div>
    )
}

export default Landing