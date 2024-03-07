import ExternalFunction from './Ex';


function Greeting() {
    return (
        <header>
            <h1>Welcome to react js</h1>
            <ExternalFunction></ExternalFunction>
            <FullName></FullName>
            <LastName></LastName>

        </header>
    )
}

const FullName = () => {
    return (
        <h1>i am praveen kumar</h1>
    )
}

const LastName = () => {
    return (
        <div>
            <h1>my lastName is kumar</h1>
            <Address> </Address>
        </div>
    );
}

const Address = () => {
    return (
        <p>my address:THirumpoondi</p>
    )
}

export default Greeting;