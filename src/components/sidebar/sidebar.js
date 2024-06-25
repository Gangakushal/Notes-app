import React, { useContext, useState } from "react";
import { NotesContext } from "../../App";
import './sidebar.css'

const colors = [
    "#ebcfad",
    "#f5b0a4",
    "#84dada",
    "#eff5b1",
    "#9adbf6",
];

function Sidebar(){

    const {addNote} = useContext(NotesContext)

    const [selectedTheme, setSelectedTheme] = useState(colors[0])
    return(
        <div className="sidebar">
            <button className="add-note-btn" onClick={()=>addNote(selectedTheme)}>
                <i className="fa fa-plus"></i>
            </button>
            <div className="colors-input-list">
                {colors.map(color => (
                    <div className="color-input" > 
                        <input type="radio"  name="color-input" id={"color-"+color} value={color} checked={selectedTheme === color} onChange={(e) => setSelectedTheme(color)}/>
                        <label htmlFor={"color-"+color} style={{backgroundColor: color}}></label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;