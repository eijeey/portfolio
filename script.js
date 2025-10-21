// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
            
            // Animate elements on scroll
            animateOnScroll();
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Project Modal Functionality
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');
    
      // Lab 1: Portfolio
    const lab1Content = `
        <div class="portfolio-lab">
            <h4>Portfolio Website</h4>
            <p>This was my first portfolio website built with HTML and CSS. It features a responsive design that works on all devices.</p>
            <div class="demo-card">
                <div class="demo-header">
                 <img src="aj.jpg" alt="Arvie Abayon" class="profile-img">
                    <h5>Arvie Abayon</h5>
                    <p>BS Information Technology</p>
                </div>
                <div class="demo-body">
                    <p>This project taught me the basics of how websites are built and styled. It helped me understand how structure and design work together.</p>
                </div>
            </div>
            <div class="lab-tech">
                <span>HTML</span>
                <span>CSS</span>
            </div>
        </div>
    `;
    
    // Lab 2: Interactive Card
    const lab2Content = `
      <div class="demo-card">
            <div class="demo-header">
                <!-- Add profile image here -->
                <img src="aj.jpg" alt="Arvie Abayon" class="profile-img">
                </div>
                <h5>Hi! I'm Arvie.</h5>
                <p>A future web developer</p>
                <button id="demo-about-btn" class="btn-project">ABOUT ME</button>
                <div id="demo-info" class="hide">
                    <p>I may not know everything yet, but I’m eager to grow, explore, and create better web experiences step by step.</p>
                </div>
            </div>
            <div class="lab-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
            </div>
        </div>
    `;
    
    // Lab 3: Dark Mode
    const lab3Content = `
        <div class="darkmode-lab">
            <h4>Dark Mode Toggle</h4>
            <p>A simple implementation of dark/light mode switching.</p>
            <div class="demo-section">
                <h5>Arvie Abayon</h5>
                <p>Light and Dark Mode Toggle Example</p>
                <div class="demo-image">
                    <i class="fas fa-image"></i>
                </div>
            </div>
            <button id="demo-darkmode" class="btn-project">Toggle Dark Mode</button>
            <div class="lab-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
            </div>
        </div>
    `;
    
    // Lab 4: Enhanced Dark Mode
    const lab4Content = `
        <div class="darkmode-enhanced-lab">
            <h4>Enhanced Dark Mode</h4>
            <p>An improved dark mode with dynamic content changes.</p>
            <div class="demo-section enhanced">
                <h5>Hi! Arvie Abayon</h5>
                <p id="demo-mode-text">Light and Dark Mode Toggle example</p>
            </div>
            <button id="demo-darkmode-enhanced" class="btn-project">Toggle Dark Mode</button>
            <div class="lab-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
            </div>
        </div>
    `;
    
    // Lab 5: Grocery List
    const lab5Content = `
        <div class="grocery-lab">
            <h4>Interactive Grocery List</h4>
            <p>A dynamic grocery list with add, highlight, and remove functions.</p>
            <div class="demo-grocery">
                <ul id="demo-container"></ul>
                <div class="grocery-controls">
                    <input type="text" id="demo-textbox" placeholder="Enter item">
                    <button id="demo-addItem" class="btn-project">Add Item</button>
                    <button id="demo-highlightAll" class="btn-project">Highlight All</button>
                    <button id="demo-removeAll" class="btn-project">Remove All</button>
                </div>
            </div>
            <div class="lab-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
            </div>
        </div>
        
    `;
    // Add this with the other lab content variables
