// ================================================================
// 1. 绘制 302室 室内照片
// ================================================================
function drawRoomPhoto() {
    const canvas = document.getElementById('roomCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width,
        h = canvas.height;

    const grad = ctx.createLinearGradient(0, 0, w * 0.7, h);
    grad.addColorStop(0, '#2a211c');
    grad.addColorStop(0.5, '#3d3228');
    grad.addColorStop(1, '#1e1612');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(80, 90, 100, 0.25)';
    ctx.fillRect(40, 50, 160, 120);
    ctx.strokeStyle = 'rgba(160, 150, 130, 0.2)';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 50, 160, 120);
    ctx.beginPath();
    ctx.moveTo(120, 50);
    ctx.lineTo(120, 170);
    ctx.moveTo(40, 110);
    ctx.lineTo(200, 110);
    ctx.stroke();

    ctx.fillStyle = 'rgba(50, 40, 35, 0.6)';
    ctx.fillRect(420, 280, 260, 100);
    ctx.fillStyle = 'rgba(60, 50, 45, 0.4)';
    ctx.fillRect(440, 260, 220, 40);
    ctx.fillStyle = 'rgba(40, 35, 30, 0.5)';
    ctx.fillRect(380, 370, 180, 30);

    const px = 580,
        py = 260;
    ctx.fillStyle = 'rgba(20, 15, 12, 0.45)';
    ctx.beginPath();
    ctx.ellipse(px + 30, py + 50, 34, 50, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(px + 30, py + 18, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(20, 15, 12, 0.3)';
    ctx.fillRect(px + 10, py + 30, 40, 16);

    for (let i = 0; i < 300; i++) {
        const x = Math.random() * w,
            y = Math.random() * h;
        const a = Math.random() * 0.08;
        ctx.fillStyle = `rgba(180, 170, 150, ${a})`;
        ctx.fillRect(x, y, 2, 2);
    }

    const vigGrad = ctx.createRadialGradient(w * 0.5, h * 0.4, w * 0.2, w * 0.5, h * 0.4, w * 0.9);
    vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
    vigGrad.addColorStop(1, 'rgba(0,0,0,0.35)');
    ctx.fillStyle = vigGrad;
    ctx.fillRect(0, 0, w, h);
}

// ================================================================
// 2. 绘制 员工合影
// ================================================================
function drawTeamPhoto() {
    const canvas = document.getElementById('teamCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width,
        h = canvas.height;

    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#d6c9b8');
    bgGrad.addColorStop(1, '#c4b7a4');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(200, 210, 220, 0.15)';
    ctx.fillRect(w - 140, 20, 100, 70);
    ctx.strokeStyle = 'rgba(140, 130, 120, 0.2)';
    ctx.strokeRect(w - 140, 20, 100, 70);

    const people = [
        { x: 90, color: '#6a5a48' },
        { x: 210, color: '#7a6a5a' },
        { x: 330, color: '#8a7a6a' },
        { x: 450, color: '#5a4a3a' },
        { x: 570, color: '#6a5a4a' }
    ];
    const names = ['张伟', '李婷', '王芳', '陈磊', '苏晚'];

    people.forEach((p, idx) => {
        const cx = p.x,
            by = 320;
        ctx.fillStyle = p.color;
        ctx.shadowColor = 'rgba(0,0,0,0.05)';
        ctx.shadowBlur = 6;
        ctx.fillRect(cx - 28, by - 120, 56, 100);
        ctx.beginPath();
        ctx.arc(cx, by - 138, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(cx - 18, by - 20, 14, 20);
        ctx.fillRect(cx + 4, by - 20, 14, 20);
        ctx.fillRect(cx - 38, by - 110, 14, 40);
        ctx.fillRect(cx + 24, by - 110, 14, 40);

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#d4c5b0';
        ctx.beginPath();
        ctx.arc(cx, by - 138, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#3d3228';
        ctx.beginPath();
        ctx.arc(cx, by - 148, 22, Math.PI, 2 * Math.PI);
        ctx.fill();

        ctx.fillStyle = '#f7f2e6';
        ctx.fillRect(cx - 10, by - 72, 20, 14);
        ctx.fillStyle = '#4a3d30';
        ctx.font = '8px "SimSun", serif';
        ctx.textAlign = 'center';
        if (idx === 4) {
            ctx.fillText('实习生', cx, by - 62);
        } else {
            ctx.fillText('员工', cx, by - 62);
        }

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#4a3d30';
        ctx.font = '12px "SimSun", serif';
        ctx.textAlign = 'center';
        ctx.fillText(names[idx], cx, by + 28);
        if (idx === 4) {
            ctx.fillStyle = '#8f7d66';
            ctx.font = '10px "SimSun", serif';
            ctx.fillText('(实习生)', cx, by + 44);
        }
    });

    const vigGrad2 = ctx.createRadialGradient(w * 0.5, h * 0.4, w * 0.3, w * 0.5, h * 0.4, w * 0.85);
    vigGrad2.addColorStop(0, 'rgba(0,0,0,0)');
    vigGrad2.addColorStop(1, 'rgba(0,0,0,0.2)');
    ctx.fillStyle = vigGrad2;
    ctx.fillRect(0, 0, w, h);
}

// ================================================================
// 3. 模态框控制
// ================================================================
function openModal(type) {
    const map = {
        'property': 'modal-property',
        'about': 'modal-about',
        'contact': 'modal-contact'
    };
    const el = document.getElementById(map[type]);
    if (el) {
        el.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (type === 'property') setTimeout(drawRoomPhoto, 50);
        if (type === 'about') setTimeout(drawTeamPhoto, 50);
        if (type === 'contact') {
            document.getElementById('pwdInput').value = '';
            document.getElementById('pwdResult').textContent = '';
            document.getElementById('pwdInput').focus();
        }
    }
}

function closeModal(type) {
    const map = {
        'property': 'modal-property',
        'about': 'modal-about',
        'contact': 'modal-contact'
    };
    const el = document.getElementById(map[type]);
    if (el) {
        el.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(el => {
            el.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// ================================================================
// 4. 密码验证
// ================================================================
function checkPassword() {
    const input = document.getElementById('pwdInput');
    const result = document.getElementById('pwdResult');
    const val = input.value.trim();

    if (val === '0521') {
        result.className = 'password-result success';
        result.innerHTML = '✅ 密码正确。欢迎回来，林夕。';
        setTimeout(() => {
            result.innerHTML = `
                <div style="margin-top:12px; padding:14px; background:rgba(200,185,165,0.2); border-left:4px solid #8f7d66; font-size:13px; line-height:2;">
                    <strong style="color:#4a3d30;">📋 苏晚 · 最后搜索记录</strong><br />
                    <span style="color:#6a5a48;">• 永宁路18号 事故</span><br />
                    <span style="color:#6a5a48;">• 陈永宁 是谁</span><br />
                    <span style="color:#6a5a48;">• 安居中介 老板 姓名</span><br />
                    <span style="color:#6a5a48;">• 江陵县 2008 坠楼</span><br />
                    <span style="color:#6a5a48;">• 302室 前任租客</span><br />
                    <span style="color:#6a5a48;">• 镜子 风水 禁忌</span><br />
                    <span style="color:#8f7d66; font-size:12px; display:block; margin-top:6px; border-top:1px solid #ddd0bf; padding-top:8px;">
                        ⚠️ 用户备注：「这栋楼在呼吸。」
                    </span>
                </div>
            `;
            input.disabled = true;
        }, 400);
    } else if (val === '') {
        result.className = 'password-result error';
        result.textContent = '⚠️ 请输入密码。';
    } else {
        result.className = 'password-result error';
        result.textContent = '❌ 密码错误，请重试。';
        input.value = '';
        input.focus();
    }
}

document.getElementById('pwdInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') checkPassword();
});

// ================================================================
// 5. 控制台入口控制（查看联系我们后才显示）
// ================================================================

var consoleEntry = document.getElementById('consoleEntry');
var hasSeenContact = false;

// 检查 localStorage
try {
    if (localStorage.getItem('hasSeenContact') === 'true') {
        hasSeenContact = true;
        if (consoleEntry) {
            consoleEntry.style.display = 'block';
        }
    }
} catch (e) {}

// 保存原始的 openModal
var originalOpenModal = window.openModal;
window.openModal = function(type) {
    if (originalOpenModal) {
        originalOpenModal(type);
    }
    if (type === 'contact') {
        hasSeenContact = true;
        try {
            localStorage.setItem('hasSeenContact', 'true');
        } catch (e) {}
        if (consoleEntry) {
            consoleEntry.style.display = 'block';
            consoleEntry.style.animation = 'fadeIn 0.5s ease';
        }
    }
};

// ================================================================
// 6. 模拟控制台（陈永宁对话）
// ================================================================

var chatDB = [
    { keywords: ['你是谁', '身份', '陈永宁', '你谁'], reply: '我是陈永宁。1998年，我死在这栋楼的地基里。我父亲陈建国是开发商，他为了赶工期，没有停工。我被埋在了水泥下面。' },
    { keywords: ['发生', '秘密', '楼', '这里'], reply: '这栋楼是用我的命换来的。每七年就会有人死去，那是我的怨气在寻找替身。但那个女孩……她不一样。她不是为了住进来的。她是来找东西的。' },
    { keywords: ['苏晚', '那个女孩', '住进来'], reply: '几个月前，她搬了进来。白天翻档案，晚上敲墙壁。有一天她挪开了那面镜子……然后我就再也感觉不到她走动了。她还在楼里，但已经不在了。' },
    { keywords: ['数字', '日期', '号码', '0521'], reply: '那个女孩搬进来的时候，在墙上用粉笔写了一串数字——“0521”。她每天看着这串数字发呆。我不知道那是什么。也许是她自己的日子，也许是别人的。' },
];

function openConsole() {
    var window = document.getElementById('chatWindow');
    if (window) {
        window.classList.add('open');
        var input = document.getElementById('chatInput');
        if (input) setTimeout(function() { input.focus(); }, 100);
    }
}

function closeChat() {
    var window = document.getElementById('chatWindow');
    if (window) {
        window.classList.remove('open');
    }
}

function sendChat() {
    var input = document.getElementById('chatInput');
    var body = document.getElementById('chatBody');
    if (!input || !body) return;
    var text = input.value.trim();
    if (!text) return;

    var userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = '> ' + text;
    body.appendChild(userMsg);
    input.value = '';

    var reply = '❓ 我听不懂你的问题。试试问“你是谁”或“这里发生了什么”。';
    for (var i = 0; i < chatDB.length; i++) {
        var matched = false;
        for (var j = 0; j < chatDB[i].keywords.length; j++) {
            if (text.indexOf(chatDB[i].keywords[j]) !== -1) {
                matched = true;
                break;
            }
        }
        if (matched) {
            reply = chatDB[i].reply;
            break;
        }
    }

    setTimeout(function() {
        var npcMsg = document.createElement('div');
        npcMsg.className = 'msg npc';
        npcMsg.textContent = '👤 ' + reply;
        body.appendChild(npcMsg);
        body.scrollTop = body.scrollHeight;
    }, 200);

    body.scrollTop = body.scrollHeight;
}

document.getElementById('chatInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendChat();
});

// 点击外部关闭聊天
document.addEventListener('click', function(e) {
    var window = document.getElementById('chatWindow');
    if (!window) return;
    if (window.classList.contains('open') && !window.contains(e.target) && e.target.id !== 'consoleEntry' && !e.target.closest('#consoleEntry')) {
        closeChat();
    }
});

// ESC关闭
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeChat();
});

// ================================================================
// 7. 页面加载初始化
// ================================================================
window.addEventListener('load', function() {
    drawRoomPhoto();
    drawTeamPhoto();

    // 如果已经看过，显示入口
    try {
        if (localStorage.getItem('hasSeenContact') === 'true') {
            if (consoleEntry) {
                consoleEntry.style.display = 'block';
            }
        }
    } catch (e) {}

    console.log('%c🏚️ 永宁路18号 · 安居中介', 'font-size:20px; color:#5a4a38;');
    console.log('%c🔍 提示：查看“联系我们”后，底部会出现“控制台”入口。', 'font-size:13px; color:#8f7d66;');
});
