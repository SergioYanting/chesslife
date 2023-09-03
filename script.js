document.addEventListener('DOMContentLoaded', function() {
    const sortBySelect = document.getElementById('sort-by');
    const articleList = document.querySelector('.article-list');

    sortBySelect.addEventListener('change', function() {
        const selectedOption = sortBySelect.value;

        // 根據選擇的排序選項執行相應的排序邏輯，並更新文章列表
        if (selectedOption === 'popularity') {
            // 根據點閱次數由高到低排序
        } else if (selectedOption === 'newest') {
            // 根據發佈時間由新到舊排序（預設）
        } else if (selectedOption === 'oldest') {
            // 根據發佈時間由舊到新排序
        }
    });

    // 初始化頁面時，可能需要載入文章列表的內容
});

// 假設你有一個包含文章的數組，每個文章是一個物件，具有點閱次數和發佈時間等屬性
const articles = [
    { title: '文章1', views: 100, publishDate: new Date('2023-08-15') },
    { title: '文章2', views: 150, publishDate: new Date('2023-08-10') },
    { title: '文章3', views: 80, publishDate: new Date('2023-08-20') },
    // 更多文章...
];

function renderArticles(articles) {
    const articleList = document.querySelector('.article-list');
    articleList.innerHTML = ''; // 清空文章列表

    articles.forEach((article) => {
        const articleItem = document.createElement('div');
        articleItem.classList.add('article-item');
        articleItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>點閱次數: ${article.views}</p>
            <p>發佈時間: ${article.publishDate.toLocaleDateString()}</p>
        `;
        articleList.appendChild(articleItem);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const sortBySelect = document.getElementById('sort-by');
    
    sortBySelect.addEventListener('change', function() {
        const selectedOption = sortBySelect.value;

        if (selectedOption === 'popularity') {
            // 根據點閱次數由高到低排序
            articles.sort((a, b) => b.views - a.views);
        } else if (selectedOption === 'newest') {
            // 根據發佈時間由新到舊排序（預設）
            articles.sort((a, b) => b.publishDate - a.publishDate);
        } else if (selectedOption === 'oldest') {
            // 根據發佈時間由舊到新排序
            articles.sort((a, b) => a.publishDate - b.publishDate);
        }

        renderArticles(articles); // 更新文章列表
    });

    // 初始化頁面時，渲染預設排序的文章列表
    renderArticles(articles);
});

// 檢查 localStorage 中是否已經有 'views' 變數，如果沒有則初始化為 0
if (!localStorage.getItem('views')) {
    localStorage.setItem('views', '0');
}

// 獲取當前 'views' 變數的值
let views = parseInt(localStorage.getItem('views'));

// 更新 'views' 變數的值並在網頁上顯示
views += 1;
localStorage.setItem('views', views.toString());

// 在網頁上顯示 'views' 的值
const viewsElement = document.getElementById('views-counter');
viewsElement.textContent = views.toString();
