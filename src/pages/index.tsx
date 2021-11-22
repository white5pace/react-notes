import { lazy } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { ProtectedRoute } from 'processes/proteted-route/protected-route';
import { AuthPage } from 'pages/auth/index'
const NotesListPage = lazy(() => import("./notes-list"));
const NoteDetailsPage = lazy(() => import("./note-details"));
const NoteCreatePage = lazy(() => import("./note-create"));

export const Routing = () => {
    return (
        <Switch>
            <AuthPage exact path="/login" />
            <ProtectedRoute exact path="/" component={NotesListPage}/>
            <ProtectedRoute exact path="/edit/:noteId" component={NoteDetailsPage} />
            <ProtectedRoute exact path="/create" component={NoteCreatePage} />
            <Redirect to="/" />
        </Switch>
    );
};
