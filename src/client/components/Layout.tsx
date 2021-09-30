import React from 'react';

const Layout = ({children}: LayoutProps) => {
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    {children}
                </div>
            </section>
        </main>
    )
}
interface LayoutProps {
    children: React.ReactNode
}
export default Layout;
