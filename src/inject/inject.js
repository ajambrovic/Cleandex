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
	let filteredArticlesCount = 0;
	articles.filter(article => {
		return filterArticlesWithKeywords(article, keywords);
	}).forEach(filteredArticle => {
		filteredArticlesCount++;
		filteredArticle.style.display = 'none';
		// console.log("Naslov: " + filteredArticle.querySelector('.title').innerText + ", sažetak: " + filteredArticle.querySelector('.summary').innerText);
	});
	console.log("Ukupno članaka: " + articles.length + ", od toga filtriranih : " + filteredArticlesCount);
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