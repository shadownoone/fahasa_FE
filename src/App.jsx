import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
