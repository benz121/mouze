"use client";
import { useState } from 'react';
import crypto from 'crypto';

export default function Hash() {
  const [fileHash, setFileHash] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
  }

  function handleHashFile() {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result;
        const hash = crypto.createHash('sha1');
        // 92b404e556588ced6c1acd4ebf053f6809f73a93
        // 92b404e556588ced6c1acd4ebf053f6809f73a93
        hash.update(fileData);
        console.log(hash);
        const fileHash = hash.digest('hex');
        setFileHash(fileHash);
      };
      reader.readAsArrayBuffer(selectedFile);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleHashFile}>Hash File</button>
      {fileHash && <p>File hash: {fileHash}</p>}
    </div>
  );
}
