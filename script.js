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
// ================================================================
// 6. 搜索功能
// ================================================================

const searchDB = [
    { keywords: ['苏晚', '小晚', '实习生'], result: '苏晚，安居房产中介前实习生，2022年3月回江陵县后失联。最后住址：永宁路18号302室。' },
    { keywords: ['陈永宁', '永宁'], result: '陈永宁，1980年生，1998年在永宁路工地失踪。其父陈建国是开发商，永宁路18号即以其名命名。' },
    { keywords: ['张伟', '店长', '安居中介老板'], result: '张伟，安居房产中介店长。其父曾是陈建国的司机，与永宁路18号有隐秘关联。' },
    { keywords: ['李秀芬', '陈永宁母亲', '母亲'], result: '李秀芬，陈永宁之母。2008年在302室写下诅咒后失踪。' },
    { keywords: ['陈建国', '开发商', '父亲'], result: '陈建国，永宁路18号开发商，陈永宁之父。1998年施工事故后隐瞒真相。' },
    { keywords: ['302', '302室', '永宁路18号302'], result: '302室，永宁路18号3楼。苏晚最后居住的房间，镜子后面藏有诅咒文字。' },
    { keywords: ['永宁路18号', '18号', '永宁路'], result: '永宁路18号，1998年建，开发商陈建国。楼内发生过三起死亡事件（2008/2015/2022）。' },
    { keywords: ['坠楼', '2008', '张秀兰', '502室'], result: '2008年6月18日，502室住户张秀兰坠楼身亡。同日，陈永宁遗骨在楼内地基中被发现。' },
    { keywords: ['2015', '203室'], result: '2015年，203室租客王海在屋内死亡，死因未公开。' },
    { keywords: ['2022', '赵明礼', '401室'], result: '2022年，401室住户赵明礼心脏病突发去世，但邻居称当晚曾看到他与空气说话。' },
    { keywords: ['1998', '失踪', '工地', '施工'], result: '1998年，永宁路18号施工期间，陈永宁在工地失踪。其父陈建国下令继续施工。' },
    { keywords: ['镜子', '风水', '禁忌', '镜子后面'], result: '302室卧室有一面落地镜。镜子后面的墙上用红笔写着镜像文字：“陈永宁 1998-2008”。' },
    { keywords: ['诅咒', '红笔', '文字'], result: '302室镜子后面有诅咒文字，疑似陈永宁之母李秀芬所写。' },
    { keywords: ['日记', '苏晚日记'], result: '苏晚在302室留下了一本日记，记录了她的调查过程。最后一篇写于2022年3月15日。' },
    { keywords: ['钥匙', '铜钥匙'], result: '一把老式铜钥匙，随匿名快递寄给林夕。可以打开302室的门。' },
    { keywords: ['密码', '看房密码', '0521'], result: '看房密码是 0521。提示：苏晚的生日。' },
];

function doSearch() {
    const input = document.getElementById('searchInput');
    const content = document.getElementById('searchContent');
    const panel = document.getElementById('searchResults');
    if (!input || !content || !panel) return;

    const query = input.value.trim().toLowerCase();
    if (!query) {
        content.innerHTML = '<div class="no-result">请输入关键词。</div>';
        panel.classList.add('show');
        return;
    }

    const matched = [];
    for (const item of searchDB) {
        for (const kw of item.keywords) {
            if (kw.toLowerCase().includes(query) || query.includes(kw.toLowerCase())) {
                matched.push(item);
                break;
            }
        }
    }

    if (matched.length === 0) {
        content.innerHTML = `
            <div class="no-result">
                ⚠️ 没有找到与“${input.value}”相关的线索。<br />
                <span style="font-size:12px; color:#aa9a88;">试试搜索：苏晚、陈永宁、302、镜子、2008</span>
            </div>
        `;
    } else {
        let html = '';
        for (const item of matched) {
            html += `<div class="result-item">${item.result}</div>`;
        }
        if (query.includes('陈永宁') || query.includes('永宁') || query.includes('陈')) {
            html += `<div class="result-item" style="color:#8f7d66; font-size:12px; border-top:1px solid #e6ddcf; padding-top:8px; margin-top:4px;">
                💡 想了解更多？去 <a href="news.html">江陵县新闻</a> 看看。
            </div>`;
        }
        if (query.includes('302') || query.includes('镜子') || query.includes('苏晚')) {
            html += `<div class="result-item" style="color:#8f7d66; font-size:12px; border-top:1px solid #e6ddcf; padding-top:8px; margin-top:4px;">
                💡 相关记录在 <a href="blog.html">前租客博客</a> 中有详细记载。
            </div>`;
        }
        if (query.includes('2008') || query.includes('坠楼') || query.includes('张秀兰')) {
            html += `<div class="result-item" style="color:#8f7d66; font-size:12px; border-top:1px solid #e6ddcf; padding-top:8px; margin-top:4px;">
                💡 详细档案在 <a href="archive.html">江陵县档案馆</a>。
            </div>`;
        }
        if (query.includes('1998') || query.includes('失踪') || query.includes('工地')) {
            html += `<div class="result-item" style="color:#8f7d66; font-size:12px; border-top:1px solid #e6ddcf; padding-top:8px; margin-top:4px;">
                💡 查看 <a href="news.html">新闻</a> 了解更多。
            </div>`;
        }
        content.innerHTML = html;
    }

    panel.classList.add('show');
    input.blur();
}

function closeSearch() {
    const panel = document.getElementById('searchResults');
    if (panel) panel.classList.remove('show');
}

