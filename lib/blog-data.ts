export type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  featured?: boolean
  readingTime: string
  category: string
}

export const blogPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Web Development in 2023",
    slug: "getting-started-with-web-development",
    excerpt:
      "A comprehensive guide for beginners looking to start their journey in web development with the latest tools and technologies.",
    content: `
# Getting Started with Web Development in 2023

Web development continues to evolve at a rapid pace, with new tools, frameworks, and best practices emerging regularly. If you're just starting your journey as a web developer in 2023, this guide will help you navigate the landscape and build a solid foundation.

## The Fundamentals

Before diving into frameworks and libraries, it's essential to master the basics:

### HTML (HyperText Markup Language)

HTML is the backbone of any website. It provides the structure and content. Start by learning:

- Document structure
- Semantic HTML elements
- Forms and input elements
- Accessibility best practices

### CSS (Cascading Style Sheets)

CSS brings your HTML to life with styles and layouts:

- Selectors and properties
- Box model and layout
- Flexbox and Grid
- Responsive design
- CSS variables

### JavaScript

JavaScript adds interactivity to your websites:

- Variables, data types, and functions
- DOM manipulation
- Events and event handling
- Asynchronous JavaScript (Promises, async/await)
- ES6+ features

## Modern Development Tools

Once you're comfortable with the fundamentals, familiarize yourself with these essential tools:

1. **Version Control**: Git and GitHub
2. **Package Managers**: npm or yarn
3. **Bundlers and Build Tools**: Webpack, Vite, or Parcel
4. **CSS Preprocessors**: Sass or Less
5. **Code Editors**: VS Code, Sublime Text, or Atom

## Frameworks and Libraries

In 2023, these are some popular frameworks and libraries to consider learning:

### Frontend Frameworks
- React
- Vue.js
- Angular
- Svelte

### CSS Frameworks
- Tailwind CSS
- Bootstrap
- Bulma

### Backend Technologies
- Node.js with Express
- Python with Django or Flask
- Ruby on Rails
- PHP with Laravel

## Learning Resources

Here are some excellent resources to help you on your journey:

1. **Documentation**: Always start with official documentation
2. **Online Platforms**: freeCodeCamp, MDN Web Docs, Codecademy
3. **YouTube Channels**: Traversy Media, Web Dev Simplified, The Net Ninja
4. **Blogs and Newsletters**: CSS-Tricks, Smashing Magazine, JavaScript Weekly

## Building Projects

The best way to learn is by doing. Start with simple projects and gradually increase complexity:

1. Personal portfolio website
2. To-do list application
3. Weather app using an API
4. Blog with a CMS
5. E-commerce website

Remember, web development is a marathon, not a sprint. Take your time to understand concepts thoroughly before moving on. Happy coding!
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-04-15",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    featured: true,
    readingTime: "8 min read",
    category: "Web Development",
  },
  {
    id: "2",
    title: "The Future of Artificial Intelligence",
    slug: "future-of-artificial-intelligence",
    excerpt:
      "Exploring the potential impact of AI on various industries and how it might shape our future in the coming decades.",
    content: `
# The Future of Artificial Intelligence

Artificial Intelligence (AI) has made remarkable progress in recent years, transforming from a science fiction concept to a technology that impacts our daily lives. As we look toward the future, AI's potential to reshape industries and society is both exciting and challenging.

## Current State of AI

Today's AI systems excel at specific tasks but lack general intelligence:

- **Machine Learning**: Systems that improve with experience
- **Deep Learning**: Neural networks that can identify patterns in vast amounts of data
- **Natural Language Processing**: AI that can understand and generate human language
- **Computer Vision**: Systems that can interpret and understand visual information

## Emerging Trends

Several trends are shaping the future of AI:

### 1. Multimodal AI

Future AI systems will seamlessly integrate different types of data (text, images, audio) to develop a more comprehensive understanding of the world.

