import { SignIn } from "./Login"

function Landing() {
    return (
        <div className='sec-landing flexdiv'>
            <div className='landing-content flexdiv'>
                <h1 className="site-title">Bonfire Chat</h1>
                <SignIn/>
            </div>
        </div>
    )
}

export default Landing