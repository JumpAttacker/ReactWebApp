import React from "react";
import {Redirect, Route} from "react-router-dom";

export interface IPrivateRouteProps {
    children: any,
    exact?: boolean,
    path: string,
    authed: boolean,
    isReverse?: boolean,
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({children, authed, isReverse, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                authed ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: isReverse ? '/' : "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute