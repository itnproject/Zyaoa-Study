/**
 * SpeedTest Component
 */
export default class SpeedTest {
    constructor(options = {}) {
        this.onTestStart = options.onTestStart || (() => {});
        this.onTestComplete = options.onTestComplete || (() => {});
        this.onTestCancel = options.onTestCancel || (() => {});
    }

    render() {
        return `
            <div class="ctn-speed-section">
                <div class="ctn-section-header">
                    <div class="ctn-section-badge">SPEED TEST</div>
                    <h2 class="ctn-section-title">网络速度测试</h2>
                    <button class="ctn-external-speed-btn" id="speedTestBtn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                        开始测速
                    </button>
                </div>
                <div class="ctn-external-speed-test-ui">
                    <div class="ctn-external-speed-results">
                        <div class="ctn-ext-result-item">
                            <div class="ctn-ext-result-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                </svg>
                                下行速度
                            </div>
                            <div class="ctn-ext-result-value" id="downloadSpeed">0</div>
                            <div class="ctn-ext-result-unit">Mbps</div>
                        </div>
                        <div class="ctn-ext-result-divider"></div>
                        <div class="ctn-ext-result-item">
                            <div class="ctn-ext-result-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 19V5"/>
                                    <path d="M5 12l7-7 7 7"/>
                                </svg>
                                上行速度
                            </div>
                            <div class="ctn-ext-result-value" id="uploadSpeed">0</div>
                            <div class="ctn-ext-result-unit">Mbps</div>
                        </div>
                    </div>
                    <div class="ctn-external-progress-bar" id="speedProgressBar">
                        <div class="ctn-external-progress-fill" id="speedProgressFill"></div>
                    </div>
                    <div class="ctn-external-status-text" id="speedStatusText">准备开始测速...</div>
                    <button class="ctn-external-speed-btn-test" id="speedTestBtnMain">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                        开始测速
                    </button>
                    <div class="ctn-external-speed-info">测试将自动进行下行和上行速度测量</div>
                </div>
            </div>
        `;
    }

    init() {
        const btn = document.getElementById('speedTestBtn');
        const btnMain = document.getElementById('speedTestBtnMain');
        const progressBar = document.getElementById('speedProgressBar');
        const progressFill = document.getElementById('speedProgressFill');
        const statusText = document.getElementById('speedStatusText');
        const downloadSpeed = document.getElementById('downloadSpeed');
        const uploadSpeed = document.getElementById('uploadSpeed');

        let isTesting = false;

        const startTest = () => {
            if (isTesting) return;
            isTesting = true;
            this.onTestStart();

            btn.classList.add('active');
            btn.innerHTML = `
                <svg class="ctn-loading" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                测试中...
            `;

            btnMain.classList.add('cancel-mode');
            btnMain.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                取消测试
            `;

            progressBar.classList.add('active');
            statusText.textContent = '正在测试下行速度...';

            // Simulate progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += 2;
                progressFill.style.width = progress + '%';
                downloadSpeed.textContent = (Math.random() * 300).toFixed(1);

                if (progress >= 50) {
                    statusText.textContent = '正在测试上行速度...';
                }

                if (progress >= 100) {
                    clearInterval(interval);
                    isTesting = false;
                    this.onTestComplete();

                    btn.classList.remove('active');
                    btn.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                        重新测速
                    `;

                    btnMain.classList.remove('cancel-mode');
                    btnMain.innerHTML = `
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                        重新测速
                    `;

                    statusText.textContent = '测速完成';
                    uploadSpeed.textContent = (Math.random() * 100).toFixed(1);
                }
            }, 50);
        };

        const cancelTest = () => {
            isTesting = false;
            this.onTestCancel();

            btn.classList.remove('active');
            btn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                开始测速
            `;

            btnMain.classList.remove('cancel-mode');
            btnMain.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                开始测速
            `;

            progressBar.classList.remove('active');
            progressFill.style.width = '0%';
            statusText.textContent = '测速已取消';
        };

        btn.addEventListener('click', () => {
            if (isTesting) {
                cancelTest();
            } else {
                startTest();
            }
        });

        btnMain.addEventListener('click', () => {
            if (isTesting) {
                cancelTest();
            } else {
                startTest();
            }
        });
    }
}