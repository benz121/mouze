"use client";
import { useState, useEffect } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import mammoth from 'mammoth';

const DocumentViewer = () => {
  const [documentContent, setDocumentContent] = useState(null);

  const loadDocument = async () => {
    try {
      const response = await fetch("C:\Users\UDAY_BENZ\Downloads\file-sample_1MB.docx"); // Replace with the actual path to your .docx file on the server
      const arrayBuffer = await response.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      setDocumentContent(result.value);
    } catch (error) {
      console.error('Error loading document:', error);
    }
  };

  useEffect(() => {
    loadDocument();
  }, []);

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem' }}>
        {documentContent ? (
          <Typography variant="body1">{documentContent}</Typography>
        ) : (
          <Typography variant="body1">Loading document...</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default DocumentViewer;
