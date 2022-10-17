import { useSelector } from "react-redux";
import {Route, Routes} from "react-router-dom";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import {CheckingAuth} from "../ui";

export const AppRouter = () =>{

    const { status } = useSelector( state => state.auth );

    if( status === 'checking' ){
        return <CheckingAuth />
    }

    return(
        <Routes>
            { /* Login & Register */ }
            <Route path="/auth/*" element={ <AuthRoutes /> }/>

            {/* JournalApp */}
            <Route path="/*" element={ <JournalRoutes /> }/>

        </Routes>
    );

}