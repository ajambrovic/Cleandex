function hideContentWithKeywords(keywords) {
	const articles = document.querySelectorAll('li.clearfix');
	// get all article that contain a keyword
	const filter = Array.prototype.filter;
	const filteredArticles = filter.call(articles, function (article) {
		const articleTitle = article.querySelector('.title');
		const articleSummary = article.querySelector('.summary');
		return keywords.some(keyword => {
			return articleTitle.innerText.toLowerCase().indexOf(keyword.toLowerCase()) > -1 || articleSummary.innerText.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
		});
	});
	// and hide them
	filteredArticles.forEach(filteredArticle => {
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