import { SignOut } from './Login'
import { db, auth } from '../fbaseapp.js'

function Nav() {

    const { uid, photoURL, name } = auth.currentUser

    return (
        <div className='top-nav'>
            <h1>Bonfire Chat</h1>
            {/* user first name */}

            <span><button className='uname'>{auth.currentUser.displayName.split(' ')[0]}</button><SignOut /></span>

        </div>
    )
}

export default Nav