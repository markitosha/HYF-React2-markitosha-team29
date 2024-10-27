const Header = () => (<div>Header</div>)

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div>Hello Client Layout</div>
            {children}
        </>
    )
}