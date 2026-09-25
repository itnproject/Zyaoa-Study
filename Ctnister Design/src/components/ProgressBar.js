/**
 * ProgressBar Component
 */
export default class ProgressBar {
    constructor(options = {}) {
        this.value = options.value || 0;
        this.max = options.max || 100;
        this.active = options.active || false;
        this.animated = options.animated || false;
        this.showLabel = options.showLabel || false;
        this.color = options.color || 'linear-gradient(90deg, #0ea5e9, #06b6d4)';
    }

    render() {
        const percentage = (this.value / this.max) * 100;
        const activeClass = this.active ? 'active' : '';
        const animatingClass = this.animated ? 'animating' : '';
        
        return `
            <div class="ctn-external-progress-bar ${activeClass}">
                <div class="ctn-external-progress-fill ${animatingClass}" style="width: ${percentage}%; background: ${this.color};"></div>
            </div>
            ${this.showLabel ? `<div style="text-align: center; font-size: 13px; color: #64748b; margin-top: 8px;">${Math.round(percentage)}%</div>` : ''}
        `;
    }

    setValue(value) {
        this.value = value;
        const fill = document.querySelector('.ctn-external-progress-fill');
        if (fill) {
            fill.style.width = (value / this.max) * 100 + '%';
        }
    }

    setActive(active) {
        this.active = active;
        const bar = document.querySelector('.ctn-external-progress-bar');
        if (bar) {
            bar.classList.toggle('active', active);
        }
    }
}