"use client";
import React, { useState } from 'react';
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';
import UploadFileIcon from '@mui/icons-material/UploadFile';
const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadStatus, setUploadStatus] = useState('');
  const cancelTokenSourcesRef = React.useRef({});

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleDeleteFile = (fileName) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      files.forEach((file) => formData.append('files', file));
      if (files.length === 0) {
        console.log('No files selected for upload.');
        alert('Please select files to upload.');
        return;
      }
      // Initialize progress and cancellation status for each file
      const progressInit = {};
      cancelTokenSourcesRef.current = {}; // Clear previous cancel tokens
      files.forEach((file) => {
        progressInit[file.name] = { progress: 0, status: 'Uploading' };
        cancelTokenSourcesRef.current[file.name] = axios.CancelToken.source();
      });
      setUploadProgress(progressInit);

      // Upload files to disk
      await Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const config = {
              headers: { 'Content-Type': 'multipart/form-data' },
              onUploadProgress: (progressEvent) => {
                if (
                  cancelTokenSourcesRef.current[file.name].token.reason ===
                  undefined
                ) {
                  const progressPercent = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                  );

                  setUploadProgress((prevProgress) => {
                    return {
                      ...prevProgress,
                      [file.name]: {
                        ...prevProgress[file.name],
                        progress: progressPercent,
                      },
                    };
                  });
                } else {
                  reject({ canceled: true });
                }
              },
              cancelToken: cancelTokenSourcesRef.current[file.name].token,
            };

            axios
              .post('/api/upload', formData, config)
              .then(resolve)
              .catch(reject);
          });
        })
      );

      const fileMetadata = files.map((file) => ({
        name: file.name,
        size: file.size,
      }));

      // Save metadata to MongoDB
      await axios.post('/api/saveMetadata', { files: fileMetadata });

      setFiles([]);
      setUploadProgress({});
      setUploadStatus('Upload successful!');

      // Reset upload status after 2 seconds
      setTimeout(() => {
        setUploadStatus('');
      }, 2000);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Upload canceled:', error.message);
        setUploadStatus('Upload canceled.');
      } else {
        console.error('Upload error:', error);
        setUploadStatus('Upload failed.');
      }
    }
  };

  const handleCancelUpload = (fileName) => {
    if (cancelTokenSourcesRef.current[fileName]) {
      cancelTokenSourcesRef.current[fileName].cancel('Upload canceled by user.');
    }
  };


  return (
    <div className="p-2 m-2 items-center rounded">

      <div class="flex items-center justify-center w-[calc(100vw-160px)]">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400">ZIP, RAR, 7Z, GZ</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" multiple onChange={handleFileChange} />
        </label>
      </div>


      {/* <input type="file" multiple onChange={handleFileChange} /> */}
      <div className='p-4 mt-2 flex justify-center items-center'>
        <div className='border-0 border-blue-500 w-2/12'>
          <button className="p-2 border bg-blue-500 text-white hover:border hover:bg-transparent hover:border-blue-500 flex align-middle hover:text-blue-500 hover:transition-all delay-100 rounded-md" onClick={handleUpload}>
            <UploadFileIcon />
            Upload
          </button>
        </div>

        <div className="p-2 w-8/12 border-0 border-red-200">
          {files.map((file) => (
            <div key={file.name} className="flex items-center px-3 bg-slate-50 justify-between mb-2">
              <div className="text-sm font-medium w-40 lg:w-auto truncate">
                <span className="font-bold">{file.name} </span>
                <span className="text-xs font-mono">- {file.size} bytes</span>
              </div>

              <div className="flex items-center">
                <div className="relative w-48 h-2 bg-gray-300">
                  <div
                    className={`absolute top-0 left-0 h-2 ${uploadProgress[file.name]?.progress === 100
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                      }`}
                    style={{ width: `${uploadProgress[file.name]?.progress}%` }}
                  ></div>
                </div>
                {uploadProgress[file.name]?.progress === 100 ? (
                  <button className="text-green-500 px-2 py-2 rounded-md ml-2">
                    <CheckIcon />
                  </button>
                ) : (
                  <button
                    className="text-gray-400 hover:text-red-500 px-2 py-2 rounded-md ml-2"
                    onClick={() => handleCancelUpload(file.name)}
                    disabled={!uploadProgress[file.name]}
                  >
                    <CancelIcon />
                  </button>
                )}
                <button
                  className="text-gray-400 hover:text-red-500 px-2 py-2 rounded-md"
                  onClick={() => handleDeleteFile(file.name)}
                  disabled={uploadProgress[file.name]}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </div>

  );
};

export default Upload;





