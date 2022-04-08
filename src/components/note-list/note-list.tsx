import { FunctionComponent, useState } from 'react';
import { Note } from '../../models/note';

import './note-list.scss';

interface NoteListProps{
    notes: Note[],
    setCurNote: Function,
    openSideBar: boolean
}

export const NoteList: FunctionComponent<NoteListProps> = ({notes, setCurNote, openSideBar}) => {
    return (
        <div className={openSideBar ? 'sidebar open': 'sidebar'}>
            <ul>
                <li className='list-title'>Available Notes</li>
                <hr/>
                {
                notes.map((note, index) => 
                    <li className='list-item' key={index} onClick={() => setCurNote(note)}>
                        <i className="fa-solid fa-note"></i>
                        {note.title}
                    </li>
                )
                }
            </ul>
        </div>
        
    );
}