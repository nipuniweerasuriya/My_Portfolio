class CodeBackground {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'code-background';
        document.body.prepend(this.container);
        this.lines = [];
        this.codeSnippets = [
            `const project = new Project('Portfolio', { tech: ['html', 'css'] });`,
            `function animateBackground() {\n  setInterval(createCodeLine, 1000);\n}`,
            `class Developer {\n  constructor(name) {\n    this.name = name;\n    this.skills = [];\n  }\n}`,
            `document.addEventListener('DOMContentLoaded', initPortfolio);`,
            `npm install --save latest-dependencies`,
            `git push origin main`,
            `const api = new RESTAPI({\n  endpoints: ['projects', 'blog']\n});`,
            `@media (max-width: 768px) {\n  .header { flex-direction: column; }\n}`,
            `docker-compose up -d --build`,
            `<Route path="/projects" component={Projects} />`,
            `// TODO: Add more awesome features here`,
            `export default function Portfolio() {\n  return <MainComponent />;\n}`
        ];
        this.init();
    }

    init() {
        setInterval(() => this.createCodeLine(), 800);
        window.addEventListener('resize', () => this.adjustLinePositions());
    }

    createCodeLine() {
        const line = document.createElement('div');
        line.className = 'code-line';
        
        const snippet = this.getRandomSnippet();
        const typingSpeed = 30 + Math.random() * 50;
        
        this.animateTyping(line, snippet, typingSpeed);
        
        this.positionLine(line);
        this.container.appendChild(line);
        this.lines.push(line);
        
        if (this.lines.length > 15) {
            const oldLine = this.lines.shift();
            oldLine.remove();
        }
    }

    animateTyping(element, text, speed) {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i) + `<span class="code-cursor"></span>`;
                i++;
            } else {
                clearInterval(typing);
                element.innerHTML = text; // Remove cursor when done
            }
        }, speed);
    }

    getRandomSnippet() {
        return this.codeSnippets[Math.floor(Math.random() * this.codeSnippets.length)];
    }

    positionLine(line) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        line.style.left = `${10 + Math.random() * 70}%`;
        line.style.top = `${10 + Math.random() * 80}%`;
        line.style.animationDelay = `${Math.random() * 5}s`;
    }

    adjustLinePositions() {
        this.lines.forEach(line => this.positionLine(line));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CodeBackground();
});