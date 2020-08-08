import React from "react";
import {Link} from "react-router-dom";

const FilesPanel = () => {
    return (
        <>
            <div style={{marginTop: '50px'}}>
                <div>
                    <Link to="/app_Data/file_1.txt" target="_blank" download>file_1.txt</Link>
                </div>
                <Link to="/app_Data/anotherFile.pdf" target="_blank" download>anotherFile.pdf</Link>
                <div>
                    <Link to="/app_Data/some_zip_file.zip" target="_blank" download>some_zip_file.zip</Link>
                </div>
            </div>
        </>
    )
}
export default FilesPanel