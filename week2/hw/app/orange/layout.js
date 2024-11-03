export default function Home({ children }) {
    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}

//
// <Layout>
//     <Page />
// </Layout>