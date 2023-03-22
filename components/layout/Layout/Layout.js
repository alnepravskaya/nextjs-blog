import MainNavigation from "../MainNavigation/MainNavigation";

const Layout = (props) => {
    return <>
        <MainNavigation/>
        <main>{props.children}</main>
    </>
}

export default Layout;
