import Header from "../components/Header"

const withHeader = (Component: React.ComponentType) => {
    const Wrapper = () => {
        return (
            <>
                <Header />
                <Component />
            </>
        )
    }

    return Wrapper
}

export default withHeader