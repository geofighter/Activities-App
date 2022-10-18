import {useDispatch, useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import {CheckingAuth} from "../ui";
import {useCheckAuth} from "../hooks/useCheckAuth.js";

export const AppRouter = () =>{

    const { status } = useCheckAuth();

    if ( status === 'checking' ){
        return <CheckingAuth />;
    }

    return(
        <Routes>
            {
                status === 'authenticated'
                ?
                //home
                <Route path="/*" element={ <JournalRoutes /> }/>
                :
                /* Login & Register */
                <Route path="/auth/*" element={ <AuthRoutes /> }/>
            }
            <Route path="/*" element={ <Navigate to="/auth/login" /> }></Route>
        </Routes>
    );

}