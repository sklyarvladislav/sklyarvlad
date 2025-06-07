document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlighting
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Toggle read more functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postContent = this.previousElementSibling;
            
            if (this.textContent === 'Read More') {
                this.textContent = 'Read Less';
                postContent.style.maxHeight = '1000px'; // Expand content
                
                // Create full content dynamically (simulating loading more content)
                const paragraph = document.createElement('p');
                paragraph.textContent = 'This is additional content that appears when you click "Read More". In a real blog, this would be the full article content that was initially hidden.';
                paragraph.style.margin = '15px 0';
                paragraph.classList.add('expanded-content');
                
                // Only add the new paragraph if it doesn't exist yet
                if (!postContent.querySelector('.expanded-content')) {
                    postContent.appendChild(paragraph);
                }
            } else {
                this.textContent = 'Read More';
                // Hide the expanded content
                const expandedContent = postContent.querySelector('.expanded-content');
                if (expandedContent) {
                    expandedContent.remove();
                }
            }
        });
    });

    // Add simple dark mode toggle
    const footer = document.querySelector('footer');
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.margin = '10px';
    darkModeToggle.style.padding = '8px 15px';
    darkModeToggle.style.background = '#3498db';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '3px';
    darkModeToggle.style.cursor = 'pointer';
    
    footer.querySelector('.container').appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = '#1a1a1a';
            document.body.style.color = '#f4f4f4';
            
            const posts = document.querySelectorAll('.post, .widget');
            posts.forEach(post => {
                post.style.backgroundColor = '#2d2d2d';
                post.style.color = '#f4f4f4';
            });
            
            const postTitles = document.querySelectorAll('.post h2, .widget h3');
            postTitles.forEach(title => {
                title.style.color = '#3498db';
            });
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            
            const posts = document.querySelectorAll('.post, .widget');
            posts.forEach(post => {
                post.style.backgroundColor = '';
                post.style.color = '';
            });
            
            const postTitles = document.querySelectorAll('.post h2, .widget h3');
            postTitles.forEach(title => {
                title.style.color = '';
            });
        }
    });
});