// Lab 6: Wix Portfolio
const lab6Content = `
    <div class="wix-project-lab">
        <h4>Wix Portfolio Website</h4>
        <p>A professional portfolio website I built using Wix to showcase my projects and skills with a modern, responsive design.</p>
        
        <div class="project-preview">
            <div class="preview-image">
                <div style="width:100%;height:200px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);display:flex;align-items:center;justify-content:center;color:white;border-radius:10px;">
                    <i class="fas fa-globe" style="font-size:3rem;"></i>
                </div>
                <div class="preview-overlay">
                    <a href="https://arviejaneabayon18.wixsite.com/abayonarvie" target="_blank" class="preview-btn">
                        <i class="fas fa-external-link-alt"></i>
                        Visit Live Site
                    </a>
                </div>
            </div>
        </div>

        <div class="project-details">
            <div class="detail-section">
                <h5><i class="fas fa-info-circle"></i> About This Project</h5>
                <p>This portfolio website was created using Wix's powerful drag-and-drop builder, featuring:</p>
                <ul>
                    <li>Modern, responsive design that works on all devices</li>
                    <li>Clean and professional layout showcasing my work</li>
                    <li>Interactive elements and smooth animations</li>
                    <li>Contact form for potential clients and collaborators</li>
                    <li>Optimized for fast loading and SEO</li>
                </ul>
            </div>

            <div class="detail-section">
                <h5><i class="fas fa-cogs"></i> Technical Features</h5>
                <div class="features-grid">
                    <div class="feature-item">
                        <i class="fas fa-mobile-alt"></i>
                        <span>Responsive Design</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-bolt"></i>
                        <span>Fast Loading</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-search"></i>
                        <span>SEO Optimized</span>
                    </div>
                    <div class="feature-item">
                        <i class="fas fa-palette"></i>
                        <span>Modern UI/UX</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h5><i class="fas fa-external-link-alt"></i> Live Demo</h5>
                <p>Check out the live website to see the full functionality and design:</p>
                <a href="https://arviejaneabayon18.wixsite.com/abayonarvie" target="_blank" class="btn-live-demo">
                    <i class="fas fa-external-link-alt"></i>
                    Visit Wix Portfolio
                </a>
            </div>
        </div>

        <div class="lab-tech">
            <span>Wix</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Responsive Design</span>
        </div>
    </div>
`;
// Lab 7: Mini Clicker Game with Video Surprise
const lab7Content = `
  <div class="game-lab">
    <h4>Mini Clicker Game</h4>
    <p>Click as many times as you can before the timer ends — but don’t say I didn’t warn you 😈</p>
    <div class="game-area">
      <h5 id="score-text">Score: 0</h5>
      <button id="click-btn" class="btn-project">Click Me!</button>
      <p id="timer-text">Time left: 10s</p>

      <!-- Hidden video -->
      <video id="gameover-video" width="320" height="240" style="display:none; margin-top:15px;" controls>
        <source src="aray.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="lab-tech">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>
  </div>
`;
    // Project card click handlers
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const labId = this.getAttribute('data-lab');
            const projectTitle = this.querySelector('h3').textContent;
            
            // Set modal title
            modalTitle.textContent = projectTitle;
            
            // Set modal content based on which lab was clicked
            switch(labId) {
                case '1':
                    modalBody.innerHTML = lab1Content;
                    break;
                case '2':
                    modalBody.innerHTML = lab2Content;
                    // Add functionality for the interactive card
                    setTimeout(() => {
                        const aboutBtn = document.getElementById('demo-about-btn');
                        const infoDiv = document.getElementById('demo-info');
                        
                        if (aboutBtn && infoDiv) {
                            aboutBtn.addEventListener('click', function() {
                                if(infoDiv.classList.contains('hide')) {
                                    infoDiv.classList.remove('hide');
                                    aboutBtn.textContent = "Show less";
                                    infoDiv.style.animation = 'fadeInUp 0.5s ease';
                                } else {
                                    infoDiv.classList.add('hide');
                                    aboutBtn.textContent = "ABOUT ME";
                                }
                            });
                        }
                    }, 100);
                    break;
                case '3':
                    modalBody.innerHTML = lab3Content;
                    // Add functionality for dark mode
                    setTimeout(() => {
                        const darkModeBtn = document.getElementById('demo-darkmode');
                        const demoSection = document.querySelector('.demo-section');
                        
                        if (darkModeBtn && demoSection) {
                            darkModeBtn.addEventListener('click', function() {
                                demoSection.classList.toggle("dark-mode");
                                demoSection.style.animation = 'flip 0.6s ease';
                                setTimeout(() => {
                                    demoSection.style.animation = '';
                                }, 600);
                            });
                        }
                    }, 100);
                    break;
                case '4':
                    modalBody.innerHTML = lab4Content;
                    // Add functionality for enhanced dark mode
                    setTimeout(() => {
                        const darkModeBtn = document.getElementById('demo-darkmode-enhanced');
                        const demoSection = document.querySelector('.demo-section.enhanced');
                        const modeText = document.getElementById('demo-mode-text');
                        
                        if (darkModeBtn && demoSection && modeText) {
                            darkModeBtn.addEventListener('click', function() {
                                demoSection.classList.toggle("dark-mode");
                                if(demoSection.classList.contains("dark-mode")) {
                                    modeText.innerText = "Welcome to dark mode!";
                                    modeText.style.animation = 'textGlow 1s ease';
                                } else {
                                    modeText.innerText = "Light and Dark Mode Toggle example";
                                    modeText.style.animation = 'textGlow 1s ease';
                                }
                                setTimeout(() => {
                                    modeText.style.animation = '';
                                }, 1000);
                            });
                        }
                    }, 100);
                    break;
                case '5':
                    modalBody.innerHTML = lab5Content;
                    // Add functionality for grocery list
                    setTimeout(() => {
                        const addItemBtn = document.getElementById('demo-addItem');
                        const highlightAllBtn = document.getElementById('demo-highlightAll');
                        const removeAllBtn = document.getElementById('demo-removeAll');
                        const textbox = document.getElementById('demo-textbox');
                        const container = document.getElementById('demo-container');
                        
                        if (addItemBtn && highlightAllBtn && removeAllBtn && textbox && container) {
                            addItemBtn.onclick = function() {
                                if(textbox.value.trim() !== '') {
                                    let li = document.createElement("li");
                                    li.textContent = textbox.value;
                                    li.style.animation = 'slideInRight 0.5s ease';
                                    container.appendChild(li);
                                    textbox.value = '';
                                }
                            }
                            
                            highlightAllBtn.onclick = function() {
                                let items = document.querySelectorAll("#demo-container li");
                                items.forEach(item => {
                                    item.style.color = "var(--spider-red)";
                                    item.style.animation = 'pulse 0.5s ease';
                                    setTimeout(() => {
                                        item.style.animation = '';
                                    }, 500);
                                });
                            }
                            
                            removeAllBtn.onclick = function() {
                                let items = document.querySelectorAll("#demo-container li");
                                items.forEach((item, index) => {
                                    setTimeout(() => {
                                        item.style.animation = 'slideOutRight 0.5s ease';
                                        setTimeout(() => {
                                            item.remove();
                                        }, 500);
                                    }, index * 100);
                                });
                            }
                        }
                    }, 100);
                    break;
                    // Add this case to your existing switch statement
case '6':
    modalBody.innerHTML = lab6Content;
    // Add functionality for the live preview
    setTimeout(() => {
        const previewImage = document.querySelector('.preview-image');
        const liveDemoBtn = document.querySelector('.btn-live-demo');
        
        if (previewImage) {
            previewImage.addEventListener('mouseenter', function() {
                this.querySelector('.preview-overlay').style.opacity = '1';
            });
            
            previewImage.addEventListener('mouseleave', function() {
                this.querySelector('.preview-overlay').style.opacity = '0';
            });
        }
        
        if (liveDemoBtn) {
            liveDemoBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.href, '_blank');
            });
        }
    }, 100);
    break;
    
