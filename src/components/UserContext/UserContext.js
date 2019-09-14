import React from 'react';
import {Dialog} from '@reach/dialog';
import '@reach/dialog/styles.css';
import './UserContext.css';


const UserContext = React.createContext({
    user: { username: 'Anonymous Andy' },
});
export const UserProvider = props => {
    const [isShowingOverlay, setShowingOverlay] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const [input, setInput] = React.useState('');

    React.useEffect(() => {
        if (input.trim().length >0) {
            setUser({ id: input, username: input });
        } else {
            setShowingOverlay(true);
        }

    }, [user]);

    async function saveUsername(e) {
        e.preventDefault();
        if (!input.trim().length) {
            return;
        }

        setUser({ id: input, username: input });
        setShowingOverlay(false);
    }

    if (isShowingOverlay) {
        return (

            <Dialog isOpen={isShowingOverlay}>
                <form onSubmit={saveUsername}>
                    <label className="username-dialog">
                        Enter a username:
                        <br/>
                        <input
                            onChange={e => setInput(e.target.value)}
                            value={input}
                            placeholder="Your Name"
                        />
                        <button>Continue</button>
                    </label>
                </form>
            </Dialog>
        );
    }
    if (!user) {
        return null;
    }
    return <UserContext.Provider value={{user}} {...props} />;

};

export function useUser() {
    /*const {user} = React.useContext(UserProvider);
    return user;*/
    debugger;
    return {username:"asdfasdf"};
}