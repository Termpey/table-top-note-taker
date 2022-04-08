import { FunctionComponent, useState } from 'react';

import { NoteList } from '../note-list/note-list';
import { NoteView } from '../note-view/note-view';
import { NavBar } from '../nav-bar/nav-bar';

import './main-page.scss'

const noteList = [
    {title: 'Starting Note', note: "Look at this really cool note", timestamp: new Date()},
    {title: 'Second Note', note: "STUFF", timestamp: new Date()},
    {title: 'Third Note', note: "STUFF2", timestamp: new Date()},
    {title: 'Fourth Note', note: "3", timestamp: new Date()}
];

export const MainPage: FunctionComponent = () => {
    const [curNote, setCurNote] = useState(noteList[0]);
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <div className={openSideBar ? 'main-page-container menu-opened' : 'main-page-container'}>
            <NavBar openNoteListMenu={setOpenSideBar}/>
            <NoteView curNote={curNote}/>
            <NoteList notes={noteList} setCurNote={setCurNote} openSideBar={openSideBar}/>
        </div>
    )
}