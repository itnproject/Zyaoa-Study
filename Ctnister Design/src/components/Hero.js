/**
 * Hero Component
 */
export default class Hero {
    constructor(options = {}) {
        this.badge = options.badge || 'CDN测试工具';
        this.title = options.title || 'Ctnister Design';
        this.description = options.description || '现代化的网络测试工具UI组件库';
        this.buttonText = options.buttonText || '开始测试';
        this.buttonLink = options.buttonLink || '#';
    }

    render() {
        return `
            <div class="ctn-hero">
                <div class="ctn-hero-badge">${this.badge}</div>
                <h1>${this.title}</h1>
                <p>${this.description}</p>
                <a href="${this.buttonLink}" class="ctn-ping-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                    ${this.buttonText}
                </a>
            </div>
        `;
    }
}