import React, { useState } from "react";
import { open } from '@tauri-apps/plugin-dialog';

const DragDropPage: React.FC = () => {
    let [filepath, setFilepath] = useState("");
    async function handleFileChange() {

    }
    async function openFileDialog() {
        const selected = await open(
        );
        if (selected) {
            setFilepath(selected);
        }
    }

    return (
        <main className="container">
            <h1>FileLab</h1>

            <div className="file-input">
                <button onClick={openFileDialog}>Open File</button>
                <input type="file" onChange={handleFileChange}></input>
                <p>Selected file: {filepath}</p>
            </div>
        </main>
    );
};

export default DragDropPage; 