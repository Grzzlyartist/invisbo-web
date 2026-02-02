// js/main.js
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Set active navigation link based on current page
    function setActiveNavLink() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (mainNav && mainNav.classList.contains('active') &&
            !mainNav.contains(event.target) &&
            mobileMenuBtn && !mobileMenuBtn.contains(event.target)) {
            mainNav.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });

    // Set active nav link on page load
    setActiveNavLink();

    // FAQ functionality
    initializeFAQ();

    // Chatbot functionality
    initializeChatbot();
});

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && answer && toggle) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherToggle = otherItem.querySelector('.faq-toggle');
                        if (otherAnswer) otherAnswer.style.maxHeight = null;
                        if (otherToggle) otherToggle.textContent = '+';
                    }
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    toggle.textContent = '−';
                } else {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                    toggle.textContent = '+';
                }
            });
        }
    });
}

function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-message-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Predefined responses for invisibo.bot
    const botResponses = {
        greetings: [
            "Hello! Welcome to Invisibo AI Agency! How can I help you automate your workflows today?",
            "Hi there! I'm invisibo.bot, ready to assist you with AI automation solutions!",
            "Welcome! I'm here to help you discover how AI can transform your business operations."
        ],
        services: [
            "We offer several AI automation services:\n\n🤖 Workflow Automation - Custom bots for data entry, scheduling, and reporting\n🧠 RAG-Based Knowledge Bots - Internal assistants that read your documents\n⚙️ Custom LLM Fine-Tuning - Industry-specific model training\n👥 Multi-Agent Systems - Teams of specialized AI agents\n\nWhich service interests you most?"
        ],
        pricing: [
            "Our pricing is customized based on your specific automation needs. We offer:\n\n• Free consultation to assess your requirements\n• Flexible pricing models (project-based or monthly)\n• ROI-focused solutions that pay for themselves\n\nWould you like to schedule a free consultation to discuss your project?"
        ],
        contact: [
            "You can reach us through:\n\n📞 Phone: +265 884047011\n📧 Email: contact@invisibo.ai\n🌐 Social: @Invisibo_AI_Agency\n\nWe're available 24/7 to discuss your automation needs!"
        ],
        benefits: [
            "AI automation with Invisibo offers:\n\n✅ 40% average efficiency improvement\n✅ Reduced operational costs\n✅ 24/7 automated operations\n✅ Seamless integration with existing tools\n✅ Scalable solutions that grow with your business\n\nWhat specific challenges are you looking to solve?"
        ],
        default: [
            "That's a great question! Our AI automation solutions can help with various business challenges. Could you tell me more about what you're looking to automate?",
            "I'd be happy to help you with that! For detailed information, I recommend speaking with our automation specialists. Would you like me to connect you with them?",
            "Thanks for your question! Our team specializes in custom AI solutions. What specific area of your business would you like to automate?"
        ]
    };

    // Toggle chatbot window
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
        });
    }

    // Close chatbot window
    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });
    }

    // Send message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatbotInput.value = '';

            // Simulate bot typing delay
            setTimeout(() => {
                const botResponse = generateBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 1000);
        }
    }

    // Send message on button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }

    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

        const content = document.createElement('div');
        content.className = 'message-content';
        content.innerHTML = text.replace(/\n/g, '<br>');

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);

        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Generate bot response based on user input
    function generateBotResponse(userMessage) {
        const message = userMessage.toLowerCase();

        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return getRandomResponse(botResponses.greetings);
        } else if (message.includes('service') || message.includes('what do you do') || message.includes('automation')) {
            return getRandomResponse(botResponses.services);
        } else if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
            return getRandomResponse(botResponses.pricing);
        } else if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
            return getRandomResponse(botResponses.contact);
        } else if (message.includes('benefit') || message.includes('advantage') || message.includes('why')) {
            return getRandomResponse(botResponses.benefits);
        } else {
            return getRandomResponse(botResponses.default);
        }
    }

    // Get random response from array
    function getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Show welcome message after 3 seconds
    setTimeout(() => {
        if (!chatbotWindow.classList.contains('active') && chatbotToggle) {
            chatbotToggle.style.animation = 'pulse 1s ease-in-out 3 alternate';
        }
    }, 3000);
}
