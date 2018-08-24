function filterArticlesWithKeywords(article, keywords) {
	const articleTitle = article.querySelector('.title');
	const articleSummary = article.querySelector('.summary');
	return keywords.some(keyword => {
		const articleTitleContainsKeyword = articleTitle.innerText.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
		const articleSummaryContainsKeyword = articleSummary.innerText.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
		return articleTitleContainsKeyword || articleSummaryContainsKeyword;
	});
}

function hideContentWithKeywords(keywords) {
	const articles = Array.from(document.querySelectorAll('li.clearfix'));
	// get all articles that contain a keyword
	// and remove each one
	articles.filter(article => {
		return filterArticlesWithKeywords(article, keywords);
	}).forEach(filteredArticle => {
		filteredArticle.style.display = 'none';
		console.log(filteredArticle.querySelector('.title').innerText);
		console.log(filteredArticle.querySelector('.summary').innerText);
	});
}

chrome.extension.sendMessage({}, function (response) {
	const readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "interactive") {
			clearInterval(readyStateCheckInterval);
			// load keywords from file
			const url = chrome.runtime.getURL('src/keywords.json');

			fetch(url)
				.then((response) => response.json()) //assuming file contains json
				.then((json) => hideContentWithKeywords(json));

		}
	}, 10);
});