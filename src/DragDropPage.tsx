import React from "react";

const DragDropPage: React.FC = () => {

    async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {

    }

    return (
        <main className="container">
            <h1>FileLab</h1>

            <form
                className="row"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input type="file" multiple onChange={handleFileChange} />
            </form>
        </main>
    );
};

export default DragDropPage;