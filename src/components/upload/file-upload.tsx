import React, { useContext } from 'react';
import UploadBtn from '@/components/common/btn/upload-btn';
import FileContext from './context/file-context';
import {  } from "@/api/http-client/client";

const FileUpload: React.FC = () => {
    const { file, setFile } = useContext(FileContext);
    const handleValidFile = (file: File) => {
        // const response = fetch('http://localhost:8080/', {
            //     method: 'POST',
            //     body: formData,
            // }).then(value => console.log(value));
        setFile(file);
    };

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4 text-white">File Upload</h1>
            <UploadBtn handleValidFile={handleValidFile}/>
        </div>
    );
};

export default FileUpload;
