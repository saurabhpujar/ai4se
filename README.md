# AI4SE Conferences

A static website for listing upcoming AI and Software Engineering conferences, sorted by submission deadline. Perfect for hosting on GitHub Pages.

## Features

- **Conference Listings**: Comprehensive list of major AI and Software Engineering conferences
- **Smart Sorting**: Conferences are automatically sorted by submission deadline (closest first)
- **Category Filtering**: Filter by AI or Software Engineering conferences
- **Search Functionality**: Search conferences by name, acronym, location, or description
- **Deadline Tracking**: Visual indicators for urgent (≤7 days), soon (≤30 days), and normal deadlines
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with hover effects and smooth animations
- **Static Website**: No server required - perfect for GitHub Pages hosting

## Included Conferences

### AI Conferences
- **AAAI** - Association for the Advancement of Artificial Intelligence
- **NeurIPS** - Neural Information Processing Systems
- **ICLR** - International Conference on Learning Representations
- **ICML** - International Conference on Machine Learning
- **ACL** - Association for Computational Linguistics
- **EMNLP** - Empirical Methods in Natural Language Processing
- **ICCV** - International Conference on Computer Vision
- **CVPR** - Conference on Computer Vision and Pattern Recognition

### Software Engineering Conferences
- **ICSE** - International Conference on Software Engineering
- **ASE** - Automated Software Engineering
- **FSE** - Foundations of Software Engineering
- **ICST** - International Conference on Software Testing, Verification and Validation

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd ai4se
```

2. Open `index.html` in your web browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open [http://localhost:8000](http://localhost:8000) to view the website.

### GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Scroll down to "GitHub Pages" section
4. Select "Deploy from a branch" and choose your main branch
5. Your website will be available at `https://yourusername.github.io/your-repo-name`

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks required
- **GitHub Pages** - Free static hosting

## Project Structure

```
ai4se/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Contributing

To add new conferences or update existing ones, edit the `script.js` file and add entries to the `conferences` array. Each conference should include:

- Unique ID
- Full name and acronym
- Category (AI or Software Engineering)
- Submission deadline and conference dates
- Location
- Website and Call for Papers URLs
- Description

## Features in Detail

### Deadline Tracking
- **Red (Urgent)**: ≤7 days until deadline
- **Orange (Soon)**: 8-30 days until deadline
- **Green (Normal)**: >30 days until deadline or past deadline

### Sorting Logic
1. Upcoming deadlines (sorted by closest first)
2. Past deadlines (sorted by most recent first)

### Search Functionality
Search across:
- Conference name
- Conference acronym
- Location
- Description

## License

This project is open source and available under the [MIT License](LICENSE).