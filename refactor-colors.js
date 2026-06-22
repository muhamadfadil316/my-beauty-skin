const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src');

// Map old warm hex codes to new soft sage / mint / peach hex codes
const colorMap = {
  // Rose/Dark Reds -> Forest/Sage
  '#221816': '#1a2b22',
  '#4a2f30': '#2c4033',
  '#1f1a17': '#1a2b22',
  
  // Text and Highlights
  '#8b5a62': '#4c6b5b', // Dark sage text
  '#9d6f78': '#688d7b', // Medium sage
  '#a7796c': '#719582', // Medium sage variant
  '#aa7a82': '#789e8a',
  '#b9858d': '#88b09a', // Lighter sage
  '#bb868e': '#8fb8a2',
  
  // Clays and Browns -> Warm Taupes / Light Olive
  '#6f5b54': '#5a6e62', // Muted text
  '#8e766d': '#6b7e73',
  '#8b5d51': '#60796b',
  '#8d5d52': '#60796b',
  '#b37e6e': '#819c8d', // Clay accents
  
  // Borders
  '#efe4de': '#e2ede7', // Border
  '#e4cfc6': '#cde0d5', // Hover border
  '#eadfd9': '#dae8e0', // Light border
  '#f1e7e2': '#eaf2ee', // Very light border
  '#d6b7ab': '#b0cbbd', // Focus border
  '#f2d6cd': '#c0dfcf', // Ring border

  // Backgrounds & Surfaces
  '#fffaf8': '#f8faf9', // Bg
  '#fdf4ef': '#f0f6f3', // Hover bg
  '#faf0ea': '#e9f1ed',
  '#fff8f4': '#f4f8f6',
  '#f7ebe4': '#eaf2ed',
  '#f8e7e0': '#e3ede7',
  '#fffdfc': '#fcfdfc',
  '#fff9f7': '#f6f9f7',
  '#faf1ed': '#ebf3ef',
  '#f8e9e2': '#eaf2ee',
  '#f6e4da': '#e2ede7',
  '#faf5f2': '#f2f7f4',
  '#f6ece7': '#eaf2ee',
  '#fff2ec': '#ebf4ef',
  '#f6ddd3': '#dae8e0',
  '#fff6f1': '#f0f6f3',

  // Blurs and Gradients (Peaches / Mints)
  '#f6d5cb': '#cbe6d8', // Blush -> Mint
  '#d6a8a0': '#a2c9b6', 
  '#f1ddd3': '#d4e8df',
  '#e8cfc2': '#c2dcd0',
  '#f0c6b6': '#b2d4c3',
  '#e6c9bd': '#b8d6c6',
  '#f3cfc0': '#c9e2d5',
  '#fbe4da': '#e5f2eb',
  '#f3d4c8': '#cce4d8',
};

// Normalize keys to lowercase
const normalizedMap = {};
for (const [key, value] of Object.entries(colorMap)) {
  normalizedMap[key.toLowerCase()] = value.toLowerCase();
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = false;

      // Regex to find hex colors (case-insensitive)
      const hexRegex = /#[0-9a-fA-F]{6}/g;
      
      content = content.replace(hexRegex, (match) => {
        const lowerMatch = match.toLowerCase();
        if (normalizedMap[lowerMatch]) {
          updated = true;
          return normalizedMap[lowerMatch];
        }
        return match; // return original if no mapping found
      });

      if (updated) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

console.log('Starting color refactor...');
processDirectory(srcPath);
console.log('Done!');
