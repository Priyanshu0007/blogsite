const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Comments.jsx',
  'src/components/Author.jsx',
  'src/components/PostWidget.jsx',
  'src/components/PostCard.jsx',
  'src/components/CommentsForm.jsx',
  'src/components/PostDetail.jsx',
  'src/components/Categories.jsx'
];

const targetClasses = [
  'bg-gray-300/40  bg-clip-padding  backdrop-blur-sm',
  'bg-gray-300/40 bg-clip-padding backdrop-blur-sm',
  'bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'
];

const newGlassmorphism = 'bg-white/20 backdrop-blur-md border border-white/30 shadow-xl drop-shadow-md rounded-2xl text-slate-800 transition-all duration-300 hover:bg-white/30';

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Use regex to replace the old classes
    content = content.replace(/bg-gray-300\/40\s+bg-clip-padding\s+backdrop-blur-sm/g, newGlassmorphism);
    
    // Make text slightly darker for contrast if we have gray text
    content = content.replace(/text-gray-700/g, 'text-gray-800');
    content = content.replace(/text-gray-600/g, 'text-gray-800');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