### 2. AI Explainability

As AI makes more critical decisions, the ability to explain how these decisions are made becomes crucial for trust and accountability.

### 3. Edge AI

Moving AI processing from the cloud to local devices will enable faster responses, greater privacy, and reduced energy consumption.

### 4. AI Collaboration

Systems that can effectively collaborate with humans, augmenting our capabilities rather than replacing them.

## Industry Transformations

AI is poised to transform numerous industries:

### Healthcare
- Personalized treatment plans
- Early disease detection
- Drug discovery acceleration
- Robotic surgery assistance

### Transportation
- Autonomous vehicles
- Optimized logistics and supply chains
- Traffic management systems
- Predictive maintenance

### Education
- Personalized learning experiences
- Automated grading and feedback
- Intelligent tutoring systems
- Educational content generation

### Manufacturing
- Smart factories
- Quality control automation
- Supply chain optimization
- Predictive maintenance

## Ethical Considerations

The advancement of AI brings important ethical questions:

1. **Bias and Fairness**: Ensuring AI systems don't perpetuate or amplify existing biases
2. **Privacy**: Balancing data needs with individual privacy rights
3. **Accountability**: Determining responsibility when AI systems make mistakes
4. **Employment**: Managing workforce transitions as automation increases
5. **Autonomy**: Deciding appropriate levels of AI decision-making authority

## The Path Forward

For AI to reach its full potential while benefiting humanity:

- **Interdisciplinary Collaboration**: Engineers working with ethicists, social scientists, and domain experts
- **Thoughtful Regulation**: Frameworks that promote innovation while protecting against risks
- **Inclusive Development**: Ensuring AI benefits are widely shared across society
- **Continued Research**: Advancing both technical capabilities and our understanding of implications

