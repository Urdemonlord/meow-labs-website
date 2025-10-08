import fs from 'fs';
import path from 'path';

/**
 * Parse the content of knowledge.md file into chunks for embedding
 * @param chunkSize Maximum size of each chunk in characters
 * @param overlapSize Overlap between consecutive chunks
 * @returns Array of chunked text
 */
export function parseKnowledgeBase(chunkSize: number = 500, overlapSize: number = 100): {
  chunks: string[];
  metadatas: {
    source: string;
    section?: string;
    chunk_id: string;
  }[];
} {
  // Read the knowledge.md file
  const filePath = path.join(process.cwd(), 'knowledge.md');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Split content by markdown headers
  const sections = splitByHeaders(content);
  
  let chunks: string[] = [];
  let metadatas: {
    source: string;
    section?: string;
    chunk_id: string;
  }[] = [];

  // Process each section and create chunks
  sections.forEach((section, sectionIndex) => {
    const { header, content } = section;
    
    // If content is short enough, keep it as one chunk
    if (content.length <= chunkSize) {
      chunks.push(content);
      metadatas.push({
        source: 'knowledge.md',
        section: header,
        chunk_id: `chunk-${sectionIndex}-0`
      });
    } else {
      // Split longer content into overlapping chunks
      let startIndex = 0;
      let chunkIndex = 0;
      
      while (startIndex < content.length) {
        const endIndex = Math.min(startIndex + chunkSize, content.length);
        const chunk = content.substring(startIndex, endIndex);
        
        chunks.push(chunk);
        metadatas.push({
          source: 'knowledge.md',
          section: header,
          chunk_id: `chunk-${sectionIndex}-${chunkIndex}`
        });
        
        // Move start index for next chunk (with overlap)
        startIndex = endIndex - overlapSize;
        if (startIndex >= content.length) break;
        chunkIndex++;
      }
    }
  });

  return { chunks, metadatas };
}

/**
 * Split content by markdown headers
 */
function splitByHeaders(content: string): { header: string; content: string }[] {
  const headerRegex = /^#{1,6}\s+(.*)$/gm;
  const sections: { header: string; content: string }[] = [];
  
  // Find all headers
  const headers: { header: string; index: number }[] = [];
  let match;
  while ((match = headerRegex.exec(content)) !== null) {
    headers.push({
      header: match[0].trim(),
      index: match.index
    });
  }
  
  // Add a dummy end header
  headers.push({
    header: '',
    index: content.length
  });
  
  // Extract sections between headers
  for (let i = 0; i < headers.length - 1; i++) {
    const currentHeader = headers[i];
    const nextHeader = headers[i + 1];
    
    const sectionContent = content.substring(
      currentHeader.index + currentHeader.header.length,
      nextHeader.index
    ).trim();
    
    // Extract the header text (without # symbols)
    const headerText = currentHeader.header.replace(/^#{1,6}\s+/, '');
    
    sections.push({
      header: headerText,
      content: currentHeader.header + '\n\n' + sectionContent
    });
  }
  
  return sections;
}