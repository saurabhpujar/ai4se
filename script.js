// Conference data
const conferences = [
    {
        id: '1',
        name: 'Association for the Advancement of Artificial Intelligence',
        acronym: 'AAAI',
        category: 'AI',
        submissionDeadline: '2024-08-15',
        conferenceDate: '2025-02-15',
        location: 'Vancouver, Canada',
        website: 'https://aaai.org/aaai25/',
        callForPapers: 'https://aaai.org/aaai25/call-for-papers/',
        description: 'Premier AI conference covering all aspects of artificial intelligence research and applications.'
    },
    {
        id: '2',
        name: 'Neural Information Processing Systems',
        acronym: 'NeurIPS',
        category: 'AI',
        submissionDeadline: '2024-05-16',
        conferenceDate: '2024-12-09',
        location: 'Vancouver, Canada',
        website: 'https://neurips.cc/',
        callForPapers: 'https://neurips.cc/Conferences/2024/CallForPapers',
        description: 'Leading machine learning and computational neuroscience conference.'
    },
    {
        id: '3',
        name: 'International Conference on Learning Representations',
        acronym: 'ICLR',
        category: 'AI',
        submissionDeadline: '2024-09-27',
        conferenceDate: '2025-05-05',
        location: 'Vienna, Austria',
        website: 'https://iclr.cc/',
        callForPapers: 'https://iclr.cc/Conferences/2025/CallForPapers',
        description: 'Focused on deep learning and representation learning research.'
    },
    {
        id: '4',
        name: 'International Conference on Machine Learning',
        acronym: 'ICML',
        category: 'AI',
        submissionDeadline: '2024-01-25',
        conferenceDate: '2024-07-21',
        location: 'Vienna, Austria',
        website: 'https://icml.cc/',
        callForPapers: 'https://icml.cc/Conferences/2024/CallForPapers',
        description: 'Premier machine learning conference covering theoretical and applied ML research.'
    },
    {
        id: '5',
        name: 'Association for Computational Linguistics',
        acronym: 'ACL',
        category: 'AI',
        submissionDeadline: '2024-12-15',
        conferenceDate: '2025-07-27',
        location: 'Bangkok, Thailand',
        website: 'https://2025.aclweb.org/',
        callForPapers: 'https://2025.aclweb.org/calls/papers/',
        description: 'Leading conference in computational linguistics and natural language processing.'
    },
    {
        id: '6',
        name: 'Empirical Methods in Natural Language Processing',
        acronym: 'EMNLP',
        category: 'AI',
        submissionDeadline: '2024-06-07',
        conferenceDate: '2024-11-12',
        location: 'Bangkok, Thailand',
        website: 'https://2024.emnlp.org/',
        callForPapers: 'https://2024.emnlp.org/calls/papers/',
        description: 'Focused on empirical methods and applications in natural language processing.'
    },
    {
        id: '7',
        name: 'International Conference on Software Engineering',
        acronym: 'ICSE',
        category: 'Software Engineering',
        submissionDeadline: '2024-08-15',
        conferenceDate: '2025-05-25',
        location: 'Melbourne, Australia',
        website: 'https://conf.researchr.org/home/icse-2025',
        callForPapers: 'https://conf.researchr.org/track/icse-2025/icse-2025-papers',
        description: 'Premier software engineering conference covering all aspects of software development.'
    },
    {
        id: '8',
        name: 'Automated Software Engineering',
        acronym: 'ASE',
        category: 'Software Engineering',
        submissionDeadline: '2024-05-10',
        conferenceDate: '2024-10-14',
        location: 'Luxembourg',
        website: 'https://conf.researchr.org/home/ase-2024',
        callForPapers: 'https://conf.researchr.org/track/ase-2024/ase-2024-papers',
        description: 'Focused on automation in software engineering and development.'
    },
    {
        id: '9',
        name: 'Foundations of Software Engineering',
        acronym: 'FSE',
        category: 'Software Engineering',
        submissionDeadline: '2024-04-12',
        conferenceDate: '2024-11-18',
        location: 'San Francisco, CA',
        website: 'https://2024.esec-fse.org/',
        callForPapers: 'https://2024.esec-fse.org/calls/research-papers/',
        description: 'Leading conference on software engineering foundations and theory.'
    },
    {
        id: '10',
        name: 'International Conference on Computer Vision',
        acronym: 'ICCV',
        category: 'AI',
        submissionDeadline: '2024-03-15',
        conferenceDate: '2024-10-27',
        location: 'Paris, France',
        website: 'https://iccv2023.thecvf.com/',
        callForPapers: 'https://iccv2023.thecvf.com/node/4',
        description: 'Premier computer vision conference covering all aspects of visual computing.'
    },
    {
        id: '11',
        name: 'Conference on Computer Vision and Pattern Recognition',
        acronym: 'CVPR',
        category: 'AI',
        submissionDeadline: '2024-11-15',
        conferenceDate: '2025-06-23',
        location: 'Seattle, WA',
        website: 'https://cvpr2025.thecvf.com/',
        callForPapers: 'https://cvpr2025.thecvf.com/node/4',
        description: 'Leading conference in computer vision and pattern recognition.'
    },
    {
        id: '12',
        name: 'International Conference on Software Testing, Verification and Validation',
        acronym: 'ICST',
        category: 'Software Engineering',
        submissionDeadline: '2024-10-15',
        conferenceDate: '2025-04-14',
        location: 'Cleveland, OH',
        website: 'https://icst2025.github.io/',
        callForPapers: 'https://icst2025.github.io/calls/',
        description: 'Focused on software testing, verification, and validation techniques.'
    }
];

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getDaysUntilDeadline(deadline) {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function getDeadlineStatus(deadline) {
    const daysUntil = getDaysUntilDeadline(deadline);
    
    if (daysUntil < 0) {
        return 'normal'; // Past deadline
    } else if (daysUntil <= 7) {
        return 'urgent';
    } else if (daysUntil <= 30) {
        return 'soon';
    } else {
        return 'normal';
    }
}

function getDeadlineStatusText(deadline) {
    const daysUntil = getDaysUntilDeadline(deadline);
    
    if (daysUntil < 0) {
        return 'Deadline passed';
    } else if (daysUntil === 0) {
        return 'Deadline today!';
    } else if (daysUntil === 1) {
        return 'Deadline tomorrow!';
    } else if (daysUntil <= 7) {
        return `${daysUntil} days left`;
    } else if (daysUntil <= 30) {
        return `${daysUntil} days left`;
    } else {
        return `${daysUntil} days left`;
    }
}

function createConferenceCard(conference) {
    const deadlineStatus = getDeadlineStatus(conference.submissionDeadline);
    const deadlineText = getDeadlineStatusText(conference.submissionDeadline);

    const card = document.createElement('div');
    card.className = 'conference-card';
    
    card.innerHTML = `
        <div class="conference-name">${conference.name}</div>
        <div class="conference-acronym">${conference.acronym}</div>
        
        <div class="conference-details">
            <div class="detail-item">
                <strong>Category:</strong>
                <span>${conference.category}</span>
            </div>
            
            <div class="detail-item">
                <strong>Location:</strong>
                <span>${conference.location}</span>
            </div>
            
            <div class="detail-item">
                <strong>Conference:</strong>
                <span>${formatDate(conference.conferenceDate)}</span>
            </div>
            
            <div class="detail-item">
                <strong>Deadline:</strong>
                <span class="deadline-${deadlineStatus}">
                    ${formatDate(conference.submissionDeadline)} (${deadlineText})
                </span>
            </div>
            
            ${conference.description ? `
                <div class="detail-item">
                    <strong>About:</strong>
                    <span>${conference.description}</span>
                </div>
            ` : ''}
        </div>
        
        <div class="conference-links">
            <a href="${conference.website}" target="_blank" rel="noopener noreferrer">
                Website
            </a>
            ${conference.callForPapers ? `
                <a href="${conference.callForPapers}" target="_blank" rel="noopener noreferrer">
                    Call for Papers
                </a>
            ` : ''}
        </div>
    `;
    
    return card;
}

function filterAndDisplayConferences() {
    const categoryFilter = document.getElementById('category-filter').value;
    const searchTerm = document.getElementById('search-filter').value.toLowerCase();
    const conferencesGrid = document.getElementById('conferences-grid');
    const noConferences = document.getElementById('no-conferences');
    
    let filtered = conferences;

    // Filter by category
    if (categoryFilter !== 'All') {
        filtered = filtered.filter(conference => conference.category === categoryFilter);
    }

    // Filter by search term
    if (searchTerm.trim()) {
        filtered = filtered.filter(conference =>
            conference.name.toLowerCase().includes(searchTerm) ||
            conference.acronym.toLowerCase().includes(searchTerm) ||
            conference.location.toLowerCase().includes(searchTerm) ||
            (conference.description && conference.description.toLowerCase().includes(searchTerm))
        );
    }

    // Sort by submission deadline (closest first)
    filtered.sort((a, b) => {
        const daysA = getDaysUntilDeadline(a.submissionDeadline);
        const daysB = getDaysUntilDeadline(b.submissionDeadline);
        
        // Put upcoming deadlines first, then past deadlines
        if (daysA >= 0 && daysB < 0) return -1;
        if (daysA < 0 && daysB >= 0) return 1;
        
        // For upcoming deadlines, sort by closest first
        if (daysA >= 0 && daysB >= 0) return daysA - daysB;
        
        // For past deadlines, sort by most recent first
        return daysB - daysA;
    });

    // Clear existing content
    conferencesGrid.innerHTML = '';

    if (filtered.length > 0) {
        // Add conference cards
        filtered.forEach(conference => {
            const card = createConferenceCard(conference);
            conferencesGrid.appendChild(card);
        });
        
        noConferences.style.display = 'none';
        conferencesGrid.style.display = 'grid';
    } else {
        // Show no conferences message
        conferencesGrid.style.display = 'none';
        noConferences.style.display = 'block';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initial display
    filterAndDisplayConferences();
    
    // Add event listeners for filters
    document.getElementById('category-filter').addEventListener('change', filterAndDisplayConferences);
    document.getElementById('search-filter').addEventListener('input', filterAndDisplayConferences);
}); 