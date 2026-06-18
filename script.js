// ================================================================
// 1. 模态框控制（不变）
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
// 2. 密码验证 —— 跳转到 history.html
// ================================================================
function checkPassword() {
    const input = document.getElementById('pwdInput');
    const result = document.getElementById('pwdResult');
    const val = input.value.trim();

    if (val === '0521') {
        result.className = 'password-result success';
        result.innerHTML = '✅ 密码正确。正在跳转……';
        setTimeout(() => {
            window.location.href = 'history.html';
        }, 600);
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
// 3. 控制台互动 —— 陈永宁只知道楼里的事
// ================================================================
window.game = {
    _step: 0,
    _welcome: function() {
        console.log('%c🏚️ 永宁路18号 · 你听到了一个声音……', 'font-size:18px; color:#8a3a2a;');
        console.log('  “你终于来了。我是陈永宁，这栋楼里困住的人。”');
        console.log('  “你可以问我问题，输入 game.ask(\"你是谁\") 试试。”');
        console.log('  “或者直接输入 game.help() 查看所有指令。”');
    },
    help: function() {
        console.log('📖 可用指令：');
        console.log('  game.ask("你是谁")       — 了解我的身份');
        console.log('  game.ask("这里发生了什么") — 楼的秘密');
        console.log('  game.ask("苏晚")         — 关于那个住进来的女孩');
        console.log('  game.ask("数字")         — 她留下的数字');
        console.log('  game.clear()            — 清空控制台');
        return '请输入以上命令。';
    },
    ask: function(question) {
        if (!question || typeof question !== 'string') {
            console.log('⚠️ 请用字符串提问，例如 game.ask("你是谁")');
            return;
        }
        const q = question.trim();

        if (q.includes('谁') && (q.includes('你') || q.includes('身份'))) {
            console.log('👤 我是陈永宁。1998年，我死在这栋楼的地基里。');
            console.log('   我父亲陈建国是开发商，他为了赶工期，没有停工。');
            console.log('   我被埋在了水泥下面。');
            this._step = 1;
            return '我是陈永宁。';
        } else if (q.includes('发生') || q.includes('秘密') || q.includes('楼')) {
            console.log('🏚️ 这栋楼是用我的命换来的。每七年就会有人死去，');
            console.log('   那是我的怨气在寻找替身。但那个女孩……她不一样。');
            console.log('   她不是为了住进来的。她是来找东西的。');
            this._step = 2;
            return '楼里有秘密。';
        } else if (q.includes('苏晚')) {
            console.log('👤 你是在问那个住进302的女孩？');
            console.log('   几个月前，她搬了进来。白天翻档案，晚上敲墙壁。');
            console.log('   有一天她挪开了那面镜子……然后我就再也感觉不到她走动了。');
            console.log('   她还在楼里，但已经不在了。');
            console.log('   ——如果你想找她，顺着她查过的东西走一遍。');
            this._step = 4;
            return '她在302室的镜子后面。';
        } else if (q.includes('数字') || q.includes('日期') || q.includes('号码')) {
            console.log('📅 那个女孩搬进来的时候，在墙上用粉笔写了一串数字。');
            console.log('   “0521” —— 她每天看着这串数字发呆。');
            console.log('   我不知道那是什么。也许是她自己的日子，也许是别人的。');
            this._step = 5;
            return '墙上有一串数字：0521。';
        } else {
            console.log('❓ 我听不懂你的问题。试试 game.help() 获取提示。');
            return '请重新提问。';
        }
    },
    clear: function() {
        console.clear();
        console.log('🔄 控制台已清空。');
        this._welcome();
        return '已清空。';
    }
};

// ================================================================
// 4. 页面加载初始化
// ================================================================
window.addEventListener('load', function() {
    console.log('%c🏚️ 永宁路18号 · 控制台已开启', 'font-size:16px; background:#2c241c; color:#d6c9b0; padding:4px 10px;');
    window.game._welcome();
    console.log('%c💡 提示：输入 game.help() 开始与“陈永宁”对话。', 'font-size:14px; color:#8f7d66;');
});

// ================================================================
// 5. 公共工具函数（跨页面复用）
// ================================================================

// 切换显示隐藏线索弹窗（给 forum.html / history.html 用）
function toggleClue(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.classList.toggle('show');
        if (toast.classList.contains('show')) {
            setTimeout(() => {
                toast.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }
}