The future of AI isn't predetermined. Through thoughtful development, deployment, and governance, we can shape AI to enhance human potential and address our most pressing challenges.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-05-22",
    author: {
      name: "Samantha Lee",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    featured: true,
    readingTime: "10 min read",
    category: "Technology",
  },
  {
    id: "3",
    title: "Sustainable Living: Small Changes, Big Impact",
    slug: "sustainable-living-small-changes",
    excerpt:
      "Discover practical ways to adopt a more sustainable lifestyle through simple daily choices that collectively make a significant difference.",
    content: `
# Sustainable Living: Small Changes, Big Impact

In the face of climate change and environmental degradation, many people feel overwhelmed about how they can make a difference. The good news is that sustainable living doesn't require radical lifestyle changes. Small, consistent actions can collectively create significant positive impacts.

## Home Energy Efficiency

Reducing your home energy consumption is good for both the planet and your wallet:

### Simple Energy-Saving Tips
- Switch to LED light bulbs
- Unplug electronics when not in use
- Use smart power strips
- Adjust your thermostat (lower in winter, higher in summer)
- Seal windows and doors to prevent drafts

### Renewable Energy Options
- Consider solar panels if feasible
- Switch to a renewable energy provider
- Explore community solar programs

## Sustainable Food Choices

Our food choices have enormous environmental implications:

### Reducing Food Waste
- Plan meals and make shopping lists
- Store food properly to extend freshness
- Use leftovers creatively
- Compost food scraps

### Eco-Friendly Eating
- Incorporate more plant-based meals
- Choose locally grown and seasonal produce
- Support sustainable farming practices
- Reduce packaging by buying in bulk

## Mindful Consumption

Adopting a more thoughtful approach to what we buy:

### The 5 Rs
1. Refuse what you don't need
2. Reduce what you do need
3. Reuse items as much as possible
4. Repair things that break
5. Recycle what can't be refused, reduced, reused, or repaired

### Sustainable Shopping
- Research brands' environmental practices
- Choose quality over quantity
- Embrace second-hand shopping
- Support local businesses

## Water Conservation

Preserving our most precious resource:

### Indoor Water Saving
- Fix leaky faucets and toilets
- Install low-flow fixtures
- Take shorter showers
- Run full loads in dishwashers and washing machines

### Outdoor Water Saving
- Collect rainwater for gardens
- Choose native, drought-resistant plants
- Water gardens in early morning or evening
- Use mulch to retain soil moisture

## Sustainable Transportation

Reducing the environmental impact of getting around:

### Everyday Options
- Walk or bike for short trips
- Use public transportation when available
- Carpool with colleagues or neighbors
- Combine errands to reduce trips

### Longer-Term Choices
- Consider an electric or hybrid vehicle for your next car
- Support improved public transit in your community
- Explore car-sharing programs
- Offset carbon emissions from necessary flights

## Community Engagement

Expanding your impact beyond individual actions:

- Share knowledge without judgment
- Participate in local environmental initiatives
- Support policies that promote sustainability
- Join or form community gardens or repair cafés

## The Ripple Effect

Remember that sustainable living isn't about perfection—it's about progress. Each positive choice influences others and contributes to broader change. By making these small adjustments to our daily habits, we collectively create the momentum needed for larger systemic changes.

Start where you are, use what you have, and do what you can. The planet will thank you.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-06-10",
    author: {
      name: "Michael Rivera",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    readingTime: "7 min read",
    category: "Lifestyle",
  },
  {
    id: "4",
    title: "Mastering Modern JavaScript: Essential Tips and Tricks",
    slug: "mastering-modern-javascript",
    excerpt:
      "Level up your JavaScript skills with these modern techniques, best practices, and lesser-known features of the language.",
    content: `
# Mastering Modern JavaScript: Essential Tips and Tricks

JavaScript continues to evolve rapidly, with new features and best practices emerging regularly. Whether you're a beginner or experienced developer, mastering modern JavaScript can significantly improve your coding efficiency and application performance.

## ES6+ Features You Should Be Using

Modern JavaScript (ECMAScript 2015 and beyond) introduced many powerful features:

### Arrow Functions

Arrow functions provide a concise syntax and lexical \`this\` binding:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

### Destructuring

Extract values from objects and arrays elegantly:

\`\`\`javascript
// Object destructuring
const { name, userAge, profession } = person;
\`\`\`

### Spread and Rest Operators

Manipulate arrays and objects with ease:

\`\`\`javascript
// Spread operator
const newArray = [...oldArray, newItem];
const newObject = { ...oldObject, newProperty: value };

// Rest parameter
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`

### Template Literals

Create strings with embedded expressions:

\`\`\`javascript
const greeting = \`Hello, \${name}! You are \${userAge} years old.\`;
\`\`\`

## Asynchronous JavaScript Mastery

Understanding asynchronous patterns is crucial for modern web development:

### Promises

Handle asynchronous operations cleanly:

\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

### Async/Await

Make asynchronous code look synchronous:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Modern Array Methods

JavaScript offers powerful methods for array manipulation:

\`\`\`javascript
// Filter elements
const adults = people.filter(person => person.userAge >= 18);

// Transform elements
const names = people.map(person => person.name);

// Find an element
const john = people.find(person => person.name === 'John');

// Check if any element matches
const hasChild = people.some(person => person.userAge < 18);

// Create a new value from array
const totalAge = people.reduce((sum, person) => sum + person.userAge, 0);
\`\`\`

## JavaScript Modules

Organize code with ES modules:

\`\`\`javascript
// Exporting
export const PI = 3.14159;
export function circleArea(radius) {
  return PI * radius * radius;
}

// Importing
import { PI, circleArea } from './math.js';
import * as math from './math.js';
\`\`\`

## Performance Optimization

Write efficient JavaScript with these techniques:

### Memoization

Cache expensive function results:

\`\`\`javascript
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const memoizedCalculation = memoize(expensiveCalculation);
\`\`\`

### Debouncing

Limit how often a function can fire:

\`\`\`javascript
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const debouncedSearch = debounce(searchFunction, 300);
\`\`\`

## Testing and Debugging

Improve code quality with proper testing:

- Use Jest or Mocha for unit testing
- Leverage browser DevTools for debugging
- Implement error boundaries in frameworks
- Use linters like ESLint to catch issues early

## Staying Current

JavaScript evolves continuously. To stay updated:

- Follow the TC39 proposals
- Experiment with new features in controlled environments
- Read JavaScript blogs and newsletters
- Participate in community discussions

By mastering these modern JavaScript techniques, you'll write cleaner, more efficient, and maintainable code. Remember that the best way to improve is through consistent practice and application of these concepts in real projects.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-07-05",
    author: {
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    readingTime: "9 min read",
    category: "Programming",
  },
  {
    id: "5",
    title: "Mindfulness in the Digital Age",
    slug: "mindfulness-in-the-digital-age",
    excerpt:
      "Explore practical strategies for maintaining mindfulness and mental well-being while navigating our increasingly digital world.",
    content: `
# Mindfulness in the Digital Age

In our hyperconnected world, maintaining mindfulness—the practice of being fully present and engaged in the moment—has become increasingly challenging. Digital technologies offer tremendous benefits, but they can also fragment our attention and disconnect us from our immediate experiences. This article explores how to cultivate mindfulness while navigating the digital landscape.

## Understanding Digital Distraction

Our devices are designed to capture and hold our attention:

- **Notification Overload**: The average person receives dozens or hundreds of notifications daily
- **Infinite Scrolling**: Social media feeds designed to keep us engaged indefinitely
- **Dopamine-Driven Feedback**: Likes, comments, and other rewards that trigger pleasure responses
- **FOMO**: Fear of missing out on information or social connections

## The Impact on Our Minds

Constant digital engagement affects us in several ways:

### Attention Fragmentation
Our ability to focus deeply becomes compromised when we regularly switch between tasks and respond to interruptions.

### Information Overload
The sheer volume of content we consume can overwhelm our cognitive processing abilities.

### Digital Anxiety
Constant connectivity can create pressure to be always available and responsive.

### Diminished Presence
Preoccupation with digital worlds can reduce our engagement with physical surroundings and in-person relationships.

## Mindfulness Practices for Digital Citizens

Integrating mindfulness into our digital lives requires intentional practices:

### Digital Boundaries
- Designate tech-free times and zones in your home
- Use "do not disturb" settings during focused work or personal time
- Consider a digital sunset—no screens 1-2 hours before bedtime

### Mindful Consumption
- Ask "why" before reaching for your device
- Set intentions before opening apps
- Practice the "one screen rule"—focus on one device at a time

### Attention Training
- Start your day with a brief meditation rather than checking devices
- Take regular "micro-mindfulness" breaks (30-60 seconds of focused breathing)
- Practice single-tasking instead of multitasking

### Digital Detox
- Schedule regular breaks from technology (hours, days, or even weeks)
- Use vacation auto-responders even when not traveling
- Experiment with analog alternatives (paper books, in-person conversations)

## Mindful Technology Use

Technology itself can support mindfulness:

### Helpful Apps and Tools
- Meditation and mindfulness apps
- Screen time monitoring tools
- Distraction-blocking software
- Simplified, mindful interfaces

### Intentional Communication
- Choose the right medium for the message
- Practice full attention during video calls
- Consider asynchronous communication when immediate responses aren't necessary

## Creating a Sustainable Digital Lifestyle

The goal isn't to abandon technology but to use it intentionally:

- **Values Alignment**: Ensure your digital habits support your core values
- **Regular Assessment**: Periodically review how technology is affecting your wellbeing
- **Community Support**: Connect with others interested in digital mindfulness
- **Compassionate Approach**: Treat lapses in digital mindfulness with self-compassion

By cultivating awareness of our digital habits and implementing mindful practices, we can harness the benefits of technology while minimizing its potential downsides. The key is finding a balance that works for your unique needs and circumstances.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-08-18",
    author: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    readingTime: "6 min read",
    category: "Wellness",
  },
  {
    id: "6",
    title: "The Art of Productive Remote Work",
    slug: "art-of-productive-remote-work",
    excerpt:
      "Learn effective strategies to maximize productivity and maintain work-life balance while working remotely.",
    content: `
# The Art of Productive Remote Work

Remote work has transformed from an occasional perk to a standard work arrangement for many professionals. While it offers flexibility and autonomy, remote work also presents unique challenges for productivity and work-life balance. This guide explores strategies to help you thrive in a remote work environment.

## Creating an Effective Workspace

Your physical environment significantly impacts your productivity:

### Dedicated Space
- Designate a specific area solely for work
- Choose a location with minimal distractions
- Ensure proper ergonomics to prevent physical strain

### Essential Equipment
- Reliable high-speed internet connection
- Comfortable chair and appropriate desk height
- Adequate lighting to reduce eye strain
- Noise-canceling headphones if needed

### Personalization
- Add plants or natural elements to improve mood
- Incorporate personal touches that inspire you
- Consider standing desk options for variety

## Establishing Productive Routines

Structure helps maintain focus and boundaries:

### Morning Ritual
- Wake up at a consistent time
- Replace commute time with something meaningful (exercise, reading, meditation)
- Get dressed as if going to an office (even if casual)

### Work Scheduling
- Define clear start and end times
- Use time-blocking techniques for focused work
- Schedule breaks to prevent burnout
- Batch similar tasks together

### End-of-Day Routine
- Create a shutdown ritual to signal the end of work
- Review accomplishments and plan for tomorrow
- Physically "leave" your workspace

## Managing Focus and Distractions

Remote environments present unique concentration challenges:

### Digital Focus
- Turn off non-essential notifications
- Use website blockers during deep work sessions
- Implement the Pomodoro Technique (25 minutes of focus, 5-minute break)
- Close unnecessary browser tabs and applications

### Household Distractions
- Communicate boundaries with household members
- Use visual signals (like a closed door or "in meeting" sign)
- Schedule household chores outside work hours
- Consider noise-masking solutions

## Effective Communication

Clear communication becomes even more crucial in remote settings:

### Proactive Updates
- Regularly share progress with team members
- Make your work visible through documentation
- Don't wait for check-ins to raise issues or questions

### Communication Tools
- Choose the right medium for your message (chat for quick questions, video for complex discussions)
- Be concise and clear in written communications
- Use asynchronous communication when possible

### Virtual Presence
- Turn on video during meetings when appropriate
- Participate actively in discussions
- Practice good virtual meeting etiquette

## Maintaining Work-Life Balance

Preventing burnout is essential for long-term remote work success:

### Physical Boundaries
- Physically separate work and living spaces when possible
- Put away work equipment at the end of the day

### Time Boundaries
- Set and communicate your working hours
- Take your entitled breaks and vacation time
- Resist checking work communications after hours

### Social Connection
- Schedule virtual coffee breaks with colleagues
- Join online communities related to your field
- Make time for in-person social activities

## Continuous Improvement

Refine your remote work approach over time:

- Regularly assess what's working and what isn't
- Experiment with new productivity techniques
- Seek feedback from colleagues and managers
- Stay updated on remote work best practices

Remote work offers tremendous freedom and flexibility, but it requires intentionality and self-discipline. By implementing these strategies and continuously refining your approach, you can create a productive, balanced, and fulfilling remote work experience.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-09-02",
    author: {
      name: "Jessica Taylor",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    readingTime: "7 min read",
    category: "Productivity",
  },
]

export function getFeaturedPosts(): Post[] {
  return blogPosts.filter((post) => post.featured === true)
}

export function getAllPosts(): Post[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