case '7':
  modalBody.innerHTML = lab7Content;
  setTimeout(() => {
    let score = 0;
    let timeLeft = 10;
    const scoreText = document.getElementById('score-text');
    const timerText = document.getElementById('timer-text');
    const clickBtn = document.getElementById('click-btn');
    const video = document.getElementById('gameover-video');

    const timer = setInterval(() => {
      timeLeft--;
      timerText.textContent = "Time left: " + timeLeft + "s";
      if (timeLeft <= 0) {
        clearInterval(timer);
        clickBtn.disabled = true;
        clickBtn.textContent = "Game Over!";
        timerText.textContent = "Better luck next time 😅";

        // Show and play the video
        video.style.display = "block";
        video.play();

        // Fun visual effects
        clickBtn.style.animation = "shake 0.5s";
        modalBody.style.animation = "flashRedBlue 0.8s ease";
        setTimeout(() => {
          clickBtn.style.animation = "";
          modalBody.style.animation = "";
        }, 800);
      }
    }, 1000);

    clickBtn.addEventListener('click', () => {
      if (timeLeft > 0) {
        score++;
        scoreText.textContent = "Score: " + score;
        clickBtn.style.animation = "pulse 0.3s";
        setTimeout(() => clickBtn.style.animation = "", 300);
      }
    });
  }, 100);
  break;
            }
            
            // Show the modal
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if(name && email && subject && message) {
                // In a real application, you would send this data to a server
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                // Add loading animation
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Simulate sending
                setTimeout(() => {
                    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(26, 26, 46, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'rgba(26, 26, 46, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            }
        }
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-animate, .project-card, .animated-contact');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
                element.style.transform = "translateX(0)";
            }
        });
    }
    
    // Initialize scroll animation
    animateOnScroll();
    
    // Add interactive cursor effect
    document.addEventListener('mousemove', function(e) {
        const cursor = document.querySelector('.cursor') || createCursor();
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    function createCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--spider-red) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);
        return cursor;
    }
    
    // Add hover effect to buttons
    document.querySelectorAll('.btn, .nav-link, .social-link').forEach(element => {
        element.addEventListener('mouseenter', function() {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'radial-gradient(circle, var(--spider-blue) 0%, transparent 70%)';
            }
        });
        
        element.addEventListener('mouseleave', function() {
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'radial-gradient(circle, var(--spider-red) 0%, transparent 70%)';
            }
        });
    });
});