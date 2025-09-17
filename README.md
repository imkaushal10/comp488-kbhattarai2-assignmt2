# COMP 488 Assignment 2: Simple Website Deployment

## Project Description

This project is a modern, responsive website created as part of COMP 488 Assignment 2, demonstrating the fundamentals of web development and deployment practices. The website features a clean, professional design with interactive elements and showcases proper project structure using HTML, CSS, and JavaScript.

The site includes multiple content sections, responsive design for various screen sizes, and interactive functionality through JavaScript. It serves as a template for future web projects and demonstrates best practices in modern web development.

## Live Demo

🌐 **Live Site:** [https://comp488-kbhattarai2-assignmt2.vercel.app/

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with gradients, transitions, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Vercel** - Deployment and hosting platform
- **GitHub** - Version control and repository management

## Local Development

To run this project locally on your machine:

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Atom, Sublime Text, etc.)
- Git (for cloning the repository)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/comp488-assignment2.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd comp488-assignment2
   ```

3. **Open the project:**
   - Option 1: Open `index.html` directly in your web browser
   - Option 2: Use a local server (recommended):

     ```bash
     # If you have Python installed:
     python -m http.server 8000
     # Then visit http://localhost:8000
     
     # Or if you have Node.js installed:
     npx serve .
     ```

4. **Start developing:**
   - Edit `index.html` for content changes
   - Modify `style.css` for styling updates
   - Update `script.js` for functionality enhancements

## Project Structure

```
comp488-assignment2/
│
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Elements** - Toggle button with smooth animations
- **Modern UI** - Glassmorphism design with gradient backgrounds
- **Clean Code** - Well-organized, commented, and maintainable code structure
- **Accessibility** - Semantic HTML and proper contrast ratios

## Deployment Process

This project demonstrates modern web deployment practices using GitHub and Vercel, showcasing how simple website development has evolved with automated deployment pipelines.

### **GitHub Integration**

The project uses Git version control to track changes and maintain code history. GitHub serves as both a repository host and the foundation for continuous deployment. Every commit pushed to the main branch automatically triggers a new deployment on Vercel.

### **Vercel Deployment Benefits**

- **Instant Deployments:** Changes are live within seconds of pushing to GitHub
- **Global CDN:** Website loads fast worldwide through edge servers
- **Automatic HTTPS:** SSL certificates are handled automatically
- **Preview Deployments:** Each branch gets its own preview URL for testing
- **Zero Configuration:** No server setup or maintenance required

### **Simple Website Development Workflow**

1. **Local Development:** Code and test locally using browser dev tools
2. **Version Control:** Commit changes to Git with descriptive messages
3. **Push to GitHub:** Upload code changes to remote repository
4. **Automatic Deployment:** Vercel detects changes and deploys automatically
5. **Live Testing:** Verify functionality on the live site

This modern approach eliminates traditional web hosting complexities like FTP uploads, server configuration, and manual SSL certificate management. It represents the current standard for deploying static websites and demonstrates how development workflows have become more efficient and developer-friendly.

## Reflection

Working on this project has been an invaluable learning experience that reinforced fundamental web development concepts while introducing modern deployment practices. The process of creating separate HTML, CSS, and JavaScript files helped me understand the importance of modular code organization and separation of concerns. I gained practical experience with responsive design principles, ensuring the website looks and functions well across different device sizes through CSS media queries and flexible layouts.

The deployment process using GitHub and Vercel was particularly enlightening, as it demonstrated how modern web development workflows integrate version control with continuous deployment. This automated pipeline eliminates the traditional complexities of web hosting - no more FTP uploads, server configuration, or manual SSL certificate management. Learning to troubleshoot JavaScript issues, especially with DOM manipulation and event listeners, strengthened my debugging skills and understanding of how browsers execute code. The project also emphasized the importance of clean, semantic HTML structure and how proper CSS organization can make styling more maintainable and scalable.

This assignment has given me confidence in building complete web applications from scratch and deploying them to production environments using industry-standard tools and practices. The experience of creating a professional-looking website with interactive features while maintaining clean, readable code has prepared me for more complex web development projects. Understanding both the development and deployment aspects of web projects provides a solid foundation for modern web development careers, where developers are expected to manage the entire pipeline from code to production.

Author: [Kaushal Bhattarai]
Course: COMP 488
Assignment: 2 - Deploy a Simple Website Using GitHub and Vercel
Date: [9/17/2025]