// 点击外部关闭搜索
document.addEventListener('click', function(e) {
    const panel = document.getElementById('searchResults');
    const input = document.getElementById('searchInput');
    if (!panel || !input) return;
    if (panel.classList.contains('show')) {
        if (!panel.contains(e.target) && e.target !== input) {
            panel.classList.remove('show');
        }
    }
});
// ================================================================
// 6. 隐藏聊天功能（点击省略号触发）—— 动态生成窗口
// ================================================================

// 对话数据
const chatDB = [
    { keywords: ['你是谁', '身份', '陈永宁', '你谁'], reply: '我是陈永宁。1998年，我死在这栋楼的地基里。我父亲陈建国是开发商，他为了赶工期，没有停工。我被埋在了水泥下面。' },
    { keywords: ['发生', '秘密', '楼', '这里'], reply: '这栋楼是用我的命换来的。每七年就会有人死去，那是我的怨气在寻找替身。但那个女孩……她不一样。她不是为了住进来的。她是来找东西的。' },
    { keywords: ['苏晚', '那个女孩', '住进来'], reply: '几个月前，她搬了进来。白天翻档案，晚上敲墙壁。有一天她挪开了那面镜子……然后我就再也感觉不到她走动了。她还在楼里，但已经不在了。' },
    { keywords: ['数字', '日期', '号码', '0521'], reply: '那个女孩搬进来的时候，在墙上用粉笔写了一串数字——“0521”。她每天看着这串数字发呆。我不知道那是什么。也许是她自己的日子，也许是别人的。' },
];

// 创建聊天窗口（只创建一次）
let chatWindow = null;
let chatBody = null;
let chatInput = null;
let chatOpen = false;

function createChatWindow() {
    if (document.getElementById('chatWindow')) return;

    const container = document.createElement('div');
    container.id = 'chatWindow';
    container.className = 'chat-window';
    container.innerHTML = `
        <div class="chat-header">
            <span class="title">◇ 永宁路18号 · 回声</span>
            <button class="close-btn" onclick="closeChat()">✕</button>
        </div>
        <div class="chat-body" id="chatBody">
            <div class="msg system">—— 你听到了一个声音 ——</div>
            <div class="msg npc">“你终于来了。我是陈永宁，这栋楼里困住的人。”</div>
            <div class="msg npc">“问我问题，或者直接说‘你是谁’。”</div>
        </div>
        <div class="chat-input-area">
            <input type="text" id="chatInput" placeholder="输入…" />
            <button onclick="sendChat()">发送</button>
        </div>
    `;
    document.body.appendChild(container);

    chatWindow = container;
    chatBody = document.getElementById('chatBody');
    chatInput = document.getElementById('chatInput');

    // 回车发送
    chatInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') sendChat();
    });
}

function openChat() {
    createChatWindow();
    if (chatWindow) {
        chatWindow.classList.add('open');
        chatOpen = true;
        setTimeout(() => { if (chatInput) chatInput.focus(); }, 100);
    }
}

function closeChat() {
    if (chatWindow) {
        chatWindow.classList.remove('open');
        chatOpen = false;
    }
}

function sendChat() {
    if (!chatInput || !chatBody) return;
    const text = chatInput.value.trim();
    if (!text) return;

    // 用户消息
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = '> ' + text;
    chatBody.appendChild(userMsg);
    chatInput.value = '';

    // 匹配回复
    let reply = '❓ 我听不懂你的问题。试试问“你是谁”或“这里发生了什么”。';
    for (const entry of chatDB) {
        for (const kw of entry.keywords) {
            if (text.includes(kw)) {
                reply = entry.reply;
                break;
            }
        }
        if (reply !== '❓ 我听不懂你的问题。试试问“你是谁”或“这里发生了什么”。') break;
    }

    setTimeout(() => {
        const npcMsg = document.createElement('div');
        npcMsg.className = 'msg npc';
        npcMsg.textContent = '👤 ' + reply;
        chatBody.appendChild(npcMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 150);

    chatBody.scrollTop = chatBody.scrollHeight;
}

// 点击聊天窗口外部关闭
document.addEventListener('click', function(e) {
    if (!chatWindow) return;
    if (chatOpen && !chatWindow.contains(e.target)) {
        const trigger = e.target.closest('.chat-trigger');
        if (!trigger) {
            closeChat();
        }
    }
});

// ESC关闭
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeChat();
});
// 在 script.js 末尾添加
// ================================================================
// 控制台入口控制
// ================================================================

// 检查玩家是否已经看过“联系我们”
var hasSeenContact = localStorage.getItem('hasSeenContact') === 'true';

// 控制台入口元素
var consoleEntry = document.getElementById('consoleEntry');

function updateConsoleEntry() {
    if (hasSeenContact) {
        if (consoleEntry) {
            consoleEntry.style.display = 'block';
            consoleEntry.style.animation = 'fadeIn 0.5s ease';
        }
    } else {
        if (consoleEntry) {
            consoleEntry.style.display = 'none';
        }
    }
}

// 在“联系我们”模态框打开时标记已查看
var originalOpenModal = window.openModal;
window.openModal = function(type) {
    if (type === 'contact') {
        hasSeenContact = true;
        localStorage.setItem('hasSeenContact', 'true');
        updateConsoleEntry();
    }
    if (originalOpenModal) {
        originalOpenModal(type);
    }
};

// 页面加载时更新入口状态
document.addEventListener('DOMContentLoaded', function() {
    updateConsoleEntry();
});

// 如果玩家已经看过，立即显示
updateConsoleEntry();
