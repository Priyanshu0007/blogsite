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

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Clean up duplicated tailwind classes
    content = content.replace(/shadow-lg rounded-lg /g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned ${file}`);
  }
});
