import { FunctionComponent } from 'react';

import { Note } from '../../models/note';

import './note-view.scss';

interface NoteViewProps {
    curNote?: Note
}

export const NoteView: FunctionComponent<NoteViewProps> = ({curNote}) => {
    return (
        <div className='note-view'>
            <div className='title-container'>
                <h3 className='title-text'>{curNote?.title != undefined ? curNote.title : "Select a Note"}</h3>
            </div>
            <p className='note-body'>{curNote?.note != undefined ? curNote.note : " "}</p>
        </div>
        );
}